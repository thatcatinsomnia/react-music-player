import { useState } from 'react';
import Player from './components/Player/Player';
import Song from './components/Song/Song';
import chillHop from './data/chillHop';
import Library from './components/Library/Library';

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [playingSong, setPlayingSong] = useState(songs[3]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <Song playingSong={playingSong}/>
      <Player 
        playingSong={playingSong} 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}

      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
