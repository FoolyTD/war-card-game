// importing use state to hold our vaiables critical to render, use effect to load state when page mounts
import { useState, useEffect } from "react";
// this function takes care of the work comparing the cards to score who won
import scoreRound from "./scoreRound";
// this is the style sheet
import "../App.css";

export default function Home() {
  /* 
	  this deck variable is going to hold a string which is the deck id that returns from
		our fetch call to our api "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" 
	*/
  const [deck, setDeck] = useState([]);
  // this will hold an object that contains four key/value pairs => // {value, image, suit, code}
  const [playerCard, setPlayerCard] = useState(null);
  // this will hold an object that contains four key/value pairs => // {value, image, suit, code}
  const [opponentCard, setOpponentCard] = useState(null);
  // boolean value to determine when cards have been played and are ready for scoring
  const [roundOver, setRoundOver] = useState(false);
  // this will hold the value of who has won the current round
  const [score, setScore] = useState(null);
  // this state hold the player's score
  const [playerScore, setPlayerScore] = useState(0);
  // this state hold the opponent's score
  const [opponentScore, setOpponentScore] = useState(0);
  // this variable is a boolean set to active when both players have the same card
  const [warActive, setWarActive] = useState(false);
  // boolean that is set to true once win condition is met (player or opponent score > 32)
  const [gameOver, setGameOver] = useState(false);
  // boolean that is set to true once the game begins
  const [gameStart, setGameStart] = useState(false);

  // when the page mounts, make the fetch call and set the deck id
  useEffect(() => {
    fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => response.json())
      .then((payload) => setDeck(payload.deck_id));
  }, [gameOver]);

  // this function wil run when the play card button is clicked
  // it makes a fetch call to draw two cards from our deck at random
  // then it sets one card as the players and the other as the opponents
  // if also sets the round to over once cards have been set
  const playCards = async () => {
    if(playerScore > 26 || opponentScore > 26) {
      setGameOver(true);
      return null;
    }
    if (gameStart === false) {
      setGameStart(true);
    }
    setScore(null);
    await fetch(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
      .then((response) => response.json())
      .then((payload) => {
        setPlayerCard(payload.cards[0]);
        setOpponentCard(payload.cards[1]);
      })
      .then(setRoundOver(true));
  };

  // this function run once the score button is clicked
  // and will compare the player card and opponent card
  // and set roundOver to false (reactivating Play button)
  const resolveRound = async () => {
    // I made this an asyncronous function because I wanted the game to wait for
    //    the state to update
    await setScore(scoreRound(playerCard.value, opponentCard.value));

    // Because the state was not updating I in itialize value to hold the outcome
    // of the scoreRound function (1, -1, or 0), and use that value for scoring
    const value = scoreRound(playerCard.value, opponentCard.value)
    
    // If was is active, add 8 cards to player count instead of 2
    if (warActive) {
      setWarActive(false);
      if (value > 0 ) {
        setPlayerScore((currentScore) => currentScore + 8);
        if(playerScore > 26 || opponentScore > 26) {
          setGameOver(true);
        }
      } else if (value < 0) {
        setOpponentScore((currentScore) => currentScore + 8);
        if(playerScore > 26 || opponentScore > 26) {
          setGameOver(true);
        }
      }
    }
    if (value > 0 ) {
      setPlayerScore((currentScore) => currentScore + 2);
      if(playerScore > 26 || opponentScore > 26) {
        setGameOver(true);
      }
    } else if (value < 0) {
      setOpponentScore((currentScore) => currentScore + 2);
      if(playerScore > 26 || opponentScore > 26) {
        setGameOver(true);
      }
    }
    setRoundOver(false);
  };

  // this will run a fetch call to draw 8 cards, then set playerCard to
  // the 7th item in the return array and opponentCard to 8th item in the array
  const handleWar = async () => {
    setWarActive(true);
    setScore(null);
    await fetch(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=8`)
      .then((response) => response.json())
      .then((payload) => {
        setPlayerCard(payload.cards[6]);
        setOpponentCard(payload.cards[7]);
      })
      .then(setRoundOver(true));
  };

  // This function is attached to the restart button once the win condition is met,
  // it will rest all variables to their original state, refetch a deck and start the
  // game over again
  const handleRestart = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div>
        <section className="table-container">
          <div className="card-display">
            <div className="card-container">
              <div className="player-text">
                <p className="card-text">Your Card</p>
              </div>
              <div className="card">
                {gameOver ? "" : opponentCard && playerCard && (
                  <img src={opponentCard && playerCard.image} alt="" />
                )}
              </div>
            </div>
            <div className="card-container">
              <div className="title">
                {score === 0 ? "" : <h1 className="big-text">War</h1>}
              </div>
              {/* If the game over variable is true (win condition is met), the text GAME OVER will be displayed */}
              {gameOver ? <p className="outcome-text">GAME OVER</p> : <p className="outcome-text">
                {!gameStart ? "First to 28 wins!" : score
                  ? Number(score) === 0
                    ? "WAR"
                    : score > 0
                    ? "Winner Chicken Dinner"
                    : "You Lose"
                  : ""}
              </p>}
            </div>
            <div className="card-container">
              <div className="player-text">
                <p className="card-text">Opponent's Card</p>
              </div>
              <div className="card">
                {gameOver? "" : playerCard && opponentCard && (
                  <img src={playerCard && opponentCard.image} alt="" />
                )}
              </div>
            </div>
          </div>
          <div className="btn-container">
            <div className="score-container">
            <div className="score-text">
                <h1 className="card-text">Card Count</h1>
              </div>
              <div className="score-count">
              <p className="big-text">{playerScore}</p>
              </div>
            </div>
            <div className="steel-texture">
              {/* If both cards are the same when you press the score button, it will trigger a war
                  The button will say WAR and handleWar function will be called when clicked
              */}
              {score === 0 ? (
                <h1 onClick={handleWar} className="big-text war-text">
                  War
                </h1>
              ) : (gameOver ? <button onClick={handleRestart} className="btn game-over">Restart</button> :
                <button
                  className="btn"
                  onClick={roundOver ? resolveRound : playCards}
                >
                  {roundOver ? "Score" : "Play"}
                </button>
              )}
            </div>
            <div className="score-container">
              <div className="score-text">
                <h1 className="card-text">Card Count</h1>
              </div>
              <div className="score-count">
              <p className="big-text">{opponentScore}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
