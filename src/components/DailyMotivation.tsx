import { Card, CardContent } from "@/components/ui/card";
import { useQuote } from '@/hooks/useQuote';

export function DailyMotivation() {
  const quote = useQuote();

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center space-y-2">
          <h2 className="font-semibold">Daily Motivation</h2>
          <blockquote className="italic text-muted-foreground text-sm">
            "{quote}"
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}