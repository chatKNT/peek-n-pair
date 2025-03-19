/** @format */
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

const StartUp = () => {
  return (
    <div>
      <Button text={'Dark'} className={'lightdark-button'} />
      <div className="page-backdrop">
        <div className="startup-buttons">
          <Button text={'Best Times'} />
          <Link to="/options">
            <button className="startup-play-button">Play</button>
          </Link>
          <Button text={'Rules'} />
        </div>
      </div>
    </div>
  );
};

export default StartUp;
