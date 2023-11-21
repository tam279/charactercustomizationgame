// Eyebrows.js
import React from "react";

const Eyebrows = ({ total, selected, onSelect }) => {
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
                      src={`/eyebrows/${index}.png`} // Assuming the images are in the public/eyebrows directory
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

export default Eyebrows;
