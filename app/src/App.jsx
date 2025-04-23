/** @format */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx';
import StartUp from './assets/pages/StartUp.jsx';
import HowTo from './assets/pages/HowTo.jsx';
import BestTimes from './assets/pages/BestTimes.jsx';
import Options from './assets/pages/Options.jsx';
import Game from './assets/pages/Game.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import './App.css';

function ThemeWrapper() {
  const { isDarkMode } = useTheme();

  const [userSelections, setUserSelections] = useState({
    category: '',
    theme: '',
    difficulty: '',
    trackTime: 'No',
  });

  const handleOptionsSubmit = (formData) => {
    setUserSelections(formData);
  };
  return (
    <div className={isDarkMode ? 'dark-theme' : ''}>
      <Routes>
        <Route path="/" element={<StartUp />} />
        <Route path="/howto" element={<HowTo />} />
        <Route path="/best-times" element={<BestTimes />} />
        <Route
          path="/options"
          element={<Options onOptionsSubmit={handleOptionsSubmit} />}
        />
        <Route
          path="/game"
          element={<Game userSelections={userSelections} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  );
}

export default App;
