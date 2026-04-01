import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NetworkBackground from "@/components/NetworkBackground";
import { ArrowRight, Mail, Shield, Loader2, Eye, EyeOff, AlertCircle, Check } from "lucide-react";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isSignup, setIsSignup] = useState(searchParams.get("signup") === "true");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  // Validation state
  const [errors, setErrors] = useState<{email?: string; password?: string; name?: string}>({});
  const [touched, setTouched] = useState<{email?: boolean; password?: boolean; name?: boolean}>({});

  // Update signup state when URL changes
  useEffect(() => {
    setIsSignup(searchParams.get("signup") === "true");
  }, [searchParams]);

  const validateEmail = (email: string) => {
    if (!email) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email";
    return undefined;
  };

  const validatePassword = (password: string) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    return undefined;
  };

  const validateName = (name: string) => {
    if (!name && isSignup) return "Name is required";
    return undefined;
  };

  const handleBlur = (field: "email" | "password" | "name") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === "email") setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
    if (field === "password") setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
    if (field === "name") setErrors((prev) => ({ ...prev, name: validateName(name) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const nameError = isSignup ? validateName(name) : undefined;
    
    setErrors({ email: emailError, password: passwordError, name: nameError });
    setTouched({ email: true, password: true, name: true });
    
    if (emailError || passwordError || (isSignup && nameError)) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    window.location.href = "/onboarding";
  };

  const handleMagicLink = async () => {
    const emailError = validateEmail(email);
    setErrors((prev) => ({ ...prev, email: emailError }));
    setTouched((prev) => ({ ...prev, email: true }));
    if (emailError) return;
    
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    // Show success state
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left panel - branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden bg-background">
        <NetworkBackground />
        <div className="bg-mesh absolute inset-0" />
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-insight/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        <div className="relative z-10 max-w-md px-12">
          <Link to="/" className="flex items-center gap-3 mb-12 group">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center glow-teal transition-all duration-300 group-hover:bg-primary/30">
              <span className="font-heading font-bold text-primary text-2xl">V</span>
            </div>
            <span className="font-heading font-semibold text-2xl">VOCA</span>
          </Link>
          
          <h2 className="font-heading text-4xl font-bold leading-tight mb-6">
            Career clarity,
            <br />
            <span className="text-gradient-hero">powered by intelligent guidance.</span>
          </h2>
          
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Answer a few guided questions and discover the career paths that truly align with your strengths, interests, and priorities.
          </p>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10">
              <Check size={14} className="text-primary" />
            </div>
            <span>Get your first career projection in 3-5 minutes</span>
          </div>
        </div>
      </div>

      {/* Right panel - auth form */}
      <div className="flex-1 flex items-center justify-center px-5 py-12 lg:px-16 bg-background relative">
        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <NetworkBackground />
          <div className="bg-mesh absolute inset-0" />
        </div>
        
        <div className="w-full max-w-sm relative z-10">
          {/* Mobile logo */}
          <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center glow-teal">
              <span className="font-heading font-bold text-primary text-xl">V</span>
            </div>
            <span className="font-heading font-semibold text-xl">VOCA</span>
          </Link>

          {/* Auth card with frosted glass effect */}
          <div className="glass-card p-6 md:p-8">
            <h1 className="font-heading text-2xl font-bold mb-1">
              {isSignup ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              {isSignup 
                ? "Takes 3-5 minutes to get your first career projection." 
                : "Continue your career exploration."}
            </p>

            {/* Tabs */}
            <div className="flex gap-1 mb-6 p-1 rounded-lg bg-secondary/80">
              <button
                onClick={() => setIsSignup(false)}
                className={`flex-1 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  !isSignup 
                    ? "bg-accent text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign in
              </button>
              <button
                onClick={() => setIsSignup(true)}
                className={`flex-1 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  isSignup 
                    ? "bg-accent text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Sign up
              </button>
            </div>

            {/* Social buttons */}
            <div className="space-y-3 mb-6">
              <Button 
                variant="outline" 
                className="w-full h-12 bg-secondary/50 border-border/60 hover:bg-secondary hover:border-border transition-all duration-200" 
                disabled={isLoading}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-12 bg-secondary/50 border-border/60 hover:bg-secondary hover:border-border transition-all duration-200" 
                disabled={isLoading}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#0A66C2" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                Continue with LinkedIn
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-border/60" />
              <span className="text-xs text-muted-foreground">or continue with email</span>
              <div className="flex-1 h-px bg-border/60" />
            </div>

            {/* Email form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignup && (
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Full name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className={`mt-1.5 h-12 bg-secondary/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-all duration-200 ${
                      touched.name && errors.name ? "border-destructive/60 focus:border-destructive/60" : ""
                    }`}
                    disabled={isLoading}
                  />
                  {touched.name && errors.name && (
                    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-destructive">
                      <AlertCircle size={12} />
                      {errors.name}
                    </p>
                  )}
                </div>
              )}
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={`mt-1.5 h-12 bg-secondary/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-all duration-200 ${
                    touched.email && errors.email ? "border-destructive/60 focus:border-destructive/60" : ""
                  }`}
                  disabled={isLoading}
                />
                {touched.email && errors.email && (
                  <p className="flex items-center gap-1.5 mt-1.5 text-xs text-destructive">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  {!isSignup && (
                    <button 
                      type="button" 
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="At least 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur("password")}
                    className={`mt-0 h-12 pr-12 bg-secondary/50 border-border/60 focus:border-primary/60 focus:ring-primary/20 transition-all duration-200 ${
                      touched.password && errors.password ? "border-destructive/60 focus:border-destructive/60" : ""
                    }`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {touched.password && errors.password && (
                  <p className="flex items-center gap-1.5 mt-1.5 text-xs text-destructive">
                    <AlertCircle size={12} />
                    {errors.password}
                  </p>
                )}
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full h-12 mt-2 text-base font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    {isSignup ? "Creating account..." : "Signing in..."}
                  </>
                ) : (
                  <>
                    {isSignup ? "Create Account" : "Sign In"}
                    <ArrowRight size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>

            <button 
              onClick={handleMagicLink}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground border border-border/40 hover:border-border/60 hover:bg-secondary/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Mail size={16} />
              Send me a magic link instead
            </button>

            <div className="flex items-start gap-3 mt-6 p-4 rounded-lg bg-secondary/30 border border-border/30">
              <Shield size={16} className="text-primary mt-0.5 shrink-0" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your answers are used to generate personalized recommendations and are never sold. Your data is encrypted and private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
