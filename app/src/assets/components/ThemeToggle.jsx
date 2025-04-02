/** @format */

import { useTheme } from '../../context/ThemeContext.jsx';
import Button from './Button.jsx';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Button
      text={isDarkMode ? 'LIGHT MODE' : 'DARK MODE'}
      onClick={toggleTheme}
      className="lightdark-button"
    />
  );
};

export default ThemeToggle;
