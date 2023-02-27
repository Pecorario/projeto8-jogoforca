import { useState } from 'react';

import { GlobalStyle } from './styles/global';
import * as S from './styles/style';

import palavras from './palavras.js';

import Game from './components/Game';
import Letters from './components/Letters';
import Guess from './components/Guess';

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
  const [hiddenWord, setHiddenWord] = useState([]);
  const [word, setWord] = useState('');
  const [step, setStep] = useState(0);

  const [didYouLose, setDidYouLose] = useState(false);
  const [didYouWin, setDidYouWin] = useState(false);
  const [finishedGame, setFinishedGame] = useState(false);

  const [guessWord, setGuessWord] = useState('');

  function getWordString(arr) {
    let oldWord = arr.join(' ');

    setWord(oldWord);
  }

  function resetGame() {
    setStep(0);
    setChosenLetters([]);
    setHiddenWord([]);

    setChosenWord([]);
    setDidYouWin(false);
    setDidYouLose(false);
    setFinishedGame(false);
  }

  function showWord(arr) {
    chosenWord.map((item, idx) => (arr[idx] = item));
    getWordString(arr);
  }

  function lostGame(arr) {
    showWord(arr);
    setDidYouLose(true);
    setFinishedGame(true);
  }

  function wonGame(arr) {
    showWord(arr);
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
    const chooseNumber = getRandomInt(0, sizeOfArr - 1);
    const chosenWordArr = palavras[chooseNumber].split('');
    const auxArrHiddenWord = new Array(chosenWordArr.length).fill('_');

    setHiddenWord(auxArrHiddenWord);
    setChosenWord(chosenWordArr);
    getWordString(auxArrHiddenWord);
  }

  function showRightLetter(arr, letter) {
    chosenWord.map((item, idx) => {
      if (item.normalize('NFD').replace(/[\u0300-\u036f]/g, '') === letter) {
        return (arr[idx] = item);
      }
      return item;
    });
  }

  function handleClickLetter(letter) {
    if (step < 6) {
      const auxArr = [...hiddenWord];
      const formatedArr = chosenWord
        .join('')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      if (formatedArr.includes(letter)) {
        showRightLetter(auxArr, letter);
      } else {
        setStep(step + 1);

        if (step === 5) {
          lostGame(auxArr);
        }
      }

      if (!auxArr.includes('_')) {
        wonGame(auxArr);
      }

      setChosenLetters(prevState => [...prevState, letter]);
      getWordString(auxArr);
      setHiddenWord(auxArr);
    }
  }

  function handleGuess(e) {
    const rightWord = chosenWord.join('');

    if (rightWord === guessWord.toLowerCase()) {
      wonGame(hiddenWord);
    } else {
      setStep(6);
      lostGame(hiddenWord);
    }

    setGuessWord('');
  }

  return (
    <>
      <S.Container>
        <Game
          word={word}
          didYouLose={didYouLose}
          didYouWin={didYouWin}
          stepImage={getStepImage()}
          handleChooseWord={handleChooseWord}
        />
        <Letters
          startedGame={chosenWord.length !== 0}
          finishedGame={finishedGame}
          chosenLetters={chosenLetters}
          handleClickLetter={handleClickLetter}
        />
        <Guess
          guessWord={guessWord}
          setGuessWord={setGuessWord}
          startedGame={chosenWord.length !== 0}
          finishedGame={finishedGame}
          handleGuess={handleGuess}
        />
      </S.Container>
      <GlobalStyle />
    </>
  );
}
