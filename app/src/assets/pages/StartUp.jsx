/** @format */

import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import Logo from '../../images/logo/peeknpair-logo-2.png';

export const StartUp = () => {
  return (
    <body>
      <Button text={'Dark'} className={'lightdark-button'} />
      {/* button for light/dark toggle */}
      <div className="logo-backdrop">
        {/* <img src={Logo} alt="Peek and pair logo" className="peeknpair-logo" /> */}
        <div className="startup-buttons">
          <Button text={'Best Times'} />
          <button className="startup-play-button">Play</button>
          <Button text={'Rules'} />
        </div>
      </div>
    </body>
  );
};
