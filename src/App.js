import Nav from "./components/Nav.js";
import List from "./components/List.js";
import { useState } from "react";

const App = () => {
  const [stays, setStays] = useState([]);
  return (
    <div>
      <Nav setStays={setStays} />
      <List stays={stays} />
    </div>
  );
};

export default App;
