import { Canvas } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  // Generate random particle positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 40 - 20;
      const y = Math.random() * 40 - 20;
      const z = Math.random() * 40 - 20;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  // Mouse move handler
  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(time / 10) * 0.2 + mousePosition.current.y * 0.1;
    mesh.current.rotation.y = Math.sin(time / 15) * 0.2 + mousePosition.current.x * 0.1;
    
    // Animate individual particles
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] = Math.sin(time + positions[i]) * 0.5;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#d97706"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function WaveGrid() {
  const mesh = useRef<THREE.Mesh>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const geometry = mesh.current.geometry as THREE.PlaneGeometry;
    const positions = geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const distance = Math.sqrt(
        Math.pow(x - mousePosition.current.x * 5, 2) + 
        Math.pow(y - mousePosition.current.y * 5, 2)
      );
      positions[i + 2] = Math.sin(distance - time) * 0.5;
    }
    
    geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.z = time * 0.05;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -5, 0]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial
        color="#d97706"
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

export const InteractiveBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#d97706" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7f1d1d" />
        <Particles count={800} />
        <WaveGrid />
      </Canvas>
    </div>
  );
};
