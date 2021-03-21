import { useEffect } from 'react';
import { ReactComponent as ForwardIcon } from '../../assets/svg/forward.svg';
import { ReactComponent as RewindIcon } from '../../assets/svg/rewind.svg';
import { ReactComponent as PlayIcon } from '../../assets/svg/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/svg/pause.svg';

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
    <div className="py-3 max-w-sm w-full flex items-center justify-between text-gray-600">
      <button className="hover:bg-gray-200 rounded transform hover:-translate-y-1 transition duration-200" onClick={() => skipTrackHandler('back')}>
        <RewindIcon className="p-2 w-12 h-12 fill-current"/>
      </button>

      <button className="hover:bg-gray-200 rounded transform hover:-translate-y-1 transition duration-200" onClick={playSongHandler}>
        {isPlaying ? <PauseIcon className="p-2 w-12 h-12 fill-current" /> : <PlayIcon className="p-2 w-12 h-12 fill-current"/>}
      </button>

      <button className="hover:bg-gray-200 rounded transform hover:-translate-y-1 transition duration-200" onClick={() => skipTrackHandler('forward')}>
        <ForwardIcon className="p-2 w-12 h-12 fill-current"/>
      </button>
    </div>
  );
}

export default PlayerControl;