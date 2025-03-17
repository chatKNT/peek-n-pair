/** @format */

import { handleFetch } from './handleFetch.js';

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
