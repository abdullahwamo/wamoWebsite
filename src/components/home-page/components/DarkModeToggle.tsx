import { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Prevents rendering before theme is applied

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    setIsMounted(true); // Mark component as fully mounted
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark, isMounted]);

  // Prevent rendering until theme state is fully initialized
  if (!isMounted) return null;

  return (
    <div className='flex items-center cursor-pointer' onClick={() => setIsDark((prev) => !prev)}>
      <div className='relative'>
        <div
          className={`w-12 h-6 rounded-full p-1 flex items-center transition-all duration-300 ${
            isDark ? 'bg-gray-500' : 'bg-gray-300'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              isDark ? 'translate-x-6 bg-white' : 'bg-black'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

// Apply theme immediately to prevent flickering
if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
