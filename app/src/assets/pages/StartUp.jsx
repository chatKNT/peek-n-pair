/** @format */
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

const StartUp = () => {
  return (
    <div>
      <Button text={'DARK MODE'} className={'lightdark-button'} />
      <div className="page-backdrop">
        <div className="startup-buttons">
          <Link to="/best-times">
            <Button text={'Best Times'} className={'best-times-button'} />
          </Link>

          <Link to="/options">
            <button className="startup-play-button">Play</button>
          </Link>
          <Link to="/howto">
            <Button text={'How-To'} className={'howto-button'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartUp;
