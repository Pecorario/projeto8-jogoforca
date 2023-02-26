import { useState } from 'react';

export default function Game({
  handleChooseWord,
  chosenWord,
  stepImage,
  didYouLose,
  didYouWin
}) {
  return (
    <div className="game">
      <img src={stepImage} alt="Imagem da forca " data-test="game-image" />

      <div className="wrapper-word">
        <button
          className="choose-word"
          onClick={handleChooseWord}
          data-test="choose-word"
        >
          Escolher Palavra
        </button>

        <div className="choosen-word">
          {chosenWord.map((letter, idx) => (
            <p
              key={idx}
              className={(didYouLose && 'lost') || (didYouWin && 'win') || ''}
              data-test="word"
            >
              {letter}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
