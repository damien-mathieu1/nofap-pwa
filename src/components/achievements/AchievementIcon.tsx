import { cn } from '@/lib/utils';
import type { Achievement } from '@/lib/constants/achievements';

interface AchievementIconProps {
  achievement: Achievement;
  isAchieved: boolean;
}

export function AchievementIcon({ achievement, isAchieved }: AchievementIconProps) {
  const Icon = achievement.icon;
  
  return (
    <div
      className={cn(
        "flex flex-col items-center p-2 rounded-lg transition-colors",
        isAchieved ? "text-primary" : "text-muted-foreground/50"
      )}
    >
      <Icon 
        className={cn(
          "h-8 w-8 mb-1",
          isAchieved ? "text-primary" : "text-muted-foreground/50"
        )} 
      />
      <span className="text-xs text-center">{achievement.label}</span>
    </div>
  );
}