/** @format */

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartUp from './assets/pages/StartUp.jsx';
import Options from './assets/pages/Options.jsx';
import Game from './assets/pages/Game.jsx';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartUp />} /> {/* Default route */}
      <Route path="/options" element={<Options />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
