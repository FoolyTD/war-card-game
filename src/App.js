import './App.css';

const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getDeck() {
	const deck = new Array();

	for(let i = 0; i < suits.length; i++) {
		for(let j = 0; j < values.length; j++) {
			let card = {Value: values[j], Suit: suits[i]};
			deck.push(card);
		}
	}

	return deck;
}

function shuffle(deck) {
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

function renderDeck(deck) {
      document.getElementById("deck").innerHTML = "";

	for(let i = 0; i < deck.length; i++) {
		let card = document.createElement("div");
		let value = document.createElement("div");
		let suit = document.createElement("div");
		card.className = "card";
		value.className = "value";
		suit.className = "suit " + deck[i].Suit;

		value.innerHTML = deck[i].Value;
		card.appendChild(value);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(card);
	}
}



function App() {
  return (
    <div className="App">
    <html>
    <body>
      <div class="deck">
          <h1>A Deck of Cards</h1>

          <a href="javascript:void(0)" class="btn" onclick="shuffle()">Shuffle</a>
          <div id="deck"></div>
      </div>
    </body>
    </html>
    </div>
  );
}

export default App;
