function LibrarySong({ song, pickedSong,  setPickedSong }) {
  const isPlaying = pickedSong.id === song.id;

  return (
    <div className={`mt-1 px-3 sm:px-6 py-3 flex items-center cursor-pointer ${isPlaying ? 'bg-purple-800 hover:bg-purple-800' : 'hover:bg-purple-100'}`}
      onClick={() => setPickedSong(song)}
    >
      <img src={song.img} alt={song.title} className="w-20"/>
      <div className="ml-3">
        <h3 className={`text-md sm:text-lg  ${isPlaying ? 'text-gray-50' : 'text-gray-600'}`}>{song.title}</h3>
        <h4 className={`text-xs sm:text-xs  ${isPlaying ? 'text-gray-200' : 'text-gray-500'}`}>{song.artists.join(', ')}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;