import { AlertTriangle, MessageCircle, Shuffle, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: <Shuffle size={22} />,
    title: "Too many options, zero clarity",
    desc: "Hundreds of career paths exist — but no framework to narrow them down to the few that genuinely match your strengths.",
    accent: "primary",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Everyone has an opinion",
    desc: "Parents, friends, social media — all pulling you in different directions. The noise drowns out your own signal.",
    accent: "insight",
  },
  {
    icon: <HelpCircle size={22} />,
    title: "Skills exist, but where do they lead?",
    desc: "You know what you're good at, but connecting those skills to real career paths feels like guesswork.",
    accent: "primary",
  },
  {
    icon: <AlertTriangle size={22} />,
    title: "The fear of choosing wrong",
    desc: "What if you invest years into a path that was never right for you? The pressure to 'not waste time' is paralyzing.",
    accent: "insight",
  },
];

const ProblemSection = () => (
  <section className="section-padding bg-mesh">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Career decisions shouldn't feel like <span className="text-gradient-gold">guesswork.</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Millions choose careers based on peer pressure, outdated advice, or pure chance. Sound familiar?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {problems.map((item, i) => (
          <div
            key={i}
            className="group relative glass-card p-6 md:p-7 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex gap-4 items-start">
              <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                item.accent === "insight"
                  ? "bg-insight/10 text-insight"
                  : "bg-primary/10 text-primary"
              }`}>
                {item.icon}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[15px] mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
