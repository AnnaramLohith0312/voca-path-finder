import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
  GraduationCap,
  BookOpen,
  Award,
  Microscope,
  MoreHorizontal,
  Save,
  Check
} from "lucide-react";
import NetworkBackground from "@/components/NetworkBackground";

const steps = [
  {
    title: "What is your current education level?",
    subtitle: "This helps us understand your academic foundation and recommend careers that align with your qualifications.",
    why: "Education level gives us a baseline for career paths — not as a limit, but as a starting point. VOCA uses this to suggest roles where your background gives you an edge, while also showing growth paths if you want to aim higher.",
  },
  {
    title: "What interests you most?",
    subtitle: "Select all topics that genuinely excite you.",
    why: "Interests are strong predictors of long-term career satisfaction. We use this to find careers where your natural curiosity becomes a professional advantage.",
  },
  {
    title: "Rate your core skills",
    subtitle: "Be honest — there are no wrong answers.",
    why: "Skill alignment helps us find roles where you'll thrive, not just survive. This isn't about being perfect — it's about finding the right fit.",
  },
  {
    title: "Which industries appeal to you?",
    subtitle: "Pick industries you'd love to work in.",
    why: "Industry fit impacts daily satisfaction, culture, and growth trajectory. We'll match you with sectors that align with your values and goals.",
  },
  {
    title: "What matters most in your career?",
    subtitle: "Rank your top priorities.",
    why: "Priorities help us recommend careers that match your values, not just your resume. Everyone's definition of success is different.",
  },
  {
    title: "Any aspirations or goals?",
    subtitle: "Optional — share anything else about your career vision.",
    why: "Free-form goals help us personalize recommendations beyond structured data. This is your space to dream big.",
  },
];

const educationOptions = [
  {
    id: "highschool",
    label: "High School / 12th",
    description: "Secondary education completed",
    icon: BookOpen,
    requiresSpecialization: false,
  },
  {
    id: "bachelors",
    label: "Bachelor's Degree",
    description: "Undergraduate degree (B.A., B.S., B.Tech, etc.)",
    icon: GraduationCap,
    requiresSpecialization: true,
  },
  {
    id: "masters",
    label: "Master's Degree",
    description: "Postgraduate degree (M.A., M.S., MBA, etc.)",
    icon: Award,
    requiresSpecialization: true,
  },
  {
    id: "phd",
    label: "PhD / Doctorate",
    description: "Doctoral research degree",
    icon: Microscope,
    requiresSpecialization: true,
  },
  {
    id: "other",
    label: "Other",
    description: "Self-taught, bootcamp, diploma, etc.",
    icon: MoreHorizontal,
    requiresSpecialization: true,
  },
];

