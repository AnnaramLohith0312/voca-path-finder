import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
    <NetworkBackground />
    <div className="bg-mesh absolute inset-0" />
    <div className="relative z-10 max-w-4xl mx-auto text-center px-5 pt-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/50 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <Sparkles size={14} className="text-insight" />
        <span className="text-xs text-muted-foreground">AI-Powered Career Intelligence</span>
      </div>
      <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
        Find the career path<br />
        <span className="text-gradient-hero">that actually fits you.</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
        VOCA analyzes your education, skills, interests, and goals to generate 3–5 explainable career matches — with transparent reasoning, not black-box predictions.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
        <Link to="/auth?signup=true">
          <Button variant="hero" size="xl">
            Start My Career Projection
            <ArrowRight size={18} />
          </Button>
        </Link>
        <Link to="/results">
          <Button variant="hero-outline" size="xl">See Sample Results</Button>
        </Link>
      </div>
      <p className="text-xs text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
        Takes 3–5 minutes · No credit card · Privacy-first
      </p>
    </div>
  </section>
);

export default HeroSection;
