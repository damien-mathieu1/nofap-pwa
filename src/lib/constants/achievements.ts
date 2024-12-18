import { LucideIcon, Shield, Medal, Trophy, Award, Crown, Star } from "lucide-react";

export interface Achievement {
  id: string;
  days: number;
  icon: LucideIcon;
  label: string;
}

export const BASE_ACHIEVEMENTS: Achievement[] = [
  { id: 'week', days: 7, icon: Shield, label: '1 Week Warrior' },
  { id: 'month', days: 30, icon: Medal, label: 'Monthly Master' },
  { id: '90days', days: 90, icon: Trophy, label: '90 Day Champion' },
  { id: '6months', days: 180, icon: Award, label: '6 Month Legend' },
  { id: 'year', days: 365, icon: Crown, label: '1 Year Emperor' },
];

export const MILESTONE_ICON = Star;