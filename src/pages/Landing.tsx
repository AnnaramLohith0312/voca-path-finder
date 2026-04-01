import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AnalyzesSection from "@/components/landing/AnalyzesSection";
import SampleResultsSection from "@/components/landing/SampleResultsSection";
import TrustSection from "@/components/landing/TrustSection";
import CTASection from "@/components/landing/CTASection";

const Landing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <HowItWorksSection />
    <AnalyzesSection />
    <SampleResultsSection />
    <TrustSection />
    <CTASection />
    <Footer />
  </div>
);

export default Landing;
