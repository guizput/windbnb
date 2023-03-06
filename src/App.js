import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [stays, setStays] = useState([]);
  return (
    <Router>
      <Nav stays={stays} setStays={setStays} />
      <Switch>
        <Route path="/">
          <Home stays={stays} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
