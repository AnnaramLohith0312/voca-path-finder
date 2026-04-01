import { Sparkles, TrendingUp } from "lucide-react";

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
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Sample career matches</h2>
        <p className="text-muted-foreground">Here's what your personalized results could look like.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {results.map((card, i) => (
          <div
            key={i}
            className={`glass-card p-6 transition-all duration-300 hover:border-primary/30 flex flex-col ${
              card.best ? "border-primary/40 glow-teal lg:scale-[1.03]" : ""
            }`}
          >
            {card.best && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 w-fit">
                <Sparkles size={12} /> Best Match
              </div>
            )}
            <h3 className="font-heading font-semibold text-lg mb-2">{card.role}</h3>

            {/* Match bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000"
                  style={{ width: `${card.match}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-primary">{card.match}%</span>
            </div>

            {/* Rationale */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">{card.rationale}</p>

            {/* Why this fits */}
            <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-insight/5 border border-insight/10 mb-4">
              <TrendingUp size={14} className="text-insight shrink-0 mt-0.5" />
              <span className="text-xs text-insight leading-relaxed">{card.whyFits}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {card.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SampleResultsSection;
