import { useState, useEffect } from "react";
import './App.css';

function App() {
	const [deck, setDeck] = useState([]);
	const suits = ["spades", "diamonds", "clubs", "hearts"];
	const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	
	const getDeck = () => {
		const deck = [];
	
		for(let i = 0; i < suits.length; i++) {
			for(let j = 0; j < values.length; j++) {
				let card = {Value: values[j], Suit: suits[i]};
				deck.push(card);
			}
		}
		return deck;
	}
	
	const shuffle = (deck) => {
		// for 1000 turns
		// switch the values of two random cards
		for (let i = 0; i < 1000; i++) {
			let location1 = Math.floor((Math.random() * deck.length));
			let location2 = Math.floor((Math.random() * deck.length));
			let tmp = deck[location1];
	
			deck[location1] = deck[location2];
			deck[location2] = tmp;
		}
	}

	useEffect(()=> {
		const newDeck = getDeck(); // newDeck = [{a2},{a3},{a4}]
		shuffle(newDeck); // newDeck = [{a3},{a2},{a4}]
		setDeck(newDeck);
	}, [])
	
	// function renderDeck(deck) {
	//       document.getElementById("deck").innerHTML = "";
	
	// 	for(let i = 0; i < deck.length; i++) {
	// 		let card = document.createElement("div");
	// 		let value = document.createElement("div");
	// 		let suit = document.createElement("div");
	// 		card.className = "card";
	// 		value.className = "value";
	// 		suit.className = "suit " + deck[i].Suit;
	
	// 		value.innerHTML = deck[i].Value;
	// 		card.appendChild(value);
	// 		card.appendChild(suit);
	
	// 		document.getElementById("deck").appendChild(card);
	// 	}
	// }
	
	// const deck = getDeck();
	
	function showDeck(deck) {
	}
	console.log(deck);



  return (
    <div className="App">
      <div className="deck">
          <h1>A Deck of Cards</h1>
		  <div></div>
      </div>
    </div>
  );
}

export default App;