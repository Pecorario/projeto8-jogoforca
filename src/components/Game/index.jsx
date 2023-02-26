import * as S from './style';

export default function Game({
  handleChooseWord,
  word,
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
          <S.Word
            didYouLose={didYouLose}
            didYouWin={didYouWin}
            data-test="word"
          >
            {word}
          </S.Word>
        </S.ChoosenWord>
      </S.WrapperWord>
    </S.WrapperGame>
  );
}
