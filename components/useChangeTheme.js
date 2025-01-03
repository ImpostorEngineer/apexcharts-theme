import React, { useEffect, useState } from 'react';

export function useChangeTheme() {
  const [activeTheme, setActiveTheme] = useState('dark');
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    savedTheme && setActiveTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(inactiveTheme);
  };

  return {
    theme: activeTheme,
    toggleTheme,
  };
}
