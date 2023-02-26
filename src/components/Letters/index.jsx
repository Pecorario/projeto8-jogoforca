import { useState } from 'react';

function Letter({
  letter,
  startedGame,
  handleClickLetter,
  finishedGame,
  chosenLetters
}) {
  function handleGetIsDisabled() {
    if (startedGame) {
      if (finishedGame) {
        return true;
      } else {
        return chosenLetters.includes(letter);
      }
    } else {
      return true;
    }
  }

  return (
    <button
      className="letter"
      disabled={handleGetIsDisabled()}
      onClick={() => handleClickLetter(letter)}
      data-test="letter"
    >
      {letter.toUpperCase()}
    </button>
  );
}

export default function Letters({
  startedGame,
  handleClickLetter,
  finishedGame,
  chosenLetters
}) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];

  // const chosen = [];

  return (
    <div className="letters">
      {alphabet.map(letter => (
        <Letter
          key={letter}
          letter={letter}
          startedGame={startedGame}
          finishedGame={finishedGame}
          handleClickLetter={handleClickLetter}
          chosenLetters={chosenLetters}
        />
      ))}
    </div>
  );
}
