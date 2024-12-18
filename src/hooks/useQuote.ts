import { useState, useEffect } from 'react';
import { getRandomQuote } from '@/lib/utils/quotes';
import { getFromStorage, setToStorage } from '@/lib/utils/storage';

const QUOTE_STORAGE_KEY = 'daily-quote';
const QUOTE_DATE_KEY = 'quote-date';

export function useQuote() {
  const [quote, setQuote] = useState(() => {
    const storedQuote = getFromStorage(QUOTE_STORAGE_KEY, '');
    const storedDate = getFromStorage(QUOTE_DATE_KEY, '');
    
    if (storedQuote && storedDate && isToday(new Date(storedDate))) {
      return storedQuote;
    }
    
    const newQuote = getRandomQuote();
    setToStorage(QUOTE_STORAGE_KEY, newQuote);
    setToStorage(QUOTE_DATE_KEY, new Date().toISOString());
    return newQuote;
  });

  useEffect(() => {
    const checkAndUpdateQuote = () => {
      const storedDate = getFromStorage(QUOTE_DATE_KEY, '');
      if (!storedDate || !isToday(new Date(storedDate))) {
        const newQuote = getRandomQuote();
        setQuote(newQuote);
        setToStorage(QUOTE_STORAGE_KEY, newQuote);
        setToStorage(QUOTE_DATE_KEY, new Date().toISOString());
      }
    };

    // Check at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const timer = setTimeout(checkAndUpdateQuote, timeUntilMidnight);
    return () => clearTimeout(timer);
  }, []);

  return quote;
}

function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}