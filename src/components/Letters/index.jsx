export default function Letters() {
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
        <button key={letter} className="letter" disabled>
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
