import { useState } from 'react';

export default function Game({ handleChooseWord, chosenWord, stepImage }) {
  return (
    <div className="game">
      <img src={stepImage} alt="Imagem da forca no estado inicial" />

      <div className="wrapper-word">
        <button className="choose-word" onClick={handleChooseWord}>
          Escolher Palavra
        </button>

        <div className="choosen-word">
          {chosenWord.map(letter => (
            <p>{letter}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
