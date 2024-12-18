import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Timer, Moon, Sun, Flame } from "lucide-react";
import { StreakCounter } from '@/components/StreakCounter';
import { Achievements } from '@/components/achievements/Achievements';
import { HistoryCalendar } from '@/components/HistoryCalendar';
import { DailyMotivation } from '@/components/DailyMotivation';
import { useStreak } from '@/hooks/useStreak';
import { useTheme } from "@/providers/ThemeProvider";

function App() {
  const { streak, checkIn } = useStreak();
  const { theme, setTheme } = useTheme();
  const [showHistory, setShowHistory] = useState(false);
  const progress = ((streak.count % 7) * 100) / 7;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container max-w-md mx-auto px-4 py-6 space-y-4">
        <Card className="border-2 border-primary/20">
          <CardContent className="pt-6 space-y-6">
            {/* Header inside the main card */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Flame className="h-6 w-6 text-orange-500" />
                <h1 className="text-xl font-bold">NoFap Challenge</h1>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>

            <StreakCounter count={streak.count} progress={progress} />
            <Achievements currentStreak={streak.count} />
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={checkIn}
              >
                <Timer className="mr-2 h-4 w-4" />
                Check In
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowHistory(true)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                History
              </Button>
            </div>
          </CardContent>
        </Card>

        <DailyMotivation />

        <HistoryCalendar
          open={showHistory}
          onOpenChange={setShowHistory}
          history={streak.history || []}
        />
      </main>
    </div>
  );
}

export default App;