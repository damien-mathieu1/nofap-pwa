// Achievement constants
export const ACHIEVEMENTS = [
  { days: 7, icon: 'Shield', label: '1 Week Warrior' },
  { days: 30, icon: 'Medal', label: 'Monthly Master' },
  { days: 90, icon: 'Trophy', label: '90 Day Champion' },
  { days: 180, icon: 'Award', label: '6 Month Legend' },
  { days: 365, icon: 'Crown', label: '1 Year Emperor' },
] as const;

// Infinite milestones (generated dynamically)
export function getNextMilestone(currentStreak: number): number {
  const baseMillestones = [7, 30, 90, 180, 365];
  const lastBaseMilestone = baseMillestones[baseMillestones.length - 1];
  
  if (currentStreak < lastBaseMilestone) {
    return baseMillestones.find(m => m > currentStreak) || lastBaseMilestone;
  }
  
  // After 365 days, create milestones every 100 days
  const hundredDayMilestone = Math.ceil(currentStreak / 100) * 100;
  return hundredDayMilestone > currentStreak ? hundredDayMilestone : hundredDayMilestone + 100;
}

// Local storage keys
export const STORAGE_KEYS = {
  STREAK: 'nofap-streak',
  THEME: 'nofap-theme',
} as const;

// Initial streak state
export const INITIAL_STREAK = {
  count: 0,
  lastCheck: null,
  history: [],
} as const;