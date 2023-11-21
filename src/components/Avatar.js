// Avatar.js
import React from "react";

const Avatar = ({ selectedParts }) => {

  const avatarStyles = {
    position: "fixed",
    right: "250px",
      top: "400px",
  };

  const getPartPath = (category) => {
    switch (category) {
      case "glasses":
        return "accessories/glasses";
      case "clothing1":
        return "clothes/layer_1";
      case "clothing2":
        return "clothes/layer_2";
      case "clothing3":
        return "clothes/layer_3";
      default:
        return category; // If no special case, return the category as is
    }
  };

  return (
    <div className="avatar">
      {Object.keys(selectedParts).map((category, index) => (
        <img
          key={index}
          src={`${getPartPath(category)}/${selectedParts[category]}.png`}
          alt=""
          width="260"
          style={{ ...avatarStyles, zIndex: index }}
        />
      ))}
    </div>
  );
};

export default Avatar;
