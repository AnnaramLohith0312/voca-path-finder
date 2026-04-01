import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Compass, Lightbulb, Save } from "lucide-react";

const Onboarding = () => {
  const features = [
    { icon: <Compass size={22} />, label: "Top career matches", desc: "3–5 best-fit career paths" },
    { icon: <Lightbulb size={22} />, label: "Skill gap insights", desc: "See what to improve" },
    { icon: <BookOpen size={22} />, label: "Next-step roadmap", desc: "Actionable guidance" },
    { icon: <Save size={22} />, label: "Saveable results", desc: "Come back anytime" },
  ];

  return (
    <div className="min-h-screen bg-background bg-mesh flex items-center justify-center px-5 py-16">
      <div className="max-w-lg w-full text-center animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
        <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6 glow-teal">
          <span className="font-heading font-bold text-primary text-2xl">V</span>
        </div>
        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">
          Welcome to VOCA
        </h1>
        <p className="text-muted-foreground mb-2 leading-relaxed">
          In the next 3–5 minutes, we'll learn about your background and find career paths that truly fit you.
        </p>
        <p className="text-xs text-muted-foreground mb-10">
          Estimated time: 3–5 minutes
        </p>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {features.map((f, i) => (
            <div key={i} className="glass-card p-4 text-left">
              <div className="text-primary mb-2">{f.icon}</div>
              <h3 className="font-heading text-sm font-semibold mb-0.5">{f.label}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <Link to="/assessment">
          <Button variant="hero" size="xl" className="w-full">
            Begin Assessment
            <ArrowRight size={18} />
          </Button>
        </Link>
        <p className="text-xs text-muted-foreground mt-4">
          You can save and continue later at any point.
        </p>
      </div>
    </div>
  );
};

export default Onboarding;
