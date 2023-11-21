import React, { useState } from "react";
import PartList from "./components/PartList";
import Avatar from "./components/Avatar";
import "./App.css";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

const App = () => {
  const [selectedParts, setSelectedParts] = useState({
    body: 1,
    eyes: 1,
    hair: 1,
    mouths: 1,
    eyebrows: 1,
    glasses: 1,
    clothing1: 1,
    clothing2: 1,
    clothing3: 1,
  });

  const handlePartSelect = (category, index) => {
    setSelectedParts((prevSelectedParts) => {
      const newSelectedParts = { ...prevSelectedParts, [category]: index };
      return newSelectedParts;
    });
  };

  const handleRandomize = () => {
    const randomParts = Object.fromEntries(
      Object.entries(total).map(([category, count]) => [
        category,
        Math.floor(Math.random() * count) + 1,
      ])
    );
    setSelectedParts(randomParts);
  };

  return (
    <div className="app">
      <h1 className="game-title">Character Customization Game</h1>
      <div className="controls">
        <button className="button" onClick={handleRandomize}>
          Randomize!
        </button>
      </div>
      <div className="avatar-container">
        <Avatar selectedParts={selectedParts} />
      </div>
      <div className="part-list">
        <PartList
          selectedParts={selectedParts}
          onSelect={handlePartSelect}
          total={total}
        />
      </div>
    </div>
  );
};

export default App;
