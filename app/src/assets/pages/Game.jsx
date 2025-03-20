/** @format */
import Button from "../components/Button.jsx";

const Game = () => {
  return (
    <div className="game-page-body">
      <div className="gamepage-btn-container">
        <button text={"Rules"} className={"game-page-controls"} />
        <button text={"Start Over"} className={"game-page-controls"} />
        <button text={"Dark Mode"} className={"game-page-controls"} />
      </div>
      <div className="page-backdrop">
        <div className="data-preview">Data Renders Here</div>
        <div className="grid-container">Cards renders here</div>
        <div>Time</div>
      </div>
      <img />
    </div>
  );
};

export default Game;
