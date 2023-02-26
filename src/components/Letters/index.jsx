import * as S from './style';

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
    <S.ButtonLetter
      disabled={handleGetIsDisabled()}
      onClick={() => handleClickLetter(letter)}
      data-test="letter"
    >
      {letter.toUpperCase()}
    </S.ButtonLetter>
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

  return (
    <S.WrapperLetters>
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
    </S.WrapperLetters>
  );
}
