/** @format */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Options from './Options.jsx';
import Logo from '../../images/logo/peeknpair-logo-2.png';

const StartUp = () => {
  return (
    <body>
      <Button text={'Dark'} className={'lightdark-button'} />
      {/* button for light/dark toggle */}
      <div className="page-backdrop">
        {/* <img src={Logo} alt="Peek and pair logo" className="peeknpair-logo" /> */}
        <div className="startup-buttons">
          <Button text={'Best Times'} />
          <button className="startup-play-button">
            <Link to={'./assets/pages/Options.jsx'}>Play</Link>
          </button>
          <Button text={'Rules'} />
        </div>
      </div>
    </body>
  );
};

export default StartUp;
