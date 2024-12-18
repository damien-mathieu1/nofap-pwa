export interface Streak {
  count: number;
  lastCheck: string;
  history: string[];
}

export interface Achievement {
  days: number;
  icon: React.ComponentType;
  label: string;
}