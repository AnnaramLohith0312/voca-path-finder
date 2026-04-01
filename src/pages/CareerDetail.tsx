import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowLeft, Bookmark, GitCompare, Share2, TrendingUp, CheckCircle2, AlertCircle } from "lucide-react";

const careerData: Record<string, any> = {
  "Product Designer": {
    overview: "Product Designers create user-centered digital experiences by combining research, strategy, and visual design. They work at the intersection of business goals and user needs.",
    whatYouDo: [
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with engineers and product managers",
      "Define design systems and interaction patterns",
      "Advocate for users throughout the product lifecycle",
    ],
    whyMatched: "Your creative thinking, empathy, and communication skills are core to this role. Your interest in technology and priority for learning align with the fast-paced evolution of product design.",
    requiredSkills: ["Visual Design", "Prototyping", "User Research", "Design Systems", "Figma/Sketch"],
    skillsToImprove: ["Data-informed design", "Advanced prototyping", "Design leadership"],
    learningPath: [
      "Complete a UX/UI design course (Google UX Certificate)",
      "Build 3 case study projects for your portfolio",
      "Learn Figma advanced features and prototyping",
      "Practice design critiques and presentations",
      "Apply for junior product designer roles",
    ],
    similar: ["UX Designer", "Interaction Designer", "Design Strategist", "UI Developer"],
  },
};

const CareerDetail = () => {
  const { role } = useParams<{ role: string }>();
  const decodedRole = decodeURIComponent(role || "");
  const data = careerData[decodedRole] || careerData["Product Designer"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-5 pt-24 pb-16">
        <Link to="/results" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={14} /> Back to results
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">{decodedRole}</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">{data.overview}</p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Button variant="hero" size="default"><Bookmark size={14} /> Save Career</Button>
          <Button variant="outline" size="default"><GitCompare size={14} /> Compare</Button>
          <Button variant="outline" size="default"><Share2 size={14} /> Share</Button>
        </div>

        {/* Why matched */}
        <Section title="Why VOCA matched you">
          <p className="text-sm text-muted-foreground leading-relaxed">{data.whyMatched}</p>
        </Section>

        {/* What you'll do */}
        <Section title="What you'll do in this role">
          <ul className="space-y-2">
            {data.whatYouDo.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Required skills */}
        <Section title="Required skills">
          <div className="flex flex-wrap gap-2">
            {data.requiredSkills.map((s: string) => (
              <span key={s} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">{s}</span>
            ))}
          </div>
        </Section>

        {/* Skills to improve */}
        <Section title="Skills to improve">
          <div className="flex flex-wrap gap-2">
            {data.skillsToImprove.map((s: string) => (
              <span key={s} className="px-3 py-1.5 rounded-lg bg-insight/10 text-insight text-sm font-medium flex items-center gap-1.5">
                <AlertCircle size={12} /> {s}
              </span>
            ))}
          </div>
        </Section>

        {/* Learning path */}
        <Section title="Suggested learning path">
          <div className="space-y-3">
            {data.learningPath.map((step: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-primary shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-muted-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Similar roles */}
        <Section title="Similar roles to explore">
          <div className="flex flex-wrap gap-2">
            {data.similar.map((r: string) => (
              <Link key={r} to={`/career/${encodeURIComponent(r)}`}>
                <span className="px-3 py-1.5 rounded-lg bg-accent text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{r}</span>
              </Link>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
      <TrendingUp size={16} className="text-primary" />
      {title}
    </h3>
    <div className="glass-card p-5">
      {children}
    </div>
  </div>
);

export default CareerDetail;
