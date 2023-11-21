// Mouths.js
import React from "react";

const Mouths = ({ total, selected, onSelect }) => {
  const rows = Math.ceil(total / 4);

  return (
    <table className="part-table">
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 4 }).map((_, colIndex) => {
              const index = rowIndex * 4 + colIndex + 1;
              const isClickable = index <= total;

              return (
                <td
                  key={index}
                  className={`cell ${isClickable ? "clickable" : ""} ${
                    index === selected ? "selected" : ""
                  }`}
                  onClick={isClickable ? () => onSelect(index) : null}
                >
                  {isClickable && (
                    <img
                      src={`mouths/${index}.png`}
                      alt=""
                      height="60"
                      className="img-center"
                    />
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Mouths;
