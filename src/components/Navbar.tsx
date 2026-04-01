import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center glow-teal">
            <span className="font-heading font-bold text-primary text-lg">V</span>
          </div>
          <span className="font-heading font-semibold text-lg text-foreground">VOCA</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {isLanding && (
            <>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
              <a href="#why-voca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why VOCA</a>
              <a href="#sample-results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sample Results</a>
            </>
          )}
          <Link to="/auth">
            <Button variant="ghost" size="sm">Sign in</Button>
          </Link>
          <Link to="/auth?signup=true">
            <Button variant="hero" size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl px-5 py-4 space-y-3 animate-fade-in">
          {isLanding && (
            <>
              <a href="#how-it-works" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>How it works</a>
              <a href="#features" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
            </>
          )}
          <Link to="/auth" className="block" onClick={() => setMobileOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full">Sign in</Button>
          </Link>
          <Link to="/auth?signup=true" className="block" onClick={() => setMobileOpen(false)}>
            <Button variant="hero" size="sm" className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
