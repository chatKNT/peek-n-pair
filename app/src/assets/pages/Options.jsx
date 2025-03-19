/** @format */

import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';

const Options = () => {
  return (
    <body>
      <Link to="/">
        <Button text={'Home'} />
      </Link>
      <Button text={'Dark'} />
      <div className="page-backdrop">
        <div className="options-preview"></div>
        <Button text={'Categories'} />
        <Button text={'Theme'} />
        <Button text={'Difficulty'} />
        <Button text={'Track Time?'} />
        <Link to="/game">
          <Button text={'Confirm'} />
        </Link>
      </div>
    </body>
  );
};

export default Options;
