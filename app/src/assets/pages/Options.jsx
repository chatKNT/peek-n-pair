/** @format */

import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';

const Options = () => {
  return (
    <body>
      <Button />
      <Button text={'Dark'} />
      <div className="page-backdrop">
        <div className="options-preview"></div>
        <Button text={'Categories'} />
        <Button text={'Theme'} />
        <Button text={'Difficulty'} />
        <Button text={'Track Time?'} />
      </div>
    </body>
  );
};

export default Options;
