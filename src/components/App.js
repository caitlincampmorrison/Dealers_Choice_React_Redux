import React from "react";
import AddFlower from "./AddFlower"
import FlowerList from "./FlowerList"

const App = () => (
  <div className="app">
    <div className="list">
      <h1>The Flower Shop</h1>
      <AddFlower />
      <FlowerList flowers={[]}/>
    </div>
  </div>
);

export default App;