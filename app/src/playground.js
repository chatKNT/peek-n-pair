/** @format */

import { handleFetch } from './adapters/handleFetch.js';
import {
  getTriviaQuestions,
  getRickAndMortyPictures,
} from './adapters/apiAdapters.js';

const testHandleFetch = async () => {
  const [data, error] = await handleFetch(
    'https://dog.ceo/api/breeds/image/random'
  );
  if (error) {
    return console.log(error);
  }
  console.log(data);
};

// Test your adapter functions here
const testAdapters = async () => {
  const triviaTuple = await getTriviaQuestions();
  const ramTuple = await getRickAndMortyPictures([1, 2, 3, 4, 5]);

  console.log(ramTuple);
};

// testHandleFetch();
testAdapters();
