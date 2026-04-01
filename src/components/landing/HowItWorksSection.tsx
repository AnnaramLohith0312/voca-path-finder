import { Brain, Zap, Eye } from "lucide-react";

const steps = [
  { step: "01", icon: <Brain size={28} />, title: "Share your profile", desc: "Answer guided questions about your education, skills, interests, and priorities. Takes just 3–5 minutes." },
  { step: "02", icon: <Zap size={28} />, title: "VOCA analyzes", desc: "Our engine maps your profile against career clusters, market data, and alignment models in real time." },
  { step: "03", icon: <Eye size={28} />, title: "See your matches", desc: "Get 3–5 best-fit careers with transparent reasoning, skill gaps, and actionable next steps." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How VOCA works</h2>
        <p className="text-muted-foreground">Three steps to career clarity.</p>
      </div>

      {/* Desktop: horizontal connected steps */}
      <div className="hidden md:grid grid-cols-3 gap-0 relative">
        {/* Connector line */}
        <div className="absolute top-[3.5rem] left-[16.7%] right-[16.7%] h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40" />
        {steps.map((item, i) => (
          <div key={i} className="relative flex flex-col items-center text-center px-6">
            <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary">
              {item.icon}
            </div>
            <span className="text-xs font-medium text-primary/60 mb-2 tracking-widest">{item.step}</span>
            <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-0 relative">
        <div className="absolute left-[1.35rem] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 to-primary/10" />
        {steps.map((item, i) => (
          <div key={i} className="relative flex gap-5 py-5">
            <div className="relative z-10 shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              {item.icon}
            </div>
            <div>
              <span className="text-xs font-medium text-primary/60 tracking-widest">{item.step}</span>
              <h3 className="font-heading font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
