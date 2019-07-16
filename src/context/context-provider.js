import React from 'react';
import ThemeContext from './theme-context';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("theme1");

  function handleChange(e) {
    setTheme(e.target.value);
    e.preventDefault();
  }
  return (
    <ThemeContext.Provider value={theme}>
      <select onChange={handleChange}>
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
      </select>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;