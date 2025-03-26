/** @format */
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import cardImages from "../components/Cards.js";
import { useState } from "react";

// const Game = () => {
//   const [cards, setCards] = useState([]);

//   const shuffleCards = () => {
//     const shuffledCards = [...cardImages, ...cardImages]
//       .sort(() => Math.random() - 0.5)
//       .map((card) => ({ ...card, id: Math.floor(Math.random() * 16) }));

//     setCards(shuffledCards);
//   };
//   console.log(cards);

//   return (
//     <div className="game-page-body">
//       <div className="gamepage-btn-container fixed-top">
//         <Button text={"Rules"} className={"game-page-controls"} />
//         <Link to="/options">
//           <Button text={"Start Over"} className={"game-page-controls"} />
//         </Link>
//         <Button text={"Dark Mode"} className={"game-page-controls"} />
//       </div>
//       <div className="game-page-backdrop">
//         <div className="data-preview">
//           <Button
//             text={"Shuffle"}
//             className={"shuffle-button"}
//             onClick={shuffleCards}
//           />
//         </div>
//         <div className="grid-container">Cards renders here</div>
//         <div>Time</div>
//       </div>
//       <img />
//     </div>
//   );
// };

const Game = () => {
  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 16) }));

    setCards(shuffledCards);
  };
  console.log(cards);

  return (
    <div className="game-page-body">
      <div className="gamepage-btn-container fixed-top">
        <Button text={"Rules"} className={"game-page-controls"} />
        <Link to="/options">
          <Button text={"Start Over"} className={"game-page-controls"} />
        </Link>
        <Button text={"Dark Mode"} className={"game-page-controls"} />
      </div>
      <div className="game-page-backdrop">
        <div className="data-preview">
          <Button
            text={"Shuffle"}
            className={"shuffle-button"}
            onClick={shuffleCards}
          />
        </div>
        <div className="grid-container">Cards renders here</div>
        <div>Time</div>
      </div>
      <img />
    </div>
  );
};

export default Game;
