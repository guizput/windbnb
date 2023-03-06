import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Page from "./components/Page.js";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [stays, setStays] = useState([]);
  return (
    <Router>
      <Nav stays={stays} setStays={setStays} />
      <Switch>
        <Route exact path="/">
          <Home stays={stays} setStays={setStays} />
        </Route>
        <Route path="/stays/:id">
          <Page stays={stays} setStays={setStays} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
