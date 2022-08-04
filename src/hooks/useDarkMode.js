import { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState('dark');
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [theme, colorTheme, setTheme]);
  return [setTheme, colorTheme];
}

export default useDarkMode;
