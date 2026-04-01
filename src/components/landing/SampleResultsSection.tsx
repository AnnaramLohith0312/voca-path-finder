import { Sparkles, TrendingUp, ChevronRight } from "lucide-react";

const results = [
  {
    role: "Data Scientist",
    match: 94,
    rationale: "Strong analytical thinking paired with statistical knowledge and a passion for uncovering patterns in complex datasets.",
    whyFits: "Your math background + programming skills + curiosity for insights",
    tags: ["Analytical", "Tech", "High Growth"],
    best: true,
  },
  {
    role: "Product Manager",
    match: 87,
    rationale: "Your ability to balance technical understanding with user empathy makes you a natural bridge between teams.",
    whyFits: "Strategic thinking + communication skills + tech fluency",
    tags: ["Strategic", "Cross-functional", "Leadership"],
    best: false,
  },
  {
    role: "UX Designer",
    match: 82,
    rationale: "Your creative instincts combined with empathy for end users and interest in problem-solving align well with user-centered design.",
    whyFits: "Visual thinking + empathy + problem-solving mindset",
    tags: ["Creative", "User-focused", "Design"],
    best: false,
  },
];

const SampleResultsSection = () => (
  <section id="sample-results" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-balance">Sample career matches</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">Here&apos;s what your personalized results could look like.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {results.map((card, i) => (
          <div
            key={i}
            className={`relative glass-card p-6 transition-all duration-300 hover:border-primary/30 flex flex-col ${
              card.best ? "border-primary/40 glow-teal lg:scale-[1.02] lg:-translate-y-2" : ""
            }`}
          >
            {card.best && (
              <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                <Sparkles size={12} /> Best Match
              </div>
            )}
            
            <div className={card.best ? "pt-2" : ""}>
              <h3 className="font-heading font-semibold text-xl mb-3">{card.role}</h3>

              {/* Match bar */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-2.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      card.best ? "bg-primary" : "bg-primary/70"
                    }`}
                    style={{ width: `${card.match}%` }}
                  />
                </div>
                <span className={`text-lg font-bold ${card.best ? "text-primary" : "text-foreground"}`}>
                  {card.match}%
                </span>
              </div>

              {/* Rationale */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{card.rationale}</p>

              {/* Why this fits */}
              <div className="flex items-start gap-2 px-4 py-3 rounded-lg bg-insight/5 border border-insight/10 mb-5">
                <TrendingUp size={16} className="text-insight shrink-0 mt-0.5" />
                <span className="text-sm text-insight leading-relaxed">{card.whyFits}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-medium text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Subtle hint to explore */}
      <div className="text-center mt-10">
        <a 
          href="#" 
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Explore how VOCA generates these insights
          <ChevronRight size={14} />
        </a>
      </div>
    </div>
  </section>
);

export default SampleResultsSection;
