/** @format */
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import paintingData from "./localFetches.js";
import { useEffect, useState } from "react";

import cars from "../../local-themes/cars.json";
import food from "../../local-themes/food.json";
import painting from "../../local-themes/painting.json";

// exported function that's going to rendered inside of App.jsx
const Game = () => {
  // Initialize with single set of paintings (not duplicated yet)
  const [cards, setCards] = useState([]);
  //tracks flipped cards
  const [flipped, setFlipped] = useState([]);
  //if two cards are matched then this state will update
  const [solved, setSolved] = useState([]);
  //gameboard, if two cards are clicked, then it will be disabled
  const [disabled, setDisabled] = useState(false);
  //if all cards are solved then the game will end
  const [won, setWon] = useState(false);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const shuffleCards = () => {
    // Get the 8 objects
    const baseCards = food.food;
    // Create pairs of 8 and give them an id
    const pairedCards = [...baseCards, ...baseCards].map((card, index) => ({
      ...card,
      id: index, // id for each card
    }));

    const shuffledCards = shuffleArray(pairedCards);

    // Update all relevant states when the game restarts
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  // // Debugging effect
  // useEffect(() => {
  //   console.log("Current cards:", cards.length, cards);
  // }, [cards]);

  const handleClick = () => {};

  return (
    <div>
      <div className="game-page-body">
        <div className="gamepage-btn-container fixed-top">
          <Button text={"Rules"} className={"game-page-controls"} />
          <Link to="/options">
            <Button text={"Start Over"} className={"game-page-controls"} />
          </Link>
          <Button text={"Dark Mode"} className={"game-page-controls"} />
        </div>
        <div className="game-page-backdrop">
          <div className="grid-container">
            {cards.map((item) => (
              <div className="card-image" key={item.id} onClick={handleClick}>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
