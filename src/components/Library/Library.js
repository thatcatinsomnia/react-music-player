import LibrarySong from './LibrarySong';
import { ReactComponent as CloseIcon } from '../../assets/svg/close.svg';

function Library({ songs, setSongs, setPlayingSong, audioRef, isPlaying, libraryStatus, setLibraryStatus}) {
  const navClass = libraryStatus === true ? 'translate-x-0 opacity-1': '-translate-x-full opacity-0';

  return (
    <div className={`py-2 sm:py-4 bg-white fixed left-0 top-0 h-full w-5/6 sm:w-80 shadow-2xl overflow-x-scroll 
      transform transition duration-500 ease ${navClass}`}
    >
      <CloseIcon className="w-4 h-4 fill-current text-gray-600 absolute right-4 cursor-pointer transform hover:rotate-90 transition duration-500"
        onClick={() => setLibraryStatus(false)}/>
      
      <h2 className="px-6 py-6 text-2xl sm:text-3xl text-gray-600">Library</h2>
      <div>
        {songs.map(song => (
          <LibrarySong 
            song={song} 
            songs={songs}
            setSongs={setSongs}
            setPlayingSong={setPlayingSong} 
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  )
}

export default Library;