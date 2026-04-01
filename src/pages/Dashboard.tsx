import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight, Bookmark, Clock, RefreshCw, Sparkles, TrendingUp, User } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-5xl mx-auto px-5 pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground text-sm">Your career exploration workspace.</p>
          </div>
          <Link to="/assessment">
            <Button variant="outline" size="sm"><RefreshCw size={14} /> Retake</Button>
          </Link>
        </div>

        {/* Profile completion */}
        <div className="glass-card p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-heading font-semibold text-sm flex items-center gap-2">
              <User size={14} className="text-primary" /> Profile Completion
            </h3>
            <span className="text-sm font-semibold text-primary">75%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-primary" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Add your aspirations to improve accuracy.</p>
        </div>

        {/* Latest top match */}
        <div className="glass-card border-primary/30 glow-teal p-6 mb-6">
          <div className="flex items-start justify-between mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Sparkles size={12} /> Your Top Match
            </div>
            <span className="text-2xl font-heading font-bold text-primary">94%</span>
          </div>
          <h2 className="font-heading text-xl font-bold mb-1">Product Designer</h2>
          <p className="text-sm text-muted-foreground mb-4">Creativity meets analytical thinking in designing user experiences.</p>
          <div className="flex gap-3">
            <Link to="/results">
              <Button variant="hero" size="sm">View All Results <ArrowRight size={12} /></Button>
            </Link>
            <Link to="/career/Product%20Designer">
              <Button variant="outline" size="sm">Explore Role</Button>
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Saved careers */}
          <div className="glass-card p-5">
            <h3 className="font-heading font-semibold text-sm mb-4 flex items-center gap-2">
              <Bookmark size={14} className="text-primary" /> Saved Careers
            </h3>
            {["Product Designer", "Data Analyst"].map((career) => (
              <Link key={career} to={`/career/${encodeURIComponent(career)}`} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0 hover:text-primary transition-colors">
                <span className="text-sm font-medium">{career}</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
            ))}
            <div className="text-xs text-muted-foreground mt-3">Save more careers from your results.</div>
          </div>

          {/* Recommended actions */}
          <div className="glass-card p-5">
            <h3 className="font-heading font-semibold text-sm mb-4 flex items-center gap-2">
              <TrendingUp size={14} className="text-insight" /> Recommended Next Steps
            </h3>
            {[
              "Complete your aspirations section",
              "Explore your #2 match: Data Analyst",
              "Share results with a mentor",
            ].map((action, i) => (
              <div key={i} className="flex items-start gap-2 py-2.5 border-b border-border/30 last:border-0">
                <div className="w-5 h-5 rounded-full bg-insight/10 flex items-center justify-center text-insight text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <span className="text-sm text-muted-foreground">{action}</span>
              </div>
            ))}
          </div>

          {/* Assessment history */}
          <div className="glass-card p-5 md:col-span-2">
            <h3 className="font-heading font-semibold text-sm mb-4 flex items-center gap-2">
              <Clock size={14} className="text-primary" /> Assessment History
            </h3>
            <div className="flex items-center justify-between py-3 border-b border-border/30">
              <div>
                <span className="text-sm font-medium">Full Assessment</span>
                <p className="text-xs text-muted-foreground">Completed · April 1, 2026</p>
              </div>
              <Link to="/results">
                <Button variant="ghost" size="sm">View Results</Button>
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Retake the assessment anytime to refine your results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
