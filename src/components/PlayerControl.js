function PlayerControl({ audioRef, isPlaying, setIsPlaying }) {
  
  const playSongHandler = event => {
    if (isPlaying) {
      event.target.textContent = 'PLAY';
      audioRef.current.pause();
    } else {
      event.target.textContent = 'STOP';
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="py-3 max-w-sm w-full flex items-center justify-between">
      <button>previous</button>
      <button onClick={playSongHandler}>PLAY</button>
      <button>next</button>
    </div>
  );
}

export default PlayerControl;