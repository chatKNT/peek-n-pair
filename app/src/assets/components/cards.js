import paintingsData from "../../local-themes/painting.json" assert { type: "json" };

// console.log(paintingsData);
const paintings = paintingsData.paintings; // Make sure to access the paintings array

//array of the links of paintings
const cardImages = paintings.map((painting) => {
  return { path: painting.image }; // Create an object with the path property
});

export default cardImages;
