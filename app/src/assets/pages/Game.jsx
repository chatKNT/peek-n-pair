/** @format */
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button.jsx';
import { useEffect, useState } from 'react';
import { fetchGameImages } from '../../adapters/gameLogic.js'; // Import your game logic function
import ThemeToggle from '../components/ThemeToggle.jsx';

const Game = ({ userSelections }) => {
  const location = useLocation();
  // Fallback to location state if props are empty (e.g., page refresh)
  const finalSelections = userSelections || location.state;

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Initialize game based on user selections
  useEffect(() => {
    const initializeGame = async () => {
      try {
        setIsLoading(true);

        // Fetch images based on user selections
        const images = await fetchGameImages(
          finalSelections.theme,
          finalSelections.difficulty
        );

        // Create card pairs and shuffle
        // When creating card pairs
        const baseCards = images.map((item, index) => ({
          id: index,
          image: item.image,
          name: item.name,
        }));

        const pairedCards = [...baseCards, ...baseCards].map((card, index) => ({
          ...card,
          id: index,
        }));

        setCards(shuffleArray(pairedCards));
        setFlipped([]);
        setSolved([]);
        setWon(false);
        setDisabled(false);
      } catch (error) {
        console.error('Error initializing game:', error);
        // Handle error state here
      } finally {
        setIsLoading(false);
      }
    };

    if (finalSelections) {
      initializeGame();
    }
  }, [finalSelections]);

  // Check if game is won
  useEffect(() => {
    if (cards.length > 0 && solved.length === cards.length) {
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

  const handlePlayAgain = () => {
    // Reshuffle existing cards
    setCards(shuffleArray([...cards]));
    setFlipped([]);
    setSolved([]);
    setWon(false);
    setDisabled(false);
  };

  if (isLoading) {
    return <div className="loading">Loading game...</div>;
  }

  return (
    <div className="page-background">
      <div className="game-page-body">
        <div className="gamepage-btn-container fixed-top">
          <Button text={'Rules'} className={'game-page-controls'} />
          <Link to="/options">
            <Button text={'Start Over'} className={'game-page-controls'} />
          </Link>
          <ThemeToggle />
        </div>
        <div className="game-page-backdrop">
          <div className="grid-container">
            {cards.map((item) => {
              const isFlipped =
                flipped.includes(item.id) || solved.includes(item.id);
              return (
                <div
                  className={`card-image ${isFlipped ? 'flipped' : ''}`}
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
        {/* Updated Play Again button */}
        {won && (
          <div className="win-div">
            <h2 className="win-h2">You won!</h2>
            <button className="play-again-btn" onClick={handlePlayAgain}>
              Play Again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
