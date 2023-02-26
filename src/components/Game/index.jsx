import * as S from './style';

export default function Game({
  handleChooseWord,
  chosenWord,
  stepImage,
  didYouLose,
  didYouWin
}) {
  return (
    <S.WrapperGame>
      <img src={stepImage} alt="Imagem da forca " data-test="game-image" />

      <S.WrapperWord>
        <S.ChooseWord onClick={handleChooseWord} data-test="choose-word">
          Escolher Palavra
        </S.ChooseWord>

        <S.ChoosenWord>
          {chosenWord.map((letter, idx) => (
            <S.Word
              key={idx}
              didYouLose={didYouLose}
              didYouWin={didYouWin}
              data-test="word"
            >
              {letter}
            </S.Word>
          ))}
        </S.ChoosenWord>
      </S.WrapperWord>
    </S.WrapperGame>
  );
}
