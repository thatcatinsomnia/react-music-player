import LibrarySong from './LibrarySong';

function Library({ songs, setSongs, setPlayingSong, audioRef, isPlaying }) {
  return (
    <div className="py-4 bg-white fixed left-0 top-0 h-full w-80 shadow-2xl overflow-x-scroll">
      <h2 className="px-6 py-6 text-3xl text-gray-600">Library</h2>
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