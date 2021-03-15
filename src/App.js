import { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './data/chillHop';

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [playingSong, setPlayingSong] = useState(songs[3]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="h-screen h-full">
      <Song playingSong={ playingSong }/>
      <Player 
        playingSong={ playingSong } 
        isPlaying={ isPlaying } 
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
