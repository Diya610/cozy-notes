import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const QuickAddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAdd = () => {
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in both title and content!");
      return;
    }
    
    toast.success("Note added successfully! 📝");
    setTitle("");
    setContent("");
    setIsExpanded(false);
  };

  if (!isExpanded) {
    return (
      <Button
        onClick={() => setIsExpanded(true)}
        className="w-full h-14 rounded-2xl shadow-soft hover:shadow-medium transition-all bg-primary hover:bg-primary-light text-primary-foreground font-semibold text-lg"
      >
        <Plus className="mr-2 h-5 w-5" />
        Add New Note
      </Button>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border animate-scale-in">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Create New Note</h3>
      <div className="space-y-3">
        <Input
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-xl border-2 focus:border-primary"
        />
        <Textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="rounded-xl border-2 focus:border-primary min-h-[100px] resize-none"
        />
        <div className="flex gap-2">
          <Button
            onClick={handleAdd}
            className="flex-1 rounded-xl bg-primary hover:bg-primary-light text-primary-foreground"
          >
            Add Note
          </Button>
          <Button
            onClick={() => setIsExpanded(false)}
            variant="outline"
            className="flex-1 rounded-xl"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
