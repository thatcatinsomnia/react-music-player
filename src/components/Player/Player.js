import PlayerTimeControl from './PlayerTimeControl';
import PlayerControl from './PlayerControl';


function Player({ songs, pickedSong, setPickedSong, isTrackPlaying, setIsTrackPlaying, timeInfo, setTimeInfo, audioRef }) {
  const timeUpdateHandler = event => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    setTimeInfo({...timeInfo, currentTime, duration});
  };

  const songEndHandler = () => {
    let index = songs.findIndex(song => song.id === pickedSong.id);
    let newIndex = (index + 1) % songs.length;
    
    setPickedSong(songs[newIndex]);
  };

  const handleLoadAudio = () => {
    if (isTrackPlaying) audioRef.current.play();
  };
  
  return (
    <div className="flex flex-col items-center justify-between">
      <PlayerTimeControl timeInfo={timeInfo} setTimeInfo={setTimeInfo} audioRef={audioRef}/>
      <PlayerControl 
        audioRef={audioRef}
        songs={songs}
        isTrackPlaying={isTrackPlaying} 
        setIsTrackPlaying={ setIsTrackPlaying}
        pickedSong={pickedSong} 
        setPickedSong={setPickedSong}
      />

      <audio 
        src={pickedSong.audio} 
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