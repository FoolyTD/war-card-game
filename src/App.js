// importing use state to hold our variables critical to render, use effect to load state when page mounts
import { useState, useEffect } from "react";
// Router will allow us to have multiple navigation pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Home component contains the game screen
import Home from "./home/home";
// Login component has code for login screen
// Import the shop component from "./shop/shop.js"
import Shop from "./shop/shop";
// import Login from "./login/login";
// Import the instructions component to put in the router
import Instructions from "./instructions/instructions";
// this is the style sheet
import "./App.css";
// import { auth } from "./firebase";

function App() {
	const [tableTexture, setTableTexture] = useState("table-container");
	// const [tableTextureArray,setTableTextureArray] = useState([ "table-container", "table-container-1"]);
// To keep track of the login status of the user, we need to use the onAuthStateChange to track the login status
	// const [user, setUser] = useState(null);

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged(userAuth => {
	// 		const user = {
	// 			uid: userAuth?.uid,
	// 			email: userAuth?.email
	// 		}

	// 		if (userAuth) {
	// 			console.log('userAuth', userAuth)
	// 			setUser(user);
	// 		} else {
	// 			setUser(null);
	// 		}
	// 	}) 
	// 	return unsubscribe;
	// }, []);

	// useEffect(() => {

	// },[])

	const handleChangeTableTexture = (texture) => {
		// console.log(tableTextureArray[number]);
		console.log("anything");
		setTableTexture(texture);
	};

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
		{/* {!user ? <Login /> : <Home />} */}
		<Home handleChangeTableTexture={handleChangeTableTexture} tableTexture={tableTexture} />
        </Route>
		<Route exact={true} path="/home">
			<Home handleChangeTableTexture={handleChangeTableTexture} tableTexture={tableTexture} />
		</Route>
		<Route exact={true} path="/instructions">
			<Instructions handleChangeTableTexture={handleChangeTableTexture} tableTexture={tableTexture} />
		</Route>
		<Route exact={true} path="/shop">
			<Shop handleChangeTableTexture={handleChangeTableTexture} tableTexture={tableTexture} />
		</Route>
      </Switch>
    </Router>
  );
}

export default App;
