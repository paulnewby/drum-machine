import React from 'react';
import './App.css';


const sounds = [
  {
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' 
  },
  {
    key: 'R',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    key: 'T',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    key: 'Y',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    key: 'U',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    key: 'I',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    key: 'O',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  {
    key: 'P',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, 
  {
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, 
  {
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, 
  {
    key: 'F',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, 
  {
    key: 'G',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, 
  {
    key: 'H',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, 
  {
    key: 'J',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, 
  {
    key: 'K',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }];


const App = () => (
    <div id="drum-machine" className="container">
      <div id="display" className="display">
        <h1>Press a key</h1>
        {sounds.map((sound, idx) => (
        <Box text={sound.key} key={idx} audio={sound.mp3}/>
        ))}
        </div>
      </div>
    );


class Box extends React.Component  {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }
  componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
       parent.classList.remove('active');
  });
  }

  playSound = () => {
    this.audio.current.play();

    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add('active');

    const display = parent.parentNode;
    display.querySelector('h1').innerText = `${id}`;
  }


    render() {
      const { text, audio} = this.props;

      return (
        <div className="box" onClick={this.playSound} onKeyDown={this.handleKey}>
          {text}
          <audio ref={this.audio} src={audio} className="clip" id={text} />
        </div>
      )
   }
}

document.addEventListener('keydown', (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');
    audio.play();
  }
 });

export default App;
