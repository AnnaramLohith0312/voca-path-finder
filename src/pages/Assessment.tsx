import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";

const steps = [
  {
    title: "What's your education level?",
    subtitle: "Tell us about your academic background.",
    why: "This helps us match you with career paths that align with your qualifications.",
  },
  {
    title: "What interests you most?",
    subtitle: "Select all topics that genuinely excite you.",
    why: "Interests are strong predictors of long-term career satisfaction.",
  },
  {
    title: "Rate your core skills",
    subtitle: "Be honest — there are no wrong answers.",
    why: "Skill alignment helps us find roles where you'll thrive, not just survive.",
  },
  {
    title: "Which industries appeal to you?",
    subtitle: "Pick industries you'd love to work in.",
    why: "Industry fit impacts daily satisfaction, culture, and growth trajectory.",
  },
  {
    title: "What matters most in your career?",
    subtitle: "Rank your top priorities.",
    why: "Priorities help us recommend careers that match your values, not just your resume.",
  },
  {
    title: "Any aspirations or goals?",
    subtitle: "Optional — share anything else about your career vision.",
    why: "Free-form goals help us personalize recommendations beyond structured data.",
  },
];

const educationLevels = ["High School", "Diploma", "Bachelor's", "Master's", "PhD", "Self-taught"];
const interests = ["Technology", "Design", "Business", "Science", "Arts", "Healthcare", "Education", "Engineering", "Finance", "Social Impact", "Media", "Law"];
const skills = ["Problem Solving", "Communication", "Creativity", "Leadership", "Data Analysis", "Writing", "Coding", "Research"];
const industries = ["Tech & Software", "Healthcare", "Finance", "Education", "Creative & Media", "Consulting", "Government", "Startups", "Manufacturing", "Non-profit"];
const priorities = ["High Salary", "Work-Life Balance", "Career Growth", "Job Stability", "Social Impact", "Learning Opportunities", "Remote Work", "Leadership Path"];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [selectedEdu, setSelectedEdu] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [skillRatings, setSkillRatings] = useState<Record<string, number>>({});
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [showWhy, setShowWhy] = useState(false);

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, item: string) => {
    setArr(arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item]);
  };

  const progress = ((step + 1) / steps.length) * 100;

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="grid grid-cols-2 gap-3">
            {educationLevels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedEdu(level)}
                className={`chip-select ${selectedEdu === level ? "chip-select-active" : "text-muted-foreground hover:text-foreground hover:border-border"}`}
              >
                {level}
              </button>
            ))}
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
              className="w-full h-40 rounded-xl bg-secondary border border-border/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
        <div className="h-1 bg-secondary">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between px-5 h-14">
          <button
            onClick={() => step > 0 && setStep(step - 1)}
            className={`flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors ${step === 0 ? "opacity-30 pointer-events-none" : ""}`}
          >
            <ArrowLeft size={16} /> Back
          </button>
          <span className="text-xs text-muted-foreground font-medium">
            {step + 1} of {steps.length}
          </span>
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Save & Exit
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center pt-28 pb-32 px-5">
        <div className="w-full max-w-lg animate-fade-in" key={step}>
          <h1 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            {steps[step].title}
          </h1>
          <p className="text-muted-foreground text-sm mb-2">{steps[step].subtitle}</p>
          <button
            onClick={() => setShowWhy(!showWhy)}
            className="flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary mb-8 transition-colors"
          >
            <HelpCircle size={12} /> Why we ask this
          </button>
          {showWhy && (
            <div className="mb-6 p-3 rounded-lg bg-primary/5 border border-primary/10 text-sm text-muted-foreground animate-fade-in">
              {steps[step].why}
            </div>
          )}
          {renderStep()}
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border/30 px-5 py-4">
        <div className="max-w-lg mx-auto">
          {step < steps.length - 1 ? (
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => setStep(step + 1)}
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
