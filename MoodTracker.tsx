import { useState } from "react";
import { Button } from "@/components/ui/button";

const moods = [
  { emoji: "😊", label: "Happy", color: "peach" },
  { emoji: "😢", label: "Sad", color: "secondary" },
  { emoji: "😡", label: "Angry", color: "destructive" },
  { emoji: "😰", label: "Anxious", color: "accent" },
  { emoji: "😴", label: "Tired", color: "muted" },
  { emoji: "🥳", label: "Excited", color: "primary" },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
      <h2 className="text-xl font-semibold mb-4 text-foreground">How are you feeling today?</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {moods.map((mood) => (
          <Button
            key={mood.label}
            variant={selectedMood === mood.label ? "default" : "outline"}
            className={`h-20 flex flex-col gap-1 rounded-xl transition-all hover:scale-110 ${
              selectedMood === mood.label ? "shadow-medium animate-bounce-subtle" : ""
            }`}
            onClick={() => setSelectedMood(mood.label)}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-xs font-medium">{mood.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
