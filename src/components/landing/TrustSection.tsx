import { Eye, Shield, Lightbulb, RefreshCw, Heart } from "lucide-react";

const trustPoints = [
  { 
    icon: <Eye size={22} />, 
    title: "Explainable AI", 
    desc: "Every recommendation comes with a clear breakdown of why it was suggested for you. No black boxes.",
    accent: "primary" 
  },
  { 
    icon: <RefreshCw size={22} />, 
    title: "Explore alternatives", 
    desc: "Not convinced? Challenge any recommendation and discover unconventional career paths.",
    accent: "insight" 
  },
  { 
    icon: <Shield size={22} />, 
    title: "Privacy-first", 
    desc: "Your data is never sold. You can delete everything anytime. Full control, always.",
    accent: "primary" 
  },
  { 
    icon: <Lightbulb size={22} />, 
    title: "Guidance, not a verdict", 
    desc: "VOCA helps you think clearly about your future — it doesn't make the decision for you.",
    accent: "insight" 
  },
];

const TrustSection = () => (
  <section className="section-padding bg-mesh">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6 glow-teal">
          <Heart className="text-primary" size={26} />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-balance">Transparent & trustworthy</h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Career decisions are personal. VOCA is built to earn your trust, not exploit it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {trustPoints.map((item, i) => (
          <div key={i} className="glass-card p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300">
            <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
              item.accent === "insight"
                ? "bg-insight/10 text-insight"
                : "bg-primary/10 text-primary"
            }`}>
              {item.icon}
            </div>
            <div>
              <h4 className="font-heading font-semibold text-base mb-1.5">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
