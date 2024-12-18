import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useToast } from '@/hooks/use-toast';
import { INITIAL_STREAK, STORAGE_KEYS } from '@/lib/constants';
import { isSameDay, parseDate } from '@/lib/utils/date';
import type { Streak } from '@/types/streak';

export function useStreak() {
  const [streak, setStreak] = useLocalStorage<Streak>(STORAGE_KEYS.STREAK, INITIAL_STREAK);
  const { toast } = useToast();

  const checkIn = () => {
    try {
      const today = new Date();
      const lastCheck = parseDate(streak.lastCheck);
      
      if (!lastCheck) {
        throw new Error('Invalid last check date');
      }

      if (isSameDay(today, lastCheck)) {
        toast({
          title: "Already Checked In",
          description: "You've already checked in today. Keep going strong!",
        });
        return;
      }

      setStreak(prev => ({
        count: prev.count + 1,
        lastCheck: today.toISOString(),
        history: [...prev.history, today.toISOString()]
      }));

      toast({
        title: "Check-in Successful! 💪",
        description: "Another day stronger. Keep up the great work!",
      });
    } catch (error) {
      console.error('Error during check-in:', error);
      toast({
        title: "Check-in Failed",
        description: "There was an error processing your check-in. Please try again.",
        variant: "destructive"
      });
    }
  };

  const resetStreak = () => {
    try {
      setStreak(INITIAL_STREAK);
      toast({
        title: "Streak Reset",
        description: "Don't worry! Every day is a new opportunity to start fresh.",
        variant: "destructive"
      });
    } catch (error) {
      console.error('Error resetting streak:', error);
      toast({
        title: "Reset Failed",
        description: "There was an error resetting your streak. Please try again.",
        variant: "destructive"
      });
    }
  };

  return {
    streak,
    checkIn,
    resetStreak
  };
}