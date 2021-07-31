// importing use state to hold our variables critical to render, use effect to load state when page mounts
import { useState, useEffect } from "react";
// this function takes care of the work comparing the cards to score who won
import scoreRound from "./scoreRound";
// this is the style sheet
import './App.css';

function App() {
	/* 
	this deck variable is going to hold a string which is the deck id that returns from
		our fetch call to our api "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" 
	*/
	const [deck, setDeck] = useState([]);
	// this will hold an object that contains four key/value pairs => // {value, image, suit, code}
	const [playerCard, setPlayerCard] = useState([]);
	// this will hold an object that contains four key/value pairs => // {value, image, suit, code}
	const [opponentCard, setOpponentCard] = useState([]);
	// boolean value to determine when cards have been played and are ready for scoring
	const [roundOver, setRoundOver] = useState(false);
	// this will hold the value of who has won the current round
	const [score, setScore] = useState(null);
	
	// when the page mounts, make the fetch call and set the deck id
	useEffect(()=> {
		fetch("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
		.then((response)=>response.json())
		.then((payload)=>setDeck(payload.deck_id))
	}, [])
	
	// this function wil run when the play card button is clicked
	// it makes a fetch call to draw two cards from our deck at random
	// then it sets one card as the players and the other as the opponents
	// if also sets the round to over once cards have been set
	const playCards = async () => {
		setScore(null);
		await fetch(`http://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
		.then((response)=>response.json())
		.then((payload)=> {
			setPlayerCard(payload.cards[0])
			setOpponentCard(payload.cards[1])
		})
		.then(setRoundOver(true))		
	}
	

	const resolveRound = () => {
		setScore(scoreRound(playerCard.value, opponentCard.value))
		setRoundOver(false);
	}

  return (
    <div className="App">
		<div className="title">
          <h1 className="big-text">War</h1>
		  <p></p>
		</div>
		  <div>
			  <div className="table-container">
				  <div className="table">
						  <p className="card-text">Your Card</p>
					  <div className="card">
					  	<img src={roundOver && opponentCard.image}/>
					  </div>
						  <p className="card-text">Opponent Card</p>
					  <div className="card">
				  		<img src={roundOver && playerCard.image}/>
					  </div>
				  </div>
			  </div>
			  <div>
				</div>
				<div className="btn-container">
			  <button className="btn" onClick={roundOver ? (resolveRound) : (playCards)}>{roundOver ? "Score" : "Play Card"}</button>
				</div>
		  </div>
    </div>
  );
}

export default App;