import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Method from "@/components/sections/Method";
import Areas from "@/components/sections/Areas";
import HowItWorks from "@/components/sections/HowItWorks";
import EducationalContent from "@/components/sections/EducationalContent";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Method />
        <Areas />
        <HowItWorks />
        <EducationalContent />
        <Results />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
