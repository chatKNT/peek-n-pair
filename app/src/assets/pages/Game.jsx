/** @format */
import { Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useEffect, useState } from "react";

import cars from "../../local-themes/cars.json";
import food from "../../local-themes/food.json";
import paintings from "../../local-themes/painting.json";

// exported function that's going to rendered inside of App.jsx
const Game = () => {
  // Initialize with single set of paintings (not duplicated yet)
  const [cards, setCards] = useState([]);
  //tracks flipped cards
  //temporarily stores the id of the flipped cards
  const [flipped, setFlipped] = useState([]);
  //if two cards are matched then this state will update
  //this is storing the id's of the matched cards
  const [solved, setSolved] = useState([]);
  //gameboard, if two cards are clicked, then it will be disabled (lockboard)
  const [disabled, setDisabled] = useState(false);
  //if all cards are solved then the game will end
  //tracks the state of won
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
    /*change baseCards to test the cars/ painting/ food
    - cars.cars
    - food.food
    - paintings.paintings
    */

    const baseCards = cars.cars;
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

    //if the board is disabled...
    //Or flipped includes the id of the card that was clicked
    //Or Solved indludes the id...
    //Or two cards have already been clicked..

    //We return (do nothing...)
    if (
      disabled ||
      flipped.includes(id) ||
      solved.includes(id) ||
      flipped.length >= 2
    ) {
      return;
    }

    // Flip the card
    //add the id of the card to the flipped array
    const newFlipped = [...flipped, id];
    //update the state to be the new flipped
    setFlipped(newFlipped);

    // If two cards are flipped, check for match
    if (newFlipped.length === 2) {
      //lock the board
      setDisabled(true);

      //destructure the newFlipped array to access id's of the first and last card
      const [firstId, secondId] = newFlipped;
      //find the card that the id belongs to
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      // Check if the cards match (same name)
      if (firstCard.name === secondCard.name) {
        // Add to the array of solved pairs
        setSolved([...solved, firstId, secondId]);
        //empty the flipped array so that it can track the next pair
        setFlipped([]);
        //open the board so that cards can be clicked again
        setDisabled(false);
      } else {
        // No match - flip cards back after a delay of one second (1000(ms))
        setTimeout(() => {
          //empty the flipped array for the next pair
          setFlipped([]);
          //open the board for selections
          setDisabled(false);
        }, 1000);
      }
    }
  };

  return (
    <div>
      <div className="game-page-body">
        <div className="gamepage-btn-container fixed-top">
          <Link to="/howto">
            <Button text={"Rules"} className={"game-page-controls"} />
          </Link>
          <Link to="/options">
            <Button text={"Start Over"} className={"game-page-controls"} />
          </Link>
          <Button text={"Dark Mode"} className={"game-page-controls"} />
        </div>

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

        {/* Win message */}
        {/* Syntax: when won is set to true, this div will pop up  */}
        {won && (
          <div className="win-div">
            <h2 className="win-h2">You won!</h2>
            <button className="play-again-btn" onClick={shuffleCards}>
              Play Again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
