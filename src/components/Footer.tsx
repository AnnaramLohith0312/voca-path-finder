import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 bg-background">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="font-heading font-bold text-primary text-lg">V</span>
            </div>
            <span className="font-heading font-semibold text-lg">VOCA</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            AI-powered career intelligence for clarity, not confusion.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a></li>
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><Link to="/auth" className="hover:text-foreground transition-colors">Get started</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} VOCA. All rights reserved. Your data stays yours.
      </div>
    </div>
  </footer>
);

export default Footer;
