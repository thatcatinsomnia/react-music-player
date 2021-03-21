import { useState, useRef } from 'react';
import Player from './components/Player/Player';
import SongInfo from './components/SongInfo';
import chillHop from './data/chillHop';
import Library from './components/Library/Library';
import Nav from './components/Nav';

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [playingSong, setPlayingSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [timeInfo, setTimeInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <SongInfo playingSong={playingSong}/>
      <Player 
        songs={songs}
        setSongs={setSongs}
        playingSong={playingSong} 
        setPlayingSong={setPlayingSong}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        setTimeInfo={setTimeInfo}
        timeInfo={timeInfo}
        setTiemInfo={setTimeInfo}
      />
      <Library 
        songs={songs} 
        setSongs={setSongs} 
        setPlayingSong={setPlayingSong} 
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
