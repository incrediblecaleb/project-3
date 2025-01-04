


jsx
import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('');
  const [sounds, setSounds] = useState([
    { id: 'Q', src: '(link unavailable)', text: 'Heater 1' },
    { id: 'W', src: '(link unavailable)', text: 'Heater 2' },
    { id: 'E', src: '(link unavailable)', text: 'Heater 3' },
    { id: 'A', src: '(link unavailable)', text: 'Heater 4' },
    { id: 'S', src: '(link unavailable)', text: 'Clap' },
    { id: 'D', src: '(link unavailable)', text: 'Open-HH' },
    { id: 'Z', src: '(link unavailable)', text: 'Kick-n-Hat' },
    { id: 'X', src: '(link unavailable)', text: 'Kick' },
    { id: 'C', src: '(link unavailable)', text: 'Closed-HH' },
  ]);

  const handleKeyPress = (e) => {
    const id = e.key.toUpperCase();
    const sound = sounds.find((sound) => (#) === id);
    if (sound) {
      playSound(sound);
    }
  };

  const playSound = (sound) => {
    setDisplay(sound.text);
    const audio = document.getElementById((link unavailable));
    audio.currentTime = 0;
    audio.play();
  };

  React.useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [sounds]);

  return (
    <div id="drum-machine" className="container text-center">
      <h1>Drum Machine</h1>
      <div id="display" className="display text-center">
        {display}
      </div>
      <div className="drum-pads">
        {sounds.map((sound) => (
          <div
            key={(link unavailable)}
            className="drum-pad"
            id={(link unavailable).toLowerCase()}
            onClick={() => playSound(sound)}
          >
            {(link unavailable)}
            <audio className="clip" id={(link unavailable)} src={sound.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

