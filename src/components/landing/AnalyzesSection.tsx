import { GraduationCap, Lightbulb, Zap, Building2, Target, Rocket } from "lucide-react";

const items = [
  { icon: <GraduationCap size={22} />, label: "Education", desc: "Your degree, field, and academic background", accent: "primary" },
  { icon: <Lightbulb size={22} />, label: "Interests", desc: "What topics and activities energize you", accent: "insight" },
  { icon: <Zap size={22} />, label: "Core Skills", desc: "Technical and soft skills you bring", accent: "primary" },
  { icon: <Building2 size={22} />, label: "Industries", desc: "Sectors and domains you're drawn to", accent: "insight" },
  { icon: <Target size={22} />, label: "Career Priorities", desc: "What matters most — growth, stability, impact", accent: "primary" },
  { icon: <Rocket size={22} />, label: "Aspirations", desc: "Your long-term vision and goals", accent: "insight" },
];

const AnalyzesSection = () => (
  <section id="why-voca" className="section-padding bg-mesh">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-balance">What VOCA analyzes</h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">A holistic view of who you are — and what fits.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
              item.accent === "insight"
                ? "bg-insight/10 text-insight"
                : "bg-primary/10 text-primary"
            }`}>
              {item.icon}
            </div>
            <div>
              <span className="text-sm font-heading font-semibold block mb-1">{item.label}</span>
              <span className="text-xs text-muted-foreground leading-relaxed">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AnalyzesSection;
