import PlayerTimeControl from './PlayerTimeControl';
import PlayerControl from './PlayerControl';

function Player({ playingSong, isPlaying, setIsPlaying, audioRef, timeInfo, setTimeInfo }) {


  return (
    <div className="h-1/5 flex flex-col items-center justify-between">
      <PlayerTimeControl timeInfo={timeInfo} setTimeInfo={setTimeInfo} audioRef={audioRef}/>
      <PlayerControl 
        playingSong={playingSong.audio} 
        audioRef={audioRef} 
        isPlaying={ isPlaying} 
        setIsPlaying={ setIsPlaying}
      />
    </div>
  );
}

export default Player;