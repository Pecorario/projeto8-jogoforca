import forca0 from '../../assets/forca0.png';

export default function Game() {
  return (
    <div className="game">
      <img src={forca0} alt="Imagem da forca no estado inicial" />
      <button className="choose-word">Escolher Palavra</button>
    </div>
  );
}
