import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="bg-mesh absolute inset-0" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
        Ready to find your <span className="text-gradient-hero">path?</span>
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Join thousands discovering careers that actually fit them.
      </p>
      <Link to="/auth?signup=true">
        <Button variant="hero" size="xl">
          Start My Career Projection
          <ArrowRight size={18} />
        </Button>
      </Link>
    </div>
  </section>
);

export default CTASection;
