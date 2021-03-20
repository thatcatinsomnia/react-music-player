import { useState, useRef } from 'react';
import Player from './components/Player/Player';
import SongInfo from './components/SongInfo';
import chillHop from './data/chillHop';
import Library from './components/Library/Library';

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [playingSong, setPlayingSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [timeInfo, setTimeInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const timeUpdateHandler = event => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    setTimeInfo({...timeInfo, currentTime, duration});
  };

  return (
    <div>
      <SongInfo playingSong={playingSong}/>
      <Player 
        playingSong={playingSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        timeInfo={timeInfo}
        setTiemInfo={setTimeInfo}
      />
      <Library songs={songs} setSongs={setSongs} setPlayingSong={setPlayingSong} audioRef={audioRef} isPlaying={isPlaying}/>
      <audio 
        src={playingSong.audio} 
        ref={audioRef} 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
