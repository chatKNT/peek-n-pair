/** @format */

import {
  getDogPictures,
  getRickAndMortyPictures,
  getMaxRickAndMortyCharacters,
  getTriviaQuestions,
} from "./apiAdapters";

import cars from "../local-themes/cars.json";
import food from "../local-themes/food.json";
import paintings from "../local-themes/painting.json";

// TEMP: fetch game images based on users options from Options.jsx Page
export const fetchGameImages = async (theme, difficulty) => {
  let images = [];
  let difficultyAmount = 0;

  if (difficulty === "Hard") {
    difficultyAmount = 8;
  } else {
    difficultyAmount = 6;
  }

  if (theme === "Dogs") {
    const [data, error] = await getDogPictures(difficultyAmount);
    if (!error) images = data.message;
  } else if (theme === "Rick and Morty") {
    const ramChars = new Set();
    const [numOfChars, charError] = await getMaxRickAndMortyCharacters();

    // if there is no error, it will generate character id's for the API based on the difficulty (6 or 8)
    // and push it to the ramChars array
    if (!charError) {
      while (ramChars.size < difficultyAmount) {
        const randomChar = Math.floor(Math.random() * numOfChars) + 1;
        ramChars.add(randomChar);
      }
    }

    const [data, error] = await getRickAndMortyPictures([...ramChars]);
    if (!error) images = data.map((char) => char.image);
  } else if (theme === "Art") {
    // LOCAL FETCH TO painting.json
    return paintings.paintings;
  } else if (theme === "Cars") {
    // LOCAL FETCH TO cars.json
    return cars.cars;
  } else if (theme === "Foods") {
    // LOCAL FETCH TO food.json
    return food.food;
  }
  return images;
};

//THESE ARE THE OLD SET OF FUNCTIONALITIES

// export const prepareGameBoard = (images) => {
//   let cards = [...images, ...images]; // Duplicate images
//   cards = shuffleArray(cards); // Shuffle the array
//   return createMatrix(cards, 3, 4); // Convert into 3x4 matrix
// };

// // Fisher-Yates Shuffle Algorithm
// export const shuffleArray = (array) => {
//   let shuffled = array.slice();
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
//   }
//   return shuffled;
// };

// // Convert 1D Array into a 4x3 Matrix
// export const createMatrix = (arr, rows, cols) => {
//   let matrix = [];
//   for (let i = 0; i < rows; i++) {
//     matrix.push(arr.slice(i * cols, i * cols + cols));
//   }
//   return matrix;
// };

// export const handleCardClick = (
//   index,
//   selectedCards,
//   setSelectedCards,
//   setBoardLocked
// ) => {
//   if (selectedCards.length === 2 || selectedCards.includes(index)) return;

//   const newSelectedCards = [...selectedCards, index];

//   if (newSelectedCards.length === 2) {
//     setBoardLocked(true); // Lock the board
//     setTimeout(() => {
//       setSelectedCards([]);
//       setBoardLocked(false);
//     }, 1000); // Check after 1 second
//   }

//   setSelectedCards(newSelectedCards);
// };

// export const checkMatch = (selectedCards, board, setMatchedCards) => {
//   if (selectedCards.length === 2) {
//     const [first, second] = selectedCards;
//     if (board.flat()[first] === board.flat()[second]) {
//       setMatchedCards((prev) => [...prev, first, second]);
//     }
//   }
// };

//THIS IS THE FORMATTED FUNCTIONS FOR THE GAME.JSX DO NOT DELETE OR EDIT

//export & import
const shuffleCards = (data) => {
  // Get the 8 objects
  const baseCards = data;
  // Create pairs of 8 and give them an id
  const pairedCards = [...baseCards, ...baseCards].map((card, index) => ({
    ...card,
    id: index, // id for each card
  }));
};

//export & import
// Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

//move to the game.jsx
const setNewCards = (pairedCards) => {
  const shuffledCards = shuffleArray(pairedCards);

  setCards(shuffledCards);
  setFlipped([]);
  setSolved([]);
  setWon(false);
  setDisabled(false);
};

//IDEA OF WHAT TO DO..
/*
- Options page return an object of selections
- fetch game images accepts that options obj and fetches accordingly
- fetch game images return the images data for the selections
- game page functionality takes over...

*/
