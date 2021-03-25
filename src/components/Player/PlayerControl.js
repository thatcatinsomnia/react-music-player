import { ReactComponent as ForwardIcon } from '../../assets/svg/forward.svg';
import { ReactComponent as RewindIcon } from '../../assets/svg/rewind.svg';
import { ReactComponent as PlayIcon } from '../../assets/svg/play.svg';
import { ReactComponent as PauseIcon } from '../../assets/svg/pause.svg';

function PlayerControl({ audioRef, songs, isTrackPlaying, setIsTrackPlaying, pickedSong, setPickedSong }) {  
  const playSongHandler = () => {
    if (isTrackPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsTrackPlaying(!isTrackPlaying);
  };

  const skipTrackHandler = direction => {
    let index = songs.findIndex(song => song.id === pickedSong.id);
    let newIndex = direction === 'forward' ? (index + 1) % songs.length : (index - 1) % songs.length;

    if (newIndex < 0) {
      newIndex = songs.length - 1;
    }

    const newSong = songs[newIndex];

    setPickedSong(newSong);
  };

  return (
    <div className="px-4 py-3 mb-2 max-w-xl w-full flex items-center justify-between text-gray-600">
      <button className="hover:bg-gray-200 rounded transform hover:-translate-y-1 transition duration-200" onClick={() => skipTrackHandler('rewind')}>
        <RewindIcon className="p-2 w-10 h-10 fill-current"/>
      </button>

      <button className="hover:bg-gray-200 rounded transform hover:-translate-y-1 transition duration-200" onClick={playSongHandler}>
        {isTrackPlaying ? <PauseIcon className="p-2 w-12 h-12 fill-current" /> : <PlayIcon className="p-2 w-12 h-12 fill-current"/>}
      </button>

      <button className="hover:bg-gray-200 rounded transform hover:-translate-y-1 transition duration-200" onClick={() => skipTrackHandler('forward')}>
        <ForwardIcon className="p-2 w-10 h-10 fill-current"/>
      </button>
    </div>
  );
}

export default PlayerControl;