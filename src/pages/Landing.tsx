import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Brain, Compass, Eye, Lock, Sparkles, Target, TrendingUp, Users, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <NetworkBackground />
        <div className="bg-mesh absolute inset-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-5 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/50 mb-8 animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <Sparkles size={14} className="text-insight" />
            <span className="text-xs text-muted-foreground">AI-Powered Career Intelligence</span>
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            Your future is <br />
            <span className="text-gradient-hero">not random.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            VOCA maps your education, skills, and interests to career paths that actually fit you — with transparent reasoning, not black-box predictions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <Link to="/auth?signup=true">
              <Button variant="hero" size="xl">
                Start My Career Projection
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/results">
              <Button variant="hero-outline" size="xl">See Sample Results</Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground mt-6 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
            Takes 3–5 minutes · No credit card · Privacy-first
          </p>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-mesh">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Career decisions shouldn't feel like <span className="text-gradient-gold">guesswork.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Millions of students choose careers based on peer pressure, outdated advice, or pure chance. VOCA changes that with data-driven clarity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Users size={24} />, title: "Overwhelmed", desc: "Too many options, no framework to decide." },
              { icon: <Compass size={24} />, title: "Misguided", desc: "Advice from people who don't know your strengths." },
              { icon: <Target size={24} />, title: "Uncertain", desc: "No way to see if a career actually fits you." },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:glow-teal transition-all">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How VOCA works</h2>
            <p className="text-muted-foreground">Three steps to career clarity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: <Brain size={28} />, title: "Share your profile", desc: "Answer guided questions about your education, skills, interests, and priorities." },
              { step: "02", icon: <Zap size={28} />, title: "VOCA analyzes", desc: "Our engine maps your profile against career clusters, market data, and alignment models." },
              { step: "03", icon: <Eye size={28} />, title: "See your matches", desc: "Get 3–5 best-fit careers with transparent reasoning, skill gaps, and next steps." },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="glass-card p-8 h-full hover:border-primary/30 transition-all duration-300">
                  <span className="text-5xl font-heading font-bold text-primary/10 absolute top-4 right-6">{item.step}</span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What VOCA analyzes */}
      <section id="features" className="section-padding bg-mesh">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What VOCA analyzes</h2>
            <p className="text-muted-foreground">A holistic view of who you are and what fits.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: <span className="text-xl">🎓</span>, label: "Education" },
              { icon: <span className="text-xl">💡</span>, label: "Interests" },
              { icon: <span className="text-xl">⚡</span>, label: "Skills" },
              { icon: <span className="text-xl">🏢</span>, label: "Industries" },
              { icon: <span className="text-xl">🎯</span>, label: "Priorities" },
              { icon: <span className="text-xl">🚀</span>, label: "Aspirations" },
            ].map((item, i) => (
              <div key={i} className="glass-card-subtle p-5 text-center hover:border-primary/30 transition-all duration-300">
                <div className="mb-2">{item.icon}</div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample results preview */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Sample career matches</h2>
            <p className="text-muted-foreground">Here's what your results could look like.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { role: "Product Designer", match: 94, tags: ["Creative", "Tech", "User-focused"] },
              { role: "Data Analyst", match: 87, tags: ["Analytical", "Growth", "Impact"] },
              { role: "UX Researcher", match: 82, tags: ["Empathetic", "Strategic", "Research"] },
            ].map((card, i) => (
              <div key={i} className={`glass-card p-6 ${i === 0 ? "border-primary/40 glow-teal" : ""} transition-all duration-300 hover:border-primary/30`}>
                {i === 0 && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <Sparkles size={12} /> Best Match
                  </div>
                )}
                <h3 className="font-heading font-semibold text-lg mb-1">{card.role}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all duration-1000" style={{ width: `${card.match}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-primary">{card.match}%</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-muted-foreground">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding bg-mesh">
        <div className="max-w-3xl mx-auto text-center">
          <Lock className="mx-auto mb-6 text-primary" size={32} />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Transparent & privacy-first</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every recommendation comes with a clear explanation of why it was suggested. Your data is never sold, and you can delete it anytime. VOCA is guidance, not a verdict.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Explainable AI", "Data you control", "No black boxes"].map((item) => (
              <div key={item} className="glass-card-subtle px-4 py-3 text-sm font-medium">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="bg-mesh absolute inset-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Ready to find your <span className="text-gradient-hero">path?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands discovering careers that actually fit them.
          </p>
          <Link to="/auth?signup=true">
            <Button variant="hero" size="xl">
              Start My Career Projection
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
