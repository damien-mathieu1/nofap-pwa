import { Progress } from "@/components/ui/progress";

interface StreakCounterProps {
  count: number;
  progress: number;
}

export function StreakCounter({ count, progress }: StreakCounterProps) {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="text-6xl font-bold mb-1">{count}</div>
        <div className="text-sm text-muted-foreground">Days Strong</div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Next milestone</span>
          <span className="font-medium">{Math.floor(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
}