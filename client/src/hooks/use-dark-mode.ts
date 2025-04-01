import { useState, useEffect } from 'react';

type DarkModeReturnType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export function useDarkMode(): DarkModeReturnType {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on saved preference or system preference
    const shouldUseDarkMode = savedDarkMode || (!localStorage.getItem('dark-mode') && prefersDarkMode);
    
    setIsDarkMode(shouldUseDarkMode);
    
    if (shouldUseDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newDarkMode = !prev;
      localStorage.setItem('dark-mode', String(newDarkMode));
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newDarkMode;
    });
  };

  return { isDarkMode, toggleDarkMode };
}
