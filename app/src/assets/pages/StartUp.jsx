/** @format */

import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';

export const StartUp = () => {
  return (
    <body>
      <Button text={'Dark'} /> {/* button for light/dark toggle */}
      <div className="logo-backdrop">
        {/* <img src="" alt="" /> */}
        <div className="startup-buttons">
          <Button text={'Best Times'} />
          <button className="startup-play-button">Play</button>
          <Button text={'Rules'} />
        </div>
      </div>
    </body>
  );
};
