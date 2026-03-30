import { useState } from 'react';

export const ThemeSelector = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="p-4">
      <h2>Current Theme: {theme}</h2>
      
      <label htmlFor="theme-select">Choose a theme:</label>
      <select 
        id="theme-select" 
        value={theme} 
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};