/** @format */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartUp from './assets/pages/StartUp.jsx';
import HowTo from './assets/pages/HowTo.jsx';
import BestTimes from './assets/pages/BestTimes.jsx';
import Options from './assets/pages/Options.jsx';
import Game from './assets/pages/Game.jsx';
import NotFound from './assets/pages/NotFound.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartUp />} /> {/* Default route */}
      <Route path="/howto" element={<HowTo />} />
      <Route path="/best-times" element={<BestTimes />} />
      <Route path="/options" element={<Options />} />
      <Route path="/game" element={<Game />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
