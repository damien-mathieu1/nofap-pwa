import { AchievementIcon } from './AchievementIcon';
import { generateAchievements } from '@/lib/utils/achievements';

interface AchievementsProps {
  currentStreak: number;
}

export function Achievements({ currentStreak }: AchievementsProps) {
  const achievements = generateAchievements(currentStreak);

  return (
    <div className="grid grid-cols-3 gap-4">
      {achievements.map((achievement) => (
        <AchievementIcon
          key={achievement.id}
          achievement={achievement}
          isAchieved={currentStreak >= achievement.days}
        />
      ))}
    </div>
  );
}