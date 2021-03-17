import { useRef, useState } from 'react';

import PlayerTimeControl from './PlayerTimeControl';
import PlayerControl from './PlayerControl';

function Player({ playingSong, isPlaying, setIsPlaying }) {
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
    <div className="h-1/5 flex flex-col items-center justify-between">
      <PlayerTimeControl timeInfo={timeInfo} setTimeInfo={setTimeInfo} audioRef={audioRef}/>
      <PlayerControl 
        playingSong={playingSong.audio} 
        audioRef={audioRef} 
        isPlaying={ isPlaying} 
        setIsPlaying={ setIsPlaying}
      />
      <audio 
        src={playingSong.audio} 
        ref={audioRef} 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default Player;