import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  ArrowRight,
  Bookmark,
  ChevronDown,
  GitCompare,
  Share2,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const recommendations = [
  {
    role: "Product Designer",
    match: 94,
    summary: "You blend creativity with analytical thinking — ideal for designing user experiences that solve real problems.",
    strengths: ["Visual thinking", "Empathy", "Problem solving", "Communication"],
    skillAlign: 88,
    priorityAlign: 91,
    outlook: "Strong",
    outlookDetail: "23% projected growth in the next 5 years",
    related: ["UX Designer", "Interaction Designer", "Design Strategist"],
    why: "Your creative interests, strong communication skills, and preference for user-focused work make this an excellent fit. Your priority for learning and growth aligns with this fast-evolving field.",
  },
  {
    role: "Data Analyst",
    match: 87,
    summary: "Your analytical mindset and curiosity about patterns make data analysis a strong match.",
    strengths: ["Analytical thinking", "Attention to detail", "Problem solving"],
    skillAlign: 82,
    priorityAlign: 85,
    outlook: "Very Strong",
    outlookDetail: "35% projected growth in the next 5 years",
    related: ["Business Analyst", "Data Scientist", "BI Analyst"],
    why: "Your problem-solving skills and interest in technology are well-suited for uncovering insights from data.",
  },
  {
    role: "UX Researcher",
    match: 82,
    summary: "Your empathy, research skills, and interest in human behavior align beautifully with UX research.",
    strengths: ["Research", "Empathy", "Communication", "Critical thinking"],
    skillAlign: 79,
    priorityAlign: 84,
    outlook: "Strong",
    outlookDetail: "19% projected growth in the next 5 years",
    related: ["User Researcher", "Product Researcher", "Design Researcher"],
    why: "You enjoy understanding people and have strong research fundamentals. This role lets you influence products through evidence-based insights.",
  },
  {
    role: "Content Strategist",
    match: 76,
    summary: "Your writing ability and strategic thinking could shine in content roles.",
    strengths: ["Writing", "Strategy", "Creativity"],
    skillAlign: 74,
    priorityAlign: 78,
    outlook: "Moderate",
    outlookDetail: "12% projected growth",
    related: ["Copywriter", "Content Designer", "Brand Strategist"],
    why: "Your communication skills and creative interests make content strategy a viable path with good work-life balance.",
  },
];

const Results = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-5 pt-24 pb-16">
        {/* Header */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Sparkles size={12} /> Your Career Projection
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Your top career matches
          </h1>
          <p className="text-muted-foreground">
            Based on your education, skills, interests, and priorities. Each recommendation includes transparent reasoning.
          </p>
        </div>

        {/* Trust note */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-insight/5 border border-insight/15 mb-8 animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          <ShieldCheck size={18} className="text-insight mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground">
            These are recommendations, not absolute truths. Use them as a starting point to explore and validate your options. You can challenge any recommendation or explore unconventional paths.
          </p>
        </div>

        {/* Best match hero card */}
        <div className="glass-card border-primary/40 glow-teal p-6 md:p-8 mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                <Sparkles size={12} /> Best Match
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">{recommendations[0].role}</h2>
            </div>
            <div className="text-right">
              <div className="text-4xl font-heading font-bold text-primary">{recommendations[0].match}%</div>
              <div className="text-xs text-muted-foreground">match score</div>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">{recommendations[0].summary}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <MetricCard label="Skill Alignment" value={`${recommendations[0].skillAlign}%`} />
            <MetricCard label="Priority Alignment" value={`${recommendations[0].priorityAlign}%`} />
            <MetricCard label="Market Outlook" value={recommendations[0].outlook} accent />
            <MetricCard label="Growth" value={recommendations[0].outlookDetail.split(" ")[0]} />
          </div>

          {/* Strengths */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-2">Top strengths detected</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations[0].strengths.map((s) => (
                <span key={s} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* Why this fits */}
          <div className="p-4 rounded-xl bg-secondary/60 border border-border/40 mb-6">
            <h4 className="text-sm font-semibold mb-1 flex items-center gap-1.5">
              <Sparkles size={14} className="text-insight" /> Why this fits you
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{recommendations[0].why}</p>
          </div>

          {/* Related */}
          <div className="mb-6">
            <h4 className="text-xs text-muted-foreground mb-2">Related roles</h4>
            <div className="flex flex-wrap gap-2">
              {recommendations[0].related.map((r) => (
                <span key={r} className="px-2.5 py-1 rounded-md bg-accent text-xs text-muted-foreground">{r}</span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link to={`/career/${encodeURIComponent(recommendations[0].role)}`}>
              <Button variant="hero" size="default">
                Learn More <ArrowRight size={14} />
              </Button>
            </Link>
            <Button variant="outline" size="default">
              <GitCompare size={14} /> Compare
            </Button>
            <Button variant="outline" size="default">
              <Bookmark size={14} /> Save
            </Button>
            <Button variant="outline" size="default">
              <Share2 size={14} /> Share
            </Button>
          </div>
        </div>

        {/* Other recommendations */}
        <div className="space-y-4">
          {recommendations.slice(1).map((rec, i) => (
            <div
              key={i}
              className="glass-card p-5 md:p-6 transition-all duration-300 hover:border-border/60"
            >
              <button
                className="w-full text-left"
                onClick={() => setExpanded(expanded === i + 1 ? null : i + 1)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-heading font-bold text-primary">{rec.match}%</div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{rec.role}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{rec.summary}</p>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-muted-foreground transition-transform duration-200 shrink-0 ml-2 ${expanded === i + 1 ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {expanded === i + 1 && (
                <div className="mt-5 pt-5 border-t border-border/30 animate-fade-in">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                    <MetricCard label="Skills" value={`${rec.skillAlign}%`} />
                    <MetricCard label="Priorities" value={`${rec.priorityAlign}%`} />
                    <MetricCard label="Outlook" value={rec.outlook} accent />
                    <MetricCard label="Growth" value={rec.outlookDetail.split(" ")[0]} />
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/60 border border-border/30 mb-4">
                    <p className="text-sm text-muted-foreground">{rec.why}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {rec.strengths.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs">{s}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link to={`/career/${encodeURIComponent(rec.role)}`}>
                      <Button variant="default" size="sm">Learn More <ArrowRight size={12} /></Button>
                    </Link>
                    <Button variant="outline" size="sm"><Bookmark size={12} /> Save</Button>
                    <Button variant="outline" size="sm"><Share2 size={12} /> Share</Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Challenge section */}
        <div className="mt-8 p-5 glass-card-subtle text-center">
          <AlertTriangle size={18} className="mx-auto mb-2 text-insight" />
          <h4 className="font-heading font-semibold mb-1">Don't see what you expected?</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Challenge these recommendations or explore unconventional career paths.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="insight" size="sm">Show Unconventional Options</Button>
            <Button variant="outline" size="sm">Retake Assessment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="p-3 rounded-lg bg-secondary/60 border border-border/30">
    <div className="text-xs text-muted-foreground mb-1">{label}</div>
    <div className={`font-heading font-semibold text-sm ${accent ? "text-insight" : ""}`}>{value}</div>
  </div>
);

export default Results;
