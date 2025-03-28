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

  // Check if game is won
  useEffect(() => {
    //cards.length * 2 is cards(array of 8 objects) * 2 = 16
    //solved is a pair of cards that has been matched so the total length of all solved should be 8
    if (solved.length > 0 && solved.length === (cards.length * 2) / 2) {
      setWon(true);
    }
  }, [solved, cards]);

  const handleClick = (id) => {
    // Don't allow clicks if:
    // - Game is disabled (waiting for flip animation)
    // - Card is already flipped
    // - Card is already solved
    // - User already flipped 2 cards
    if (
      disabled ||
      flipped.includes(id) ||
      solved.includes(id) ||
      flipped.length >= 2
    ) {
      return;
    }

    // Flip the card
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    // If two cards are flipped, check for match
    if (newFlipped.length === 2) {
      setDisabled(true);

      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      // Check if the cards match (same name)
      if (firstCard.name === secondCard.name) {
        // Add to solved pairs
        setSolved([...solved, firstId, secondId]);
        setFlipped([]);
        setDisabled(false);
      } else {
        // No match - flip cards back after delay
        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

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

        {/* Win message */}
        {won && (
          <div className="win-message">
            <h2>Congratulations! You won!</h2>
            <button onClick={shuffleCards}>Play Again</button>
          </div>
        )}

        <div className="game-page-backdrop">
          <div className="grid-container">
            {cards.map((item) => {
              const isFlipped =
                flipped.includes(item.id) || solved.includes(item.id);
              return (
                <div
                  className={`card-image ${isFlipped ? "flipped" : ""}`}
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                >
                  {/* Back of card (cover) */}
                  <div className="card-back">
                    <img
                      src="https://pub-static.fotor.com/assets/bg/247d99f6-6217-4573-8ade-ce8043170fcd.jpg"
                      alt="Card Back"
                    />
                  </div>

                  {/* Front of card (content) */}
                  <div className="card-front">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
