import { useRef } from 'react';

import PlayerTimeControl from './PlayerTimeControl';
import PlayerControl from './PlayerControl';

function Player({ playingSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  
  return (
    <div className="h-1/5 flex flex-col items-center justify-between">
      <PlayerTimeControl />
      <PlayerControl 
        playingSong={ playingSong.audio } 
        audioRef={ audioRef } 
        isPlaying={ isPlaying } 
        setIsPlaying={ setIsPlaying }
      />
      <audio src={ playingSong.audio } ref={ audioRef }></audio>
    </div>
  );
}

export default Player;