/** @format */

// importing helper function for fetching
import { handleFetch } from './handleFetch.js';

// base urls for fetches
const dogBaseUrl = `https://dog.ceo/api`;
const ramBaseUrl = `https://rickandmortyapi.com/api`;

export const getDogPictures = async (amount = 1) => {
  let dogEP = `${dogBaseUrl}/breeds/image/random/${amount}`;

  const [data, error] = await handleFetch(dogEP);

  return [data, error];
};

export const getRickAndMortyPictures = async (characterIds = []) => {
  let ramEP = `${ramBaseUrl}/character/`;

  if (characterIds.length) {
    ramEP += `${characterIds.join(',')}`;
    const [data, error] = await handleFetch(ramEP);

    return [data, error];
  } else {
    const [data, error] = await handleFetch(ramEP);
    console.log(ramEP);
    return [data.results, error];
  }
};

export const getMaxRickAndMortyCharacters = async () => {
  let ramEP = `${ramBaseUrl}/character/`;

  const [data, error] = await handleFetch(ramEP);
  return [data.info.count, error];
};

export const getTriviaQuestions = async (
  amount = 1,
  difficulty = '',
  category = ''
) => {
  let triviaEP = `https://opentdb.com/api.php?amount=${amount}`;

  if (difficulty) triviaEP += `&difficulty=${difficulty}`;
  if (category) triviaEP += `&category=${category}`;

  const [data, error] = await handleFetch(triviaEP);

  return [data.results, error];
};
