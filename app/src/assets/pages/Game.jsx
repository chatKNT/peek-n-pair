/** @format */
import { Link } from 'react-router-dom';
import Button from '../components/Button.jsx';

// exported function that's going to rendered inside of App.jsx
const Game = () => {
  return (
    <div className="game-page-body">
      <div className="gamepage-btn-container fixed-top">
        <Button text={'Rules'} className={'game-page-controls'} />
        <Link to="/options">
          <Button text={'Start Over'} className={'game-page-controls'} />
        </Link>
        <Button text={'Dark Mode'} className={'game-page-controls'} />
      </div>
      <div className="game-page-backdrop">
        <div className="data-preview">Data Renders Here</div>
        <div className="grid-container">Cards renders here</div>
        <div>Time</div>
      </div>
      <img />
    </div>
  );
};

export default Game;
