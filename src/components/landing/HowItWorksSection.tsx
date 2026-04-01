import { User, Cpu, BarChart3 } from "lucide-react";

const steps = [
  { 
    step: "01", 
    icon: <User size={28} />, 
    title: "Tell us about your background", 
    desc: "Answer guided questions about your education, skills, interests, and priorities. Takes just 3–5 minutes." 
  },
  { 
    step: "02", 
    icon: <Cpu size={28} />, 
    title: "We analyze your profile", 
    desc: "Our engine maps your profile against career clusters, market data, and alignment models in real time." 
  },
  { 
    step: "03", 
    icon: <BarChart3 size={28} />, 
    title: "Get your top career matches", 
    desc: "Receive 3–5 best-fit careers with transparent reasoning, skill gaps, and actionable next steps." 
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-mesh">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-balance">How VOCA works</h2>
        <p className="text-muted-foreground">Three steps to career clarity.</p>
      </div>

      {/* Desktop: horizontal connected steps */}
      <div className="hidden md:grid grid-cols-3 gap-8 relative">
        {/* Connector lines */}
        <div className="absolute top-[3.5rem] left-[20%] right-[20%] flex items-center justify-between px-8">
          <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-primary/20" />
          <div className="w-2 h-2 rounded-full bg-primary/40 mx-2" />
          <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-primary/50" />
        </div>
        
        {steps.map((item, i) => (
          <div key={i} className="relative flex flex-col items-center text-center">
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary glow-teal">
              {item.icon}
            </div>
            <span className="text-xs font-semibold text-primary mb-3 tracking-widest">{item.step}</span>
            <h3 className="font-heading font-semibold text-lg mb-3">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-0 relative">
        <div className="absolute left-[1.5rem] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40" />
        {steps.map((item, i) => (
          <div key={i} className="relative flex gap-5 py-6">
            <div className="relative z-10 shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
              {item.icon}
            </div>
            <div>
              <span className="text-xs font-semibold text-primary tracking-widest">{item.step}</span>
              <h3 className="font-heading font-semibold mt-1 mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
