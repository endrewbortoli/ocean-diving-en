import React from "react";

function DifficultyButtons({ difficulty, onSelect }) {
  return (
    <div className="difficulty-buttons">
      <button
        className={`button ${difficulty === "EASY" ? "selected" : ""}`}
        onClick={() => onSelect("EASY")}
      >
        EASY
      </button>
      <button
        className={`button ${difficulty === "HARD" ? "selected" : ""}`}
        onClick={() => onSelect("HARD")}
      >
        HARD
      </button>
    </div>
  );
}

export default DifficultyButtons;
