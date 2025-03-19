/** @format */

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartUp from "./assets/pages/StartUp";
import Options from "./assets/pages/Options.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StartUp />
      <Routes>
        <Route path="./assets/pages/Options.jsx" element={<Options />}></Route>
      </Routes>
    </>
  );
}

export default App;
