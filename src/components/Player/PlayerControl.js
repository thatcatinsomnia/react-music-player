function PlayerControl({ audioRef, isPlaying, setIsPlaying }) {
  
  const playSongHandler = event => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="py-3 max-w-sm w-full flex items-center justify-between">
      <button>previous</button>
      <button onClick={playSongHandler}>{isPlaying ? 'Stop' : 'Start'}</button>
      <button>next</button>
    </div>
  );
}

export default PlayerControl;