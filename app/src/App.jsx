/** @format */

import { useState } from 'react';
import { StartUp } from './assets/pages/StartUp';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StartUp />
    </>
  );
}

export default App;
