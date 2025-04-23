/** @format */
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle.jsx';
import Button from '../components/Button.jsx';
import logo from '../../../public/peek-n-pair-logo.png';

const StartUp = () => {
  return (
    <div className="page-background">
      <ThemeToggle />
      <div className="page-backdrop">
        <img
          src={logo}
          alt="Peek and Pair Home logo"
          className="startup-logo"
        />
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
