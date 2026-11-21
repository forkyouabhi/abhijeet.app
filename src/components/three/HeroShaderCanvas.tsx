"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uPointer;

  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      value += amp * noise(p);
      p = rot * p * 2.02 + vec2(1.7, 9.2);
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

    float t = uTime * 0.085;

    // Anchor architectural light field asymmetrically to the upper-right
    vec2 pointerShift = (uPointer - 0.5) * 0.14;
    vec2 focus = vec2(0.32 * aspect, 0.06) + pointerShift;

    // Two-stage domain warp for brushed metallic silk texture
    vec2 q = vec2(
      fbm(p * 1.45 + vec2(t, -t * 0.6)),
      fbm(p * 1.45 + vec2(-t * 0.5, t * 0.8) + vec2(5.2, 1.3))
    );
    float field = fbm(p * 1.7 + 1.55 * q + vec2(t * 0.4, -t * 0.3));

    // Distance falloff from studio key-light focal point
    float dist = length(p - focus);
    float spotlight = exp(-dist * dist * 1.55);

    // Subtle procedural architectural iso-contour hairlines
    float contourWave = abs(fract(field * 7.5) - 0.5);
    float contourLine = 1.0 - smoothstep(0.0, 0.022, contourWave);
    contourLine *= spotlight * 0.24;

    // Fine metallic ridge sheen
    float ridge = pow(clamp(field, 0.0, 1.0), 2.35) * spotlight;

    // Deep obsidian mineral palette + brushed champagne brass
    vec3 obsidianDeep = vec3(0.035, 0.039, 0.051);   // #090A0D
    vec3 obsidianMid  = vec3(0.067, 0.075, 0.098);   // #111318
    vec3 bronzeMuted  = vec3(0.365, 0.278, 0.155);   // deep architectural bronze
    vec3 brassAccent  = vec3(0.784, 0.616, 0.361);   // #C89D5C
    vec3 parchment    = vec3(0.902, 0.835, 0.722);   // #E6D5B8

    vec3 color = mix(obsidianDeep, obsidianMid, smoothstep(0.15, 0.85, field * spotlight + 0.15));
    color += bronzeMuted * ridge * 0.75;
    color += brassAccent * pow(ridge, 1.65) * 0.65;
    color += mix(brassAccent, parchment, 0.4) * contourLine;

    // Quiet vignette on the left/bottom for effortless typographic contrast
    float leftReadability = smoothstep(-0.65 * aspect, 0.25 * aspect, p.x);
    color = mix(obsidianDeep, color, 0.38 + 0.62 * leftReadability);

    // Subtle edge vignette + seamless bottom handoff into Act 01
    float edgeVignette = smoothstep(1.25, 0.2, length(uv - 0.5));
    float bottomFade = smoothstep(0.0, 0.24, uv.y);
    color = mix(obsidianDeep, color, (0.55 + 0.45 * edgeVignette) * bottomFade);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane({ active }: { active: boolean }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const pointerTarget = useRef(new THREE.Vector2(0.72, 0.54));
  const pointerCurrent = useRef(new THREE.Vector2(0.72, 0.54));
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1440, 900) },
      uPointer: { value: new THREE.Vector2(0.72, 0.54) },
    }),
    []
  );

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      pointerTarget.current.set(
        e.clientX / Math.max(window.innerWidth, 1),
        1.0 - e.clientY / Math.max(window.innerHeight, 1)
      );
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useFrame((_, delta) => {
    if (!materialRef.current || !active) return;
    const clampedDelta = Math.min(delta, 0.05);
    materialRef.current.uniforms.uTime.value += clampedDelta;
    materialRef.current.uniforms.uResolution.value.set(size.width, size.height);

    pointerCurrent.current.lerp(pointerTarget.current, 0.04);
    materialRef.current.uniforms.uPointer.value.copy(pointerCurrent.current);
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
}

function StaticEditorialBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 bg-obsidian-950 studio-spotlight"
    >
      {/* Subtle architectural concentric hairlines as reduced-motion / no-WebGL fallback */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="1040" cy="400" r="190" stroke="#C89D5C" strokeWidth="0.6" strokeOpacity="0.45" />
        <circle cx="1040" cy="400" r="320" stroke="#C89D5C" strokeWidth="0.5" strokeOpacity="0.28" />
        <circle cx="1040" cy="400" r="470" stroke="#F4F1EA" strokeWidth="0.45" strokeOpacity="0.12" />
        <line x1="1040" y1="0" x2="1040" y2="900" stroke="#F4F1EA" strokeWidth="0.4" strokeOpacity="0.08" />
        <line x1="0" y1="400" x2="1440" y2="400" stroke="#F4F1EA" strokeWidth="0.4" strokeOpacity="0.08" />
      </svg>
    </div>
  );
}

export default function HeroShaderCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webglAvailable, setWebglAvailable] = useState(true);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    mq.addEventListener("change", onChange);

    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl2") ||
        testCanvas.getContext("webgl");
      if (!gl) setWebglAvailable(false);
    } catch {
      setWebglAvailable(false);
    }

    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      {reducedMotion || !webglAvailable ? (
        <StaticEditorialBackdrop />
      ) : (
        <Canvas
          dpr={[1, 2]}
          frameloop={inView ? "always" : "never"}
          gl={{
            antialias: false,
            alpha: false,
            powerPreference: "high-performance",
          }}
          className="h-full w-full"
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", (e) => {
              e.preventDefault();
              setWebglAvailable(false);
            });
          }}
        >
          <ShaderPlane active={inView} />
        </Canvas>
      )}

      {/* Architectural hairline reticle + tactile grain */}
      <div className="editorial-grain pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />
    </div>
  );
}
