# [Peek 'N' Pair]

Created by King McLeod and Tyreese Wray.

## 🚀 Mission statement

Our application, Peek 'N' Pair is for problem-solving/strategy game enthusiasts. It allows users to play a fun memory game with different themes and difficulties.

## API & React Router

This application will use the Dog, Rick and Morty, and Open Trivia Database API's. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: [Dog API](https://dog.ceo/dog-api/documentation/)
- https://dog.ceo/api/breeds/image/random/{NUMBER}
  - This will fetch an array of dog images
  - We will use the `message`

- Link to API documentation: [Rick and Morty](https://rickandmortyapi.com/documentation)
- https://rickandmortyapi.com/api/character/{NUMBER}
  - This will fetch a single character object based on number input
  - We will use `id`, `name`, `species`, and `image`
- https://rickandmortyapi.com/api/character/[{NUMBER1},{NUMBER2}]  
  - This will fetch an array of character objects based on the input of numbers
  - For each character, we will use `id`, `name`, `species`, and `image`

- Link to API documentation: [Open Trivia Database](https://opentdb.com/api_config.php)
- https://opentdb.com/api.php?amount={NUMBER}
  - This will fetch an object with a nested `results` array of a question or quetions based on number input
  - We will use all the values in the `results` array: `type`, `difficulty`, `category`, `question`, `correct_answer` and `incorrect_answers`
- https://opentdb.com/api.php?amount={NUMBER}&difficulty={OPTION}
  - This will fetch an object with a nested `results` array of a question or questions based on number and difficulty input
  - We will use all the values in the `results` array: `type`, `difficulty`, `category`, `question`, `correct_answer` and `incorrect_answers`
- https://opentdb.com/api.php?amount={NUMBER}&category={NUMBER}&difficulty={OPTION}
  - This will fetch an object with a nested `results` array of a question or questions based on number category, and difficulty input
  - We will use all the values in the `results` array: `type`, `difficulty`, `category`, `question`, `correct_answer` and `incorrect_answers`

**Example:**
- https://api.artic.edu/api/v1/artworks
  - This will fetch an array of artwork objects
  - For each artwork, I want the `id`, `title`, and `image_id`
- https://api.artic.edu/api/v1/artworks/{id}
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin` and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/example` page, users can...
* On the `/example` page, users can...
* On the `/example` page, users can...

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to...
* Users will be able to...
* Users will be able to...

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 2**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 3** (MVP due by the end of the day)
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 4**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

**Day 5**
- [ ] Ticket description and due date
- [ ] Ticket description and due date
- [ ] Ticket description and due date

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
