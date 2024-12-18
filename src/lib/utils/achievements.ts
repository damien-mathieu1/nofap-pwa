import type { Achievement } from '../constants/achievements';
import { BASE_ACHIEVEMENTS, MILESTONE_ICON } from '../constants/achievements';

export function getNextMilestone(currentStreak: number): number {
  const baseMillestones = BASE_ACHIEVEMENTS.map(a => a.days);
  const lastBaseMilestone = baseMillestones[baseMillestones.length - 1];
  
  if (currentStreak < lastBaseMilestone) {
    return baseMillestones.find(m => m > currentStreak) || lastBaseMilestone;
  }
  
  // After 365 days, create milestones every 100 days
  const hundredDayMilestone = Math.ceil(currentStreak / 100) * 100;
  return hundredDayMilestone > currentStreak ? hundredDayMilestone : hundredDayMilestone + 100;
}

export function generateAchievements(currentStreak: number): Achievement[] {
  const nextMilestone = getNextMilestone(currentStreak);
  
  // Only add the dynamic milestone if it's different from base achievements
  if (!BASE_ACHIEVEMENTS.some(a => a.days === nextMilestone)) {
    return [
      ...BASE_ACHIEVEMENTS,
      {
        id: `milestone-${nextMilestone}`,
        days: nextMilestone,
        icon: MILESTONE_ICON,
        label: `${nextMilestone} Day Milestone`
      }
    ];
  }
  
  return BASE_ACHIEVEMENTS;
}