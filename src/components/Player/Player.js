import PlayerTimeControl from './PlayerTimeControl';
import PlayerControl from './PlayerControl';


function Player({ songs, setSongs, playingSong, setPlayingSong, isPlaying, setIsPlaying, audioRef, timeInfo, setTimeInfo }) {
  const timeUpdateHandler = event => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    setTimeInfo({...timeInfo, currentTime, duration});
  };

  const songEndHandler = () => {
    let index = songs.findIndex(song => song.id === playingSong.id);
    let newIndex = (index + 1) % songs.length;

    setPlayingSong(songs[newIndex]);
  };

  const handleLoadAudio = () => {
    if (isPlaying) audioRef.current.play();
  };
  
  return (
    <div className="flex flex-col items-center justify-between">
      <PlayerTimeControl timeInfo={timeInfo} setTimeInfo={setTimeInfo} audioRef={audioRef}/>
      <PlayerControl 
        songs={songs}
        setSongs={setSongs}
        playingSong={playingSong} 
        setPlayingSong={setPlayingSong}
        audioRef={audioRef} 
        isPlaying={isPlaying} 
        setIsPlaying={ setIsPlaying}
      />

      <audio 
        src={playingSong.audio} 
        ref={audioRef} 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        onLoadedData={handleLoadAudio}
      ></audio>
    </div>
  );
}

export default Player;