/** @format */

import {
  getDogPictures,
  getRickAndMortyPictures,
  getTriviaQuestions,
} from "./apiAdapters";

// TEMP: fetch game images based on users options from Options.jsx Page
export const fetchGameImages = async (category, theme) => {
  let images = [];

  if (category === "Animals" && theme === "Dogs") {
    const [data, error] = await getDogPictures(6);
    if (!error) images = data.message;
  } else if (category === "Movies/Shows" && theme === "Rick and Morty") {
    const [data, error] = await getRickAndMortyPictures([1, 2, 3, 4, 5, 6]);
    if (!error) images = data.map((char) => char.image);
  } else if (category === "Miscellaneous") {
    // Example: Fetch Trivia images
    const [data, error] = await getTriviaQuestions(6, "", "");
    if (!error) images = data.map((item) => item.image);
  }
  return images;
};

export const prepareGameBoard = (images) => {
  let cards = [...images, ...images]; // Duplicate images
  cards = shuffleArray(cards); // Shuffle the array
  return createMatrix(cards, 4, 3); // Convert into 4x3 matrix
};

// Fisher-Yates Shuffle Algorithm
export const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Convert 1D Array into a 4x3 Matrix
export const createMatrix = (arr, rows, cols) => {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(arr.slice(i * cols, i * cols + cols));
  }
  return matrix;
};

export const handleCardClick = (
  index,
  selectedCards,
  setSelectedCards,
  setBoardLocked
) => {
  if (selectedCards.length === 2 || selectedCards.includes(index)) return;

  const newSelectedCards = [...selectedCards, index];

  if (newSelectedCards.length === 2) {
    setBoardLocked(true); // Lock the board
    setTimeout(() => {
      setSelectedCards([]);
      setBoardLocked(false);
    }, 1000); // Check after 1 second
  }

  setSelectedCards(newSelectedCards);
};

export const checkMatch = (selectedCards, board, setMatchedCards) => {
  if (selectedCards.length === 2) {
    const [first, second] = selectedCards;
    if (board.flat()[first] === board.flat()[second]) {
      setMatchedCards((prev) => [...prev, first, second]);
    }
  }
};
