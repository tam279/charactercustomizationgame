// Hair.js
import React from "react";

const Hair = ({ total, selected, onSelect, type }) => {
  const rows = Math.ceil(total / 4);

  return (
    <table className={`${type}-table`}>
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
                      src={`${type}/${index}.png`}
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

export default Hair;
