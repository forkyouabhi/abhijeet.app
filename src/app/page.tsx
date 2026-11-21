import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ExperienceDossier } from "@/components/sections/ExperienceDossier";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { TechnicalCraft } from "@/components/sections/TechnicalCraft";
import { EducationHonors } from "@/components/sections/EducationHonors";
import { ContactColophon } from "@/components/sections/ContactColophon";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExperienceDossier />
        <SelectedSystems />
        <TechnicalCraft />
        <EducationHonors />
      </main>
      <ContactColophon />
    </>
  );
}
