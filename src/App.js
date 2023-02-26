import { useState } from 'react';

import { GlobalStyle } from './styles/global';
import * as S from './styles/style';

import palavras from './palavras.js';

import Game from './components/Game';
import Letters from './components/Letters';

import forca0 from './assets/forca0.png';
import forca1 from './assets/forca1.png';
import forca2 from './assets/forca2.png';
import forca3 from './assets/forca3.png';
import forca4 from './assets/forca4.png';
import forca5 from './assets/forca5.png';
import forca6 from './assets/forca6.png';

export default function App() {
  const [chosenWord, setChosenWord] = useState([]);
  const [chosenLetters, setChosenLetters] = useState([]);
  const [step, setStep] = useState(0);

  const [didYouLose, setDidYouLose] = useState(false);
  const [didYouWin, setDidYouWin] = useState(false);
  const [finishedGame, setFinishedGame] = useState(false);

  function resetGame() {
    setStep(0);
    setChosenLetters([]);
    setChosenWord('');
    setDidYouWin(false);
    setDidYouLose(false);
    setFinishedGame(false);
  }

  function lostGame(arr) {
    setDidYouLose(true);
    setFinishedGame(true);
  }

  function wonGame() {
    setDidYouWin(true);
    setFinishedGame(true);
  }

  function getStepImage() {
    switch (step) {
      case 0:
        return forca0;
      case 1:
        return forca1;
      case 2:
        return forca2;
      case 3:
        return forca3;
      case 4:
        return forca4;
      case 5:
        return forca5;
      case 6:
        return forca6;
      default:
        return forca0;
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function handleChooseWord() {
    resetGame();

    const sizeOfArr = palavras.length;
    const chooseNumber = getRandomInt(0, sizeOfArr);

    setChosenWord(palavras[chooseNumber].split(''));
  }

  function verifyAllLettersAreDiscovered(letter) {
    const auxArr = [...chosenLetters, letter];
    const lettersWrong = chosenWord.filter(item => !auxArr.includes(item));

    if (lettersWrong.length === 0) {
      return true;
    }

    return false;
  }

  function handleClickLetter(letter) {
    if (step < 6) {
      let rightWord = false;

      if (chosenWord.includes(letter)) {
        rightWord = verifyAllLettersAreDiscovered(letter);
      } else {
        setStep(step + 1);

        if (step === 5) {
          lostGame();
        }
      }

      if (rightWord) {
        wonGame();
      }

      setChosenLetters(prevState => [...prevState, letter]);
    }
  }

  return (
    <>
      <S.Container>
        <Game
          handleChooseWord={handleChooseWord}
          chosenWord={chosenWord}
          chosenLetters={chosenLetters}
          stepImage={getStepImage()}
          didYouLose={didYouLose}
          didYouWin={didYouWin}
        />
        <Letters
          startedGame={chosenWord.length !== 0}
          finishedGame={finishedGame}
          chosenLetters={chosenLetters}
          handleClickLetter={handleClickLetter}
        />
      </S.Container>
      <GlobalStyle />
    </>
  );
}
