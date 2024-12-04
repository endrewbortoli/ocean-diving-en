import React, { useState } from "react";
import "../styles/SelectionComponent.css";
import mediumImage from '../assets/animal2.jpg';
import hardImage from '../assets/animal3.jpg';
import logo from '../assets/logooceanspace.png';
import easyImage from '../assets/emblemainicio.jpg';


const LpContent = ({ setDifficulty }) => {
  const options = [
    { label: "EASY", text: "Explorator", image: easyImage },
    { label: "MEDIUM", text: "Detective", image: mediumImage },
    { label: "HARD", text: "Engineer", image: hardImage },
  ];
  const [currentIndex, setCurrentIndex] = useState(1); // Start at "MÉDIO"

  const handleSelection = (index) => {
    setCurrentIndex(index);
    setDifficulty(options[index].label); // Update difficulty in the parent component
  };

  return (
    <div className="selection-container">
      <img src={logo} alt="Ocean Logo" className="logo" />
      <h1>OCEANDIVING</h1>
      <p className="text">
      Welcome to the world of underwater exploration, explorer! You have been selected to participate in the <strong>OCEAN DIVING</strong> program, where you will undertake incredible missions across the world's oceans. Your task will be to explore the ocean depths and generate detailed reports on phenomena monitored by remote sensing technologies.        
      </p>
      <h6>Select the difficulty:</h6>

      <div className="image-selection">
        {options.map((option, index) => (
          <div
            key={option.label}
            className={`image-button ${index === currentIndex ? 'selected' : ''}`}
            onClick={() => handleSelection(index)} // Modificado para permitir seleção direta
          >
            <img src={option.image} alt={`${option.label} icon`} />
            <p>{option.text}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LpContent;
