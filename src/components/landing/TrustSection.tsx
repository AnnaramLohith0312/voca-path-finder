import { Lock, Eye, Shield, Lightbulb, RefreshCw } from "lucide-react";

const trustPoints = [
  { icon: <Eye size={20} />, title: "Explainable AI", desc: "Every recommendation comes with a clear breakdown of why it was suggested for you." },
  { icon: <RefreshCw size={20} />, title: "Explore alternatives", desc: "Not convinced? Challenge any recommendation and discover unconventional career paths." },
  { icon: <Shield size={20} />, title: "Privacy-first", desc: "Your data is never sold. You can delete everything anytime. Full control, always." },
  { icon: <Lightbulb size={20} />, title: "Guidance, not a verdict", desc: "VOCA helps you think clearly about your future — it doesn't make the decision for you." },
];

const TrustSection = () => (
  <section className="section-padding bg-mesh">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Lock className="mx-auto mb-5 text-primary" size={30} />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Transparent & trustworthy</h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Career decisions are personal. VOCA is built to earn your trust, not exploit it.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trustPoints.map((item, i) => (
          <div key={i} className="glass-card-subtle p-5 flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {item.icon}
            </div>
            <div>
              <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
