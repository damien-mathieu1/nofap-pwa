const MOTIVATION_QUOTES = [
  "Every day is a new opportunity to grow stronger.",
  "Your future self will thank you for the choices you make today.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The only person you should try to be better than is the person you were yesterday.",
  "Small daily improvements are the key to staggering long-term results.",
  "Your body hears everything your mind says. Stay positive.",
  "The harder the battle, the sweeter the victory.",
  "Don't count the days, make the days count.",
  "You are stronger than you think.",
  "Progress is progress, no matter how small.",
  "Fall seven times, stand up eight.",
  "The journey of a thousand miles begins with one step.",
  "Your potential is endless. Go do what you were created to do.",
  "The only bad workout is the one that didn't happen.",
  "Success is built on daily disciplines.",
];

export function getRandomQuote(): string {
  const randomIndex = Math.floor(Math.random() * MOTIVATION_QUOTES.length);
  return MOTIVATION_QUOTES[randomIndex];
}