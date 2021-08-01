# WAR Card Game Instructions
WAR is a two-player, turn-based card game that uses a standard 52-card deck. We shuffle the cards and then split the deck in two (26 cards per player).
Then, both players flip the top card in their deck. Suit does not matter in this card game, only the value on the card.

In our version of WAR, Ace is the lowest value and King is the highest value. The player with the highest card wins the round and takes both cards that were played.

It gets interesting when BOTH player play a card with the SAME VALUE. Then, WAR is activated and each player plays 4 cards (3 face down and 1 face up).
The player whose face up card has the higher value takes all the cards played! 

The WIN CONDITION is clear: First player to get more than half the deck (27+ cards) wins the game!

PLAY NOW: [war card game](https://war-card-game-ten.vercel.app/home)

# Installation and Development
1) Fork and clone this repository to your local machine. 

2) Then, open the project folder in your terminal of choice and run npm install to install dependencies. 
`npm install`

3) Start the app:
`npm run start`

# GAMEPLAY
1. Getting Started:
  - After you log in, you will be directed to the Home page. This is where the game lives. To begin playing,
    simply click the "PLAY" button and the computer will shuffle the deck, split it in two, and play 1 card for you and your opponent
    - ![start screen](https://github.com/FoolyTD/war-card-game/blob/main/design/gameplay/SC-00.jpg)

2. Scoring:
  - Once the cards are played, press the "SCORE" button to reveal who won the round and allocate the cards to the appropriate player's card count. This will
      finish the round and display the "PLAY" button so you can play another card.
    - ![score round screen](https://github.com/FoolyTD/war-card-game/blob/main/design/gameplay/SC-01.jpg)
3. WAR: 
  - If BOTH players' cards have the SAME VALUE, WAR will be triggered. Click "WAR" to play 3 cards face down and 1 face up for you and the opponent. Then click "SCORE"
    (step 2 in the gamplay design) to evaluate the winner an award the cards to the winning player.
    - ![war screen](https://github.com/FoolyTD/war-card-game/blob/main/design/gameplay/SC-02.jpg)
4. WINNING:
  - The first player to get at least half of the deck (First player to 27+) wins the game! The game will be over and a "RESTART" button will give you the option to play again.
  -  ![game over screen](https://github.com/FoolyTD/war-card-game/blob/main/design/gameplay/SC-03.jpg)

# DEVELOPMENT & DEV TEAM
This application was developed with React.js, JavaScript, CSS, JSON API, Node.js, and FireBase. React, JavaScript, and CSS were used to build, style, and render the frontend. React hooks like useState, useEffect were used to hold state and render content on the page when the page mounted. Deck of Cards API ([Deck of Cards API](http://deckofcardsapi.com/)) was used to support the backend. It follows RESTful guidelines and returns JSON data. The responses from this API are how we created a unique deck for each game of WAR and tracked which cards had been played. Node.js and FireBase were used to manage user authentication. 

DEV TEAM:
1. Theodore Jones: https://www.linkedin.com/in/theodore-jones88/
2. Priscilla Kung: https://www.linkedin.com/in/priscillakung/
3. Travis Cariaga: https://www.linkedin.com/in/travis-cariaga/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# war-card-game
# war-landing-page
