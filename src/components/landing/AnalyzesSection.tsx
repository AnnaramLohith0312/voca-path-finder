const items = [
  { emoji: "🎓", label: "Education", desc: "Your degree, field, and academic background" },
  { emoji: "💡", label: "Interests", desc: "What topics and activities energize you" },
  { emoji: "⚡", label: "Core Skills", desc: "Technical and soft skills you bring" },
  { emoji: "🏢", label: "Industries", desc: "Sectors and domains you're drawn to" },
  { emoji: "🎯", label: "Career Priorities", desc: "What matters most — growth, stability, impact" },
  { emoji: "🚀", label: "Aspirations", desc: "Your long-term vision and goals" },
];

const AnalyzesSection = () => (
  <section id="why-voca" className="section-padding bg-mesh">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What VOCA analyzes</h2>
        <p className="text-muted-foreground">A holistic view of who you are — and what fits.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-all duration-300 group">
            <span className="text-2xl shrink-0 mt-0.5">{item.emoji}</span>
            <div>
              <span className="text-sm font-heading font-semibold block mb-0.5">{item.label}</span>
              <span className="text-xs text-muted-foreground leading-relaxed">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AnalyzesSection;
