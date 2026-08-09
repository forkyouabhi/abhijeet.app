import { AntiGravityHero } from "@/components/AntiGravityHero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <AntiGravityHero />
      <About />
      <Experience />
      <FeaturedProject />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
