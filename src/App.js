// importing use state to hold our variables critical to render, use effect to load state when page mounts
import { useState, useEffect } from "react";
// Router will allow us to have multiple navigation pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Home component contains the game screen
import Home from "./home/Home";
// Login component has code for login screen
import SignIn from "./components/SignIn";
// this is the style sheet
import "./App.css";
import { auth } from "./firebase";

function App() {
  // To keep track of the login status of the user, we need to use the onAuthStateChange to track the login status
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };

      if (userAuth) {
        console.log("userAuth", userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {!user ? <SignIn /> : <Home />}
        </Route>
        <Route exact={true} path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
