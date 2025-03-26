/** @format */
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import paintingData from "./localFetches.js";
import { useEffect, useState } from "react";

// exported function that's going to rendered inside of App.jsx
const Game = () => {
  // Initialize with single set of paintings (not duplicated yet)
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
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
    const baseCards = paintingData();
    // Create pairs of 8 and give them an id
    const pairedCards = [...baseCards, ...baseCards].map((card, index) => ({
      ...card,
      id: index, // id for each card
    }));

    const shuffledCards = shuffleArray(pairedCards);

    // Update all relevant states
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
              <div className="card-image" key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
