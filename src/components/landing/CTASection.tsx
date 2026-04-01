import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Decorative gradients */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
    
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-balance">
        Ready to find your <span className="text-gradient-hero">path?</span>
      </h2>
      <p className="text-muted-foreground mb-10 text-lg max-w-lg mx-auto leading-relaxed">
        Stop guessing. Start exploring careers that actually align with who you are and where you want to go.
      </p>
      <Link to="/auth?signup=true">
        <Button variant="hero" size="xl" className="animate-glow-pulse">
          Start My Career Projection
          <ArrowRight size={18} />
        </Button>
      </Link>
      <p className="text-xs text-muted-foreground mt-6">
        Free to start · No credit card required · Results in minutes
      </p>
    </div>
  </section>
);

export default CTASection;
