import { Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StickyNoteProps {
  title: string;
  content: string;
  color: "pink" | "lavender" | "mint" | "peach";
  onDelete?: () => void;
  onEdit?: () => void;
}

const colorClasses = {
  pink: "bg-primary-light hover:bg-primary-glow border-primary",
  lavender: "bg-secondary-light hover:bg-secondary border-secondary",
  mint: "bg-accent-light hover:bg-accent border-accent",
  peach: "bg-peach-light hover:bg-peach border-peach",
};

export const StickyNote = ({ title, content, color, onDelete, onEdit }: StickyNoteProps) => {
  return (
    <div
      className={`${colorClasses[color]} p-6 rounded-2xl border-2 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group animate-scale-in`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {onEdit && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hover:bg-background/50"
              onClick={onEdit}
            >
              <Edit className="h-4 w-4" />
            </Button>
          )}
          {onDelete && (
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 hover:bg-destructive hover:text-destructive-foreground"
              onClick={onDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      <p className="text-foreground/80 text-sm leading-relaxed">{content}</p>
    </div>
  );
};
