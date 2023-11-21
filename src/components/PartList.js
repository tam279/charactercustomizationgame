// PartList.js
import React from "react";
import Body from "./Body";
import Eyes from "./Eyes";
import Hair from "./Hair";
import Mouths from "./Mouths";
import Eyebrows from "./Eyebrows";
import Glasses from "./Glasses";
import Clothing1 from "./Clothing1";
import Clothing2 from "./Clothing2";
import Clothing3 from "./Clothing3";

const PartList = ({ selectedParts, onSelect, total }) => {
  return (
    <>
      <h2>Body</h2>
      <div className="list">
        <div className="part-table">
          <Body
            total={total.body}
            selected={selectedParts.body}
            onSelect={(index) => onSelect("body", index)}
          />
        </div>
        <h2>Eyes</h2>
        <div className="part-table">
          <Eyes
            total={total.eyes}
            selected={selectedParts.eyes}
            onSelect={(index) => onSelect("eyes", index)}
          />
        </div>
        <h2>Hair and Facial Hair</h2>
        <div className="part-table">
          <Hair
            total={total.hair}
            selected={selectedParts.hair}
            onSelect={(index) => onSelect("hair", index)}
            type="hair"
          />
          <Hair
            total={total.facialHair}
            selected={selectedParts.facialHair}
            onSelect={(index) => onSelect("facialHair", index)}
            type="facial_hair"
          />
        </div>
        <h2>Mouths</h2>
        <div className="part-table">
          <Mouths
            total={total.mouths}
            selected={selectedParts.mouths}
            onSelect={(index) => onSelect("mouths", index)}
            type="mouths"
          />
        </div>
        <h2>Eyebrows</h2>
        <div className="part-table">
          <Eyebrows
            total={total.eyebrows}
            selected={selectedParts.eyebrows}
            onSelect={(index) => onSelect("eyebrows", index)}
            type="eyebrows"
          />
        </div>

        <h2>Glasses</h2>
        <div className="part-table">
          <Glasses
            total={total.glasses}
            selected={selectedParts.glasses}
            onSelect={(index) => onSelect("glasses", index)}
            type="glasses"
          />
        </div>

        <h2>Clothing Layer 1</h2>
        <div className="part-table">
          <Clothing1
            total={total.clothing1}
            selected={selectedParts.clothing1}
            onSelect={(index) => onSelect("clothing1", index)}
            type="clothing1"
          />
        </div>

        <h2>Clothing Layer 2</h2>
        <div className="part-table">
          <Clothing2
            total={total.clothing2}
            selected={selectedParts.clothing2}
            onSelect={(index) => onSelect("clothing2", index)}
            type="clothing2"
          />
        </div>

        <h2>Clothing Layer 3</h2>
        <div className="part-table">
          <Clothing3
            total={total.clothing3}
            selected={selectedParts.clothing3}
            onSelect={(index) => onSelect("clothing3", index)}
            type="clothing3"
          />
        </div>
      </div>
    </>
  );
};

export default PartList;
