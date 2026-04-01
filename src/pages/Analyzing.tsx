import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NetworkBackground from "@/components/NetworkBackground";

const stages = [
  "Mapping your profile…",
  "Matching career clusters…",
  "Evaluating strengths and interests…",
  "Analyzing market alignment…",
  "Preparing your recommendations…",
];

const Analyzing = () => {
  const [stageIndex, setStageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex((prev) => {
        if (prev >= stages.length - 1) {
          clearInterval(interval);
          setTimeout(() => navigate("/results"), 1200);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [navigate]);

  const progress = ((stageIndex + 1) / stages.length) * 100;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <NetworkBackground />
      <div className="bg-mesh absolute inset-0" />

      <div className="relative z-10 text-center px-5 max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-8 animate-glow-pulse">
          <span className="font-heading font-bold text-primary text-3xl">V</span>
        </div>

        <h1 className="font-heading text-2xl md:text-3xl font-bold mb-3">
          Analyzing your profile
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Sit back — VOCA is finding your best-fit career paths.
        </p>

        {/* Progress */}
        <div className="w-full h-2 rounded-full bg-secondary mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stages */}
        <div className="space-y-3">
          {stages.map((stage, i) => (
            <div
              key={i}
              className={`text-sm transition-all duration-500 ${
                i === stageIndex
                  ? "text-primary font-medium"
                  : i < stageIndex
                  ? "text-muted-foreground/50"
                  : "text-muted-foreground/20"
              }`}
            >
              {i < stageIndex ? "✓ " : i === stageIndex ? "◉ " : "○ "}
              {stage}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analyzing;
