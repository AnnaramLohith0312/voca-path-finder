import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NetworkBackground from "@/components/NetworkBackground";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left panel — branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden bg-background">
        <NetworkBackground />
        <div className="bg-mesh absolute inset-0" />
        <div className="relative z-10 max-w-md px-12">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center glow-teal">
              <span className="font-heading font-bold text-primary text-xl">V</span>
            </div>
            <span className="font-heading font-semibold text-2xl">VOCA</span>
          </Link>
          <h2 className="font-heading text-3xl font-bold leading-tight mb-4">
            Clarity starts <br />
            <span className="text-gradient-hero">here.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Answer a few guided questions and discover the career paths that truly align with your strengths, interests, and priorities.
          </p>
        </div>
      </div>

      {/* Right panel — auth form */}
      <div className="flex-1 flex items-center justify-center px-5 py-16 lg:px-16 bg-background">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="font-heading font-bold text-primary text-lg">V</span>
            </div>
            <span className="font-heading font-semibold text-lg">VOCA</span>
          </Link>

          <h1 className="font-heading text-2xl font-bold mb-1">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            {isSignup ? "Takes 3–5 minutes to get your first career projection." : "Continue your career exploration."}
          </p>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 p-1 rounded-lg bg-secondary">
            <button
              onClick={() => setIsSignup(false)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${!isSignup ? "bg-accent text-foreground" : "text-muted-foreground"}`}
            >
              Sign in
            </button>
            <button
              onClick={() => setIsSignup(true)}
              className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${isSignup ? "bg-accent text-foreground" : "text-muted-foreground"}`}
            >
              Sign up
            </button>
          </div>

          {/* Social buttons */}
          <div className="space-y-3 mb-6">
            <Button variant="outline" className="w-full" size="lg">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              Continue with LinkedIn
            </Button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Email form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignup && (
              <div>
                <Label htmlFor="name" className="text-sm">Full name</Label>
                <Input id="name" placeholder="Your name" className="mt-1.5 bg-secondary border-border/60" />
              </div>
            )}
            <div>
              <Label htmlFor="email" className="text-sm">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5 bg-secondary border-border/60" />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="mt-1.5 bg-secondary border-border/60" />
            </div>
            <Link to="/onboarding">
              <Button variant="hero" size="lg" className="w-full mt-2">
                {isSignup ? "Create Account" : "Sign In"}
                <ArrowRight size={16} />
              </Button>
            </Link>
          </form>

          <button className="flex items-center justify-center gap-2 w-full mt-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground border border-border/40 transition-colors">
            <Mail size={14} />
            Send me a magic link instead
          </button>

          <div className="flex items-start gap-2 mt-6 p-3 rounded-lg bg-secondary/50">
            <Sparkles size={14} className="text-insight mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your data is private and encrypted. We never share or sell your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
