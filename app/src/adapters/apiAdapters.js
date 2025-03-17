/** @format */

import { handleFetch } from './handleFetch.js';

const ramBaseUrl = `https://rickandmortyapi.com/api`;

export const getRickAndMortyPictures = async (characterIds = []) => {
  let ramEP = `${ramBaseUrl}/character/`;

  if (characterIds.length) {
    ramEP += `${characterIds.join(',')}`;
    const [data, error] = await handleFetch(ramEP);

    return [data, error];
  } else {
    ramEP += `${characterIds}`;
    const [data, error] = await handleFetch(ramEP);
    return [data.results, error];
  }
};

export const getTriviaQuestions = async (
  amount = 1,
  difficulty = '',
  category = ''
) => {
  const triviaEP = `https://opentdb.com/api.php?amount=${amount}`;

  if (difficulty) triviaEP += `&difficulty=${difficulty}`;
  if (category) triviaEP += `&category=${category}`;

  const [data, error] = await handleFetch(triviaEP);

  return [data.results, error];
};
