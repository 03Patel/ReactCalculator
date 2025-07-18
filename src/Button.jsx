import React from "react";
import './ButtonGrid.css';

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

const ButtonGrid = ({ onClick, onEqual, onClear }) => {
  return (
    <div className="button-grid">
      {buttons.map((btn) => (
        <button
          key={btn}
          className="button"
          onClick={() => (btn === "=" ? onEqual() : onClick(btn))}
        >
          {btn}
        </button>
      ))}
      <button
        className="button clear-button"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default ButtonGrid;