const interests = ["Technology", "Design", "Business", "Science", "Arts", "Healthcare", "Education", "Engineering", "Finance", "Social Impact", "Media", "Law"];
const skills = ["Problem Solving", "Communication", "Creativity", "Leadership", "Data Analysis", "Writing", "Coding", "Research"];
const industries = ["Tech & Software", "Healthcare", "Finance", "Education", "Creative & Media", "Consulting", "Government", "Startups", "Manufacturing", "Non-profit"];
const priorities = ["High Salary", "Work-Life Balance", "Career Growth", "Job Stability", "Social Impact", "Learning Opportunities", "Remote Work", "Leadership Path"];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [selectedEdu, setSelectedEdu] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [skillRatings, setSkillRatings] = useState<Record<string, number>>({});
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [showWhy, setShowWhy] = useState(false);
  const [goals, setGoals] = useState("");

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, item: string) => {
    setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const progress = ((step + 1) / steps.length) * 100;
  
  const selectedEducation = educationOptions.find(e => e.id === selectedEdu);
  const showSpecialization = selectedEducation?.requiresSpecialization && selectedEdu;

  const canProceed = () => {
    switch (step) {
      case 0:
        if (!selectedEdu) return false;
        if (showSpecialization && !specialization.trim()) return false;
        return true;
      case 1:
        return selectedInterests.length > 0;
      case 2:
        return Object.keys(skillRatings).length === skills.length;
      case 3:
        return selectedIndustries.length > 0;
      case 4:
        return selectedPriorities.length >= 1;
      case 5:
        return true; // Optional
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-4">
            {/* Education Level Cards */}
            <div className="space-y-3">
              {educationOptions.map((option) => {
                const Icon = option.icon;
                const isSelected = selectedEdu === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedEdu(option.id);
                      if (!option.requiresSpecialization) {
                        setSpecialization("");
                      }
                    }}
                    className={`w-full flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 text-left group ${
                      isSelected
                        ? "border-primary/60 bg-primary/5 shadow-[0_0_30px_hsl(174_62%_47%/0.1)]"
                        : "border-border/50 bg-card/40 hover:border-border hover:bg-card/60"
                    }`}
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary/60 text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold transition-colors ${
                            isSelected ? "text-foreground" : "text-foreground/80"
                          }`}
                        >
                          {option.label}
                        </span>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                            <Check size={12} className="text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {option.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Conditional Specialization Field */}
            {showSpecialization && (
              <div className="pt-4 animate-fade-in-up">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Field of Study / Specialization
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Computer Science, Business Administration, Psychology..."
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="h-12 bg-secondary/50 border-border/60 focus:border-primary/50 focus:ring-primary/20"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  This helps us understand your academic focus and recommend relevant career paths.
                </p>
              </div>
            )}
          </div>
        );
      case 1:
        return (
          <div className="flex flex-wrap gap-3">
            {interests.map((item) => (
              <button
                key={item}
                onClick={() => toggleItem(selectedInterests, setSelectedInterests, item)}
                className={`chip-select ${selectedInterests.includes(item) ? "chip-select-active" : "text-muted-foreground hover:text-foreground hover:border-border"}`}
              >
                {item}
              </button>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">{skill}</span>
                  <span className="text-primary font-semibold">{skillRatings[skill] || 0}/5</span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      onClick={() => setSkillRatings({ ...skillRatings, [skill]: n })}
                      className={`flex-1 h-3 rounded-full transition-all duration-200 ${
                        (skillRatings[skill] || 0) >= n
                          ? "bg-primary"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-wrap gap-3">
            {industries.map((item) => (
              <button
                key={item}
                onClick={() => toggleItem(selectedIndustries, setSelectedIndustries, item)}
                className={`chip-select ${selectedIndustries.includes(item) ? "chip-select-active" : "text-muted-foreground hover:text-foreground hover:border-border"}`}
              >
                {item}
              </button>
            ))}
          </div>
        );
      case 4:
        return (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground mb-2">Select your top 3 priorities</p>
            {priorities.map((item) => {
              const idx = selectedPriorities.indexOf(item);
              const isSelected = idx !== -1;
              return (
                <button
                  key={item}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedPriorities(selectedPriorities.filter((i) => i !== item));
                    } else if (selectedPriorities.length < 3) {
                      setSelectedPriorities([...selectedPriorities, item]);
                    }
                  }}
                  className={`w-full flex items-center justify-between chip-select ${isSelected ? "chip-select-active" : "text-muted-foreground hover:text-foreground hover:border-border"}`}
                >
                  <span>{item}</span>
                  {isSelected && (
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        );
      case 5:
        return (
          <div>
            <textarea
              placeholder="E.g., I want to work on products that help people learn. I'm interested in AI but also love storytelling..."
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              className="w-full h-40 rounded-xl bg-secondary/50 border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-mesh opacity-60" />
      <NetworkBackground />
      
      {/* Progress Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
        <div className="h-1 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between px-5 h-14 max-w-2xl mx-auto">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            className={`flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors ${step === 0 ? "opacity-30 pointer-events-none" : ""}`}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-sm text-muted-foreground font-medium">
            Step {step + 1} of {steps.length}
          </span>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Save size={14} /> Save & Exit
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center pt-28 pb-36 px-5 relative z-10">
        <div className="w-full max-w-xl" key={step}>
          {/* Question Card */}
          <div className="glass-card p-6 md:p-8 animate-fade-in-up">
            <h1 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-balance">
              {steps[step].title}
            </h1>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {steps[step].subtitle}
            </p>
            
            {/* Why we ask this - Expandable */}
            <button
              onClick={() => setShowWhy(!showWhy)}
              className="flex items-center gap-1.5 text-xs text-primary/80 hover:text-primary mb-6 transition-colors"
            >
              {showWhy ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              Why we ask this
            </button>
            
            {showWhy && (
              <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/10 text-sm text-muted-foreground leading-relaxed animate-fade-in-up">
                {steps[step].why}
              </div>
            )}

            {/* Step Content */}
            {renderStep()}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border/30 px-5 py-4 z-50">
        <div className="max-w-xl mx-auto">
          {step < steps.length - 1 ? (
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
            >
              Continue <ArrowRight size={16} />
            </Button>
          ) : (
            <Link to="/analyzing">
              <Button variant="hero" size="lg" className="w-full">
                Submit & See My Results <ArrowRight size={16} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
