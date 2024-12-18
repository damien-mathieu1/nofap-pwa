import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HistoryCalendarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  history?: string[];
}

export function HistoryCalendar({ open, onOpenChange, history = [] }: HistoryCalendarProps) {
  // Safely convert dates and filter out any invalid dates
  const checkedDates = (history || [])
    .map(date => new Date(date))
    .filter(date => !isNaN(date.getTime()));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your Progress Calendar</DialogTitle>
        </DialogHeader>
        <Calendar
          mode="multiple"
          selected={checkedDates}
          className="rounded-md border"
          disabled={(date) => date > new Date()}
          modifiers={{
            booked: checkedDates
          }}
          modifiersStyles={{
            booked: {
              backgroundColor: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))'
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}