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
  - This will fetch an object with a nested `results` array of a question or questions based on number input
  - We will use all the values in the `results` array: `type`, `difficulty`, `category`, `question`, `correct_answer` and `incorrect_answers`
- https://opentdb.com/api.php?amount={NUMBER}&difficulty={OPTION}
  - This will fetch an object with a nested `results` array of a question or questions based on number and difficulty input
  - We will use all the values in the `results` array: `type`, `difficulty`, `category`, `question`, `correct_answer` and `incorrect_answers`
- https://opentdb.com/api.php?amount={NUMBER}&category={NUMBER}&difficulty={OPTION}
  - This will fetch an object with a nested `results` array of a question or questions based on number category and difficulty input
  - We will use all the values in the `results` array: `type`, `difficulty`, `category`, `question`, `correct_answer` and `incorrect_answers`

**Example:**
- https://api.artic.edu/api/v1/artworks
  - This will fetch an array of artwork objects
  - For each artwork, I want the `id`, `title`, and `image_id`
- https://api.artic.edu/api/v1/artworks/{id}
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin`, and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

* On the `/startup` page, users can click the play button, which will lead them to the `/main` page, view their best times and rules, and change the site theme from light -> dark mode (carries to every page).
* On the `/options` page, users can choose a theme from a list of categories and set a difficulty level.
* On the `/game` page, users can see the cards loaded onto the page for them to interact with and match and a timer to track their best time.
* On the `/game` page, if out of lives, users can answer a trivia question to regain a life and continue playing.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to select/deselect whether they want to track their time in `/options` page
 
* Users can select a difficulty that determines whether joker tiles are placed, increasing the likelihood of failure. (If joker tiles are clicked, a life is immediately deducted)

* Users will be able to save their rankings to a global leaderboard through a database system.

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

**Day 1: Project Setup & API Integration**
- [ ] Initialize React project and install necessary dependencies 
- [ ] Set up API fetching functions to get data from our endpoints
- [ ] Test API calls to ensure proper data retrieval
- [ ] Set up basic project structure (components, pages, assets)
- [ ] Create JSON files for other categories
- [ ] Implement basic navigation using React Router

**Day 2: UI Layout & Game Options**
- [ ] Implement the /startup page with a play button, best times display, rules section, and theme toggle (light/dark mode)
- [ ] Implement the /options page, allowing users to choose a theme (dogs, Rick & Morty) and a difficulty level
- [ ] Store selected options in state or context
- [ ] Start structuring the /game page with a card grid layout.
- [ ] Add minimal styling to each page fonts, background, etc.

**Day 3: Game Logic & Matching System** (MVP due by the end of the day)
- [ ] Implement the logic for flipping cards and checking for matches.
- [ ] Track flipped cards, matched pairs, and game completion state.
- [ ] Implement a system to deduct lives when a mismatch occurs.
- [ ] Display the number of remaining lives visually.
- [ ] Fetch trivia questions when lives reach zero and allow users to answer to regain a life.
- [ ] Complete the design of the main and options page
- [ ] Work on the structure of the main page(tiles and timer)


**Day 4: Advanced Features & Enhancements**
- [ ] Implement animations for flipping cards, matching effects, and transitions
- [ ] Implement a timer that tracks and stores the best time locally
- [ ] Add Joker Tiles as an optional difficulty modifier that instantly removes a life if clicked
- [ ] Implement proper API calls based on the selected game theme
- [ ] Implement a game-over screen with restart and return-home options

**Day 5: UI Polish & Testing**
- [ ] Implement + Refine styling and improve overall UI/UX
- [ ] Ensure mobile responsiveness and accessibility improvements
- [ ] Implement local storage for saving best times and preferences
- [ ] Optimize API requests by preloading images
- [ ] Conduct a full playtest to identify and fix major bugs

**Day 6: Debugging & Stretch Goals**
- [ ] Implement a global leaderboard (if time permits) using local storage or a simple backend
- [ ] Add sound effects and additional animations for a more engaging experience
- [ ] Improve accessibility with ARIA attributes
- [ ] Debug UI inconsistencies and optimize performance

**Day 7: Deployment and Final Touches**
- [ ] Prepare the app for deployment (GitHub Pages)
- [ ] Optimize the production build for performance
- [ ] Conduct final round of testing and code cleanup

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

[Wireframe for page 1]

[Wireframe for page 2]
