import { ThemeToggle } from './ThemeToggle';
import { Flame } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-orange-500" />
          <h1 className="text-xl font-bold">NoFap Challenge</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}