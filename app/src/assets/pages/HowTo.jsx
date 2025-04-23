/** @format */
import { Link } from "react-router-dom";

const HowTo = () => {
  return (
    <div>
      <div class="howTo-Container">
        <h1>How to Play</h1>
        <p>
          The goal of the game is find all the matching pairs of cards. You can
          only flip two cards at a time. If they match, they will stay face up.
          if they don't match, they will flip back over after a short delay.
        </p>
        <p>
          <strong>Tip:</strong> Try to remember the positions of the cards
          you've flipped to improve your chances of finding matches!
        </p>
        <p>Good luck and have fun!</p>
        <Link to="/">
          <button className="how-to-btn">Home</button>
        </Link>
        <Link to="/options">
          <button className="how-to-btn">Play</button>
        </Link>
      </div>
    </div>
  );
};

export default HowTo;
