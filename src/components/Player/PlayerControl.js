import { useEffect } from 'react';

function PlayerControl({ songs, setSongs, audioRef, isPlaying, setIsPlaying, playingSong, setPlayingSong }) {  
  useEffect(() => {
    const newSongs = songs.map(song => {
      if (song.id === playingSong.id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    });

    setSongs(newSongs);
  }, [playingSong]);
  
  const playSongHandler = event => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const skipTrackHandler = direction => {
    let index = songs.findIndex(song => song.id === playingSong.id);
    let newIndex = direction === 'forward' ? (index + 1) % songs.length : (index - 1) % songs.length;

    if (newIndex < 0) newIndex = songs.length - 1;
    
    setPlayingSong(songs[newIndex]);
  };

  return (
    <div className="py-3 max-w-sm w-full flex items-center justify-between">
      <button onClick={() => skipTrackHandler('back')}>previous</button>
      <button onClick={playSongHandler}>{isPlaying ? 'Stop' : 'Start'}</button>
      <button onClick={() => skipTrackHandler('forward')}>next</button>
    </div>
  );
}

export default PlayerControl;