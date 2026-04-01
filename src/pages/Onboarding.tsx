import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Sparkles, TrendingUp, Map, Clock, CheckCircle2 } from "lucide-react";
import NetworkBackground from "@/components/NetworkBackground";

const Onboarding = () => {
  // In a real app, this would come from auth context
  const userName = "there";

  const previewCards = [
    { 
      icon: Target, 
      label: "Top Career Matches", 
      desc: "3-5 career paths uniquely suited to your strengths and interests",
      accent: "primary"
    },
    { 
      icon: Sparkles, 
      label: "Why They Fit You", 
      desc: "Personalized insights explaining each recommendation",
      accent: "insight"
    },
    { 
      icon: TrendingUp, 
      label: "Skill Gap Insights", 
      desc: "Clear guidance on what skills to develop next",
      accent: "primary"
    },
    { 
      icon: Map, 
      label: "Next-Step Roadmap", 
      desc: "Actionable steps to move toward your ideal career",
      accent: "insight"
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-mesh" />
      <NetworkBackground />
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-insight/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-12 md:py-16">
        <div className="max-w-2xl w-full">
          {/* Header section */}
          <div className="text-center mb-10 md:mb-12">
            {/* Logo mark */}
            <div 
              className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-6 glow-teal animate-fade-in-up"
              style={{ animationDelay: "0s", opacity: 0, animationFillMode: "forwards" }}
            >
              <span className="font-heading font-bold text-primary text-2xl">V</span>
            </div>
            
            {/* Welcome headline */}
            <h1 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
            >
              <span className="text-foreground">Welcome, </span>
              <span className="text-gradient-hero">{userName}</span>
            </h1>
            
            {/* Description */}
            <p 
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-4 animate-fade-in-up"
              style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
            >
              In the next few minutes, VOCA will learn about your background, interests, and goals to generate a personalized career projection.
            </p>
            
            {/* Time estimate badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/40 animate-fade-in-up"
              style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
            >
              <Clock size={14} className="text-primary" />
              <span className="text-sm text-muted-foreground">Estimated time: <span className="text-foreground font-medium">3-5 minutes</span></span>
            </div>
          </div>

          {/* Preview cards section */}
          <div 
            className="mb-10 md:mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <p className="text-center text-sm text-muted-foreground mb-5">
              What you&apos;ll receive:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previewCards.map((card, i) => (
                <div 
                  key={i} 
                  className="glass-card p-5 group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`
                      w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                      ${card.accent === "primary" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-insight/10 text-insight"
                      }
                    `}>
                      <card.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground mb-1">
                        {card.label}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress framing */}
          <div 
            className="mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
          >
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Simple questions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-primary" />
                <span>No wrong answers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-insight" />
                <span>100% private</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div 
            className="text-center animate-fade-in-up"
            style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Link to="/assessment">
              <Button variant="hero" size="xl" className="w-full sm:w-auto min-w-[280px] animate-glow-pulse">
                Begin Assessment
                <ArrowRight size={18} />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-4">
              You can save and continue later at any point.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
