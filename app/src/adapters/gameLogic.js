/** @format */

import {
  getDogPictures,
  getRickAndMortyPictures,
  getMaxRickAndMortyCharacters,
  getTriviaQuestions,
} from './apiAdapters';

import cars from '../local-themes/cars.json';
import food from '../local-themes/food.json';
import paintings from '../local-themes/painting.json';

// TEMP: fetch game images based on users options from Options.jsx Page
export const fetchGameImages = async (theme, difficulty) => {
  let images = [];
  const difficultyAmount = difficulty === 'Hard' ? 8 : 6;

  try {
    if (theme === 'Dogs') {
      const [data] = await getDogPictures(difficultyAmount);
      // Create objects with both image and name properties
      images = data.message.map((url, index) => ({
        image: url,
        name: `Dog ${index + 1}`, // Generate unique names for matching
      }));
    } else if (theme === 'Rick and Morty') {
      const ramChars = new Set();
      const [numOfChars] = await getMaxRickAndMortyCharacters();

      // Generate unique random character IDs
      while (ramChars.size < difficultyAmount) {
        const randomChar = Math.floor(Math.random() * numOfChars) + 1;
        ramChars.add(randomChar);
      }

      const [data] = await getRickAndMortyPictures([...ramChars]);
      // Extract both image and name from characters
      images = data.map((char) => ({
        image: char.image,
        name: char.name,
      }));
    } else if (theme === 'Art') {
      return paintings.paintings;
    } else if (theme === 'Cars') {
      return cars.cars;
    } else if (theme === 'Foods') {
      return food.food;
    }

    return images;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error; // Rethrow to handle in calling function
  }
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
