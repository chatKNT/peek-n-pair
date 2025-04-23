/** @format */

import { handleFetch } from './adapters/handleFetch.js';
import {
  getTriviaQuestions,
  getRickAndMortyPictures,
  getDogPictures,
} from './adapters/apiAdapters.js';

// const testHandleFetch = async () => {
//   const [data, error] = await handleFetch(
//     'https://dog.ceo/api/breeds/image/random'
//   );
//   if (error) {
//     return console.log(error);
//   }
//   console.log(data);
// };

// Test your adapter functions here
const testAdapters = async () => {
  // const [triviaTuple, triviaError] = await getTriviaQuestions(8, 'easy');
  const [ramTuple, ramError] = await getRickAndMortyPictures([
    4, 5, 8, 2, 67, 9,
  ]);
  // const [dogTuple, dogError] = await getDogPictures(8);

  // console.log(triviaTuple);
  console.log(ramTuple);
  // console.log(dogTuple);
};

// // testHandleFetch();
testAdapters();
