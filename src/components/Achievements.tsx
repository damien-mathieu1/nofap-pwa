import { Shield, Medal, Trophy, Award, Crown, Star } from "lucide-react";
import { cn } from '@/lib/utils';
import { getNextMilestone } from '@/lib/constants';

const ACHIEVEMENT_ICONS = {
  Shield,
  Medal,
  Trophy,
  Award,
  Crown,
  Star,
};

interface AchievementsProps {
  currentStreak: number;
}

export function Achievements({ currentStreak }: AchievementsProps) {
  const nextMilestone = getNextMilestone(currentStreak);
  const infiniteMilestone = {
    days: nextMilestone,
    icon: 'Star',
    label: `${nextMilestone} Day Milestone`
  };

  const achievements = [
    { days: 7, icon: 'Shield', label: '1 Week Warrior' },
    { days: 30, icon: 'Medal', label: 'Monthly Master' },
    { days: 90, icon: 'Trophy', label: '90 Day Champion' },
    { days: 180, icon: 'Award', label: '6 Month Legend' },
    { days: 365, icon: 'Crown', label: '1 Year Emperor' },
    infiniteMilestone
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {achievements.map((achievement) => {
        const Icon = ACHIEVEMENT_ICONS[achievement.icon as keyof typeof ACHIEVEMENT_ICONS];
        const isAchieved = currentStreak >= achievement.days;
        return (
          <div
            key={achievement.days}
            className={cn(
              "flex flex-col items-center p-2 rounded-lg transition-colors",
              isAchieved ? "text-primary" : "text-muted-foreground/50"
            )}
          >
            <Icon className={cn(
              "h-8 w-8 mb-1",
              isAchieved ? "text-primary" : "text-muted-foreground/50"
            )} />
            <span className="text-xs text-center">{achievement.label}</span>
          </div>
        );
      })}
    </div>
  );
}