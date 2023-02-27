import { useState } from 'react';
import * as S from './style';

export default function Guess({
  handleGuess,
  guessWord,
  setGuessWord,
  startedGame,
  finishedGame
}) {
  const [key, setKey] = useState('');
  const [code, setCode] = useState('');

  function handleChange(event) {
    setGuessWord(event.target.value);
  }

  function handleSubmit(event) {
    setKey(event.key);
    setCode(event.code);
    if (event.key === 'Enter' || event.code === 'Enter') {
      handleGuess();
    }
  }

  return (
    <S.WrapperGuess onSubmit={handleGuess}>
      <S.Label htmlFor="guess-input">Já sei a palavra!</S.Label>
      <S.Input
        id="guess-input"
        name="guess-input"
        type="text"
        data-test="guess-input"
        value={guessWord}
        onChange={handleChange}
        onKeyDown={event => handleSubmit(event)}
        disabled={!startedGame || finishedGame}
      />
      <S.Button
        data-test="guess-button"
        onClick={handleGuess}
        disabled={!startedGame || finishedGame}
        type="submit"
      >
        Chutar
      </S.Button>
      <p>key: {key}</p>
      <p>code: {code}</p>
    </S.WrapperGuess>
  );
}
