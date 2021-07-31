// Router will allow us to have multiple navigation pages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Home component contains the game screen
import Home from "./home/home";
// Login component has code for login screen
import Login from "./login/login";
// this is the style sheet
import "./App.css";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Login />
        </Route>
        <Route exact={true} path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
