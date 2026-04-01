import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/30 bg-card/30">
    <div className="max-w-7xl mx-auto px-5 py-12 md:px-8 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center glow-teal">
              <span className="font-heading font-bold text-primary text-lg">V</span>
            </div>
            <span className="font-heading font-semibold text-lg">VOCA</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            AI-powered career intelligence that helps you make decisions with clarity, not confusion.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Product</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a></li>
            <li><a href="#why-voca" className="hover:text-foreground transition-colors">What we analyze</a></li>
            <li><a href="#sample-results" className="hover:text-foreground transition-colors">Sample results</a></li>
            <li><Link to="/auth" className="hover:text-foreground transition-colors">Get started</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">About us</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-sm mb-4 text-foreground">Legal</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VOCA. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Your data stays yours. Always.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
