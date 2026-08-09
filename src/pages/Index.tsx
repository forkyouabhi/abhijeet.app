import { AntiGravityHero } from "@/components/AntiGravityHero";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";

const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const Experience = lazy(() => import("@/components/Experience").then(m => ({ default: m.Experience })));
const FeaturedProject = lazy(() => import("@/components/FeaturedProject").then(m => ({ default: m.FeaturedProject })));
const Education = lazy(() => import("@/components/Education").then(m => ({ default: m.Education })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <AntiGravityHero />
      <Suspense fallback={null}>
        <About />
        <Experience />
        <FeaturedProject />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
