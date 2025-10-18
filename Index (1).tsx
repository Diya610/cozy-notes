import { Search, Calendar, Folder, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StickyNote } from "@/components/StickyNote";
import { MoodTracker } from "@/components/MoodTracker";
import { QuickAddNote } from "@/components/QuickAddNote";

const Index = () => {
  const sampleNotes = [
    {
      id: 1,
      title: "Morning Thoughts ☀️",
      content: "Today feels like a fresh start! Remember to water the plants and call mom.",
      color: "pink" as const,
    },
    {
      id: 2,
      title: "Book Ideas 📚",
      content: "Reading 'The Secret Garden' - loving the peaceful vibes and beautiful descriptions.",
      color: "lavender" as const,
    },
    {
      id: 3,
      title: "Recipe to Try 🍰",
      content: "Strawberry shortcake with fresh whipped cream. Don't forget vanilla extract!",
      color: "peach" as const,
    },
    {
      id: 4,
      title: "Weekend Plans 🌸",
      content: "Visit the botanical garden, coffee with Sarah, and start the new watercolor painting.",
      color: "mint" as const,
    },
  ];

  const folders = [
    { icon: Star, label: "Favorites", count: 12 },
    { icon: Heart, label: "Personal", count: 8 },
    { icon: Calendar, label: "Today", count: 3 },
    { icon: Folder, label: "Work", count: 5 },
  ];

  return (
    <div className="min-h-screen gradient-dreamy">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-10 shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cozy Notes ✨
            </h1>
            <div className="flex items-center gap-3 flex-1 max-w-md">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search notes..."
                  className="pl-10 rounded-xl border-2 focus:border-primary bg-background"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-xl border-2 hover:border-primary hover:bg-primary-light/20"
              >
                <Calendar className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-5 shadow-soft border border-border sticky top-24">
              <h2 className="text-lg font-semibold mb-4 text-foreground">Folders</h2>
              <nav className="space-y-2">
                {folders.map((folder, index) => {
                  const Icon = folder.icon;
                  return (
                    <Button
                      key={index}
                      variant={index === 0 ? "default" : "ghost"}
                      className={`w-full justify-start rounded-xl ${
                        index === 0 ? "bg-primary hover:bg-primary-light" : ""
                      }`}
                    >
                      <Icon className="mr-3 h-4 w-4" />
                      <span className="flex-1 text-left">{folder.label}</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full">
                        {folder.count}
                      </span>
                    </Button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Mood Tracker */}
            <MoodTracker />

            {/* Quick Add */}
            <QuickAddNote />

            {/* Notes Grid */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Recent Notes</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sampleNotes.map((note) => (
                  <StickyNote
                    key={note.id}
                    title={note.title}
                    content={note.content}
                    color={note.color}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
