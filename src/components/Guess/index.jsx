import * as S from './style';

export default function Guess({
  handleGuess,
  guessWord,
  setGuessWord,
  startedGame,
  finishedGame
}) {
  function handleChange(event) {
    setGuessWord(event.target.value);
  }
  return (
    <S.WrapperGuess>
      <S.Label htmlFor="guess-input">Já sei a palavra!</S.Label>
      <S.Input
        id="guess-input"
        name="guess-input"
        type="text"
        data-test="guess-input"
        value={guessWord}
        onChange={handleChange}
        disabled={!startedGame || finishedGame}
      />
      <S.Button
        data-test="guess-button"
        onClick={handleGuess}
        disabled={!startedGame || finishedGame}
      >
        Chutar
      </S.Button>
    </S.WrapperGuess>
  );
}
