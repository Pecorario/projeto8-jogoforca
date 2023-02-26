import { useState } from 'react';

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
  const [chosenWord, setChosenWord] = useState('');
  const [arrChosenWord, setArrChosenWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [step, setStep] = useState(0);

  function handleHiddenChosenWord(word) {
    const auxArrChosenWord = word.split('');
    const auxArrHiddenWord = new Array(auxArrChosenWord.length).fill('_');

    setArrChosenWord(auxArrChosenWord);
    setHiddenWord(auxArrHiddenWord);
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
    const sizeOfArr = palavras.length;
    const chooseNumber = getRandomInt(0, sizeOfArr);
    setChosenWord(palavras[chooseNumber]);
    handleHiddenChosenWord(palavras[chooseNumber]);
  }

  return (
    <div className="container">
      <Game
        handleChooseWord={handleChooseWord}
        chosenWord={hiddenWord}
        stepImage={getStepImage()}
      />
      <Letters />
    </div>
  );
}
