import { useState, useRef } from 'react';
import Player from './components/Player/Player';
import Track from './components/Track';
import chillHop from './data/chillHop';
import Library from './components/Library/Library';
import Nav from './components/Nav';

function App() {
  const songs = chillHop();
  const audioRef = useRef(null);
  const [pickedSong, setPickedSong] = useState(songs[0]);
  const [isTrackPlaying, setIsTrackPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [timeInfo, setTimeInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  return (
    <div className="h-screen flex flex-col">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Track pickedSong={pickedSong}/>
      <Player 
        songs={songs}
        pickedSong={pickedSong}
        setPickedSong={setPickedSong}
        isTrackPlaying={isTrackPlaying} 
        setIsTrackPlaying={setIsTrackPlaying}
        timeInfo={timeInfo}
        setTimeInfo={setTimeInfo}
        audioRef={audioRef}
      />
      
      <Library 
        songs={songs} 
        pickedSong={pickedSong}
        setPickedSong={setPickedSong}
        audioRef={audioRef} 
        isTrackPlaying={isTrackPlaying} 
        isLibraryOpen={isLibraryOpen}
        setIsLibraryOpen={setIsLibraryOpen}
      />
    </div>
  );
}

export default App;
