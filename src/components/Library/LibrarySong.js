function LibrarySong({ song, songs, setSongs, setPlayingSong, audioRef, isPlaying }) {
  const songSelectHandler = () => {
    const newSongs = songs.map(s => {
      if (s.id === song.id) {
        return {
          ...s,
          active: true
        }
      } else {
        return {
          ...s,
          active: false
        }
      }
    });

    setSongs(newSongs);
    setPlayingSong(song);

    if (isPlaying) {
      // play() call on a <video> or <audio> element will return promise
      // watch more on: https://developers.google.com/web/updates/2016/03/play-returns-promise
      const playPromise = audioRef.current.play();
      
      if(playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div className={`mt-1 px-6 py-3 flex items-center cursor-pointer ${song.active ? 'bg-purple-800 hover:bg-purple-800' : 'hover:bg-purple-100'}`}
      onClick={songSelectHandler}
    >
      <img src={song.img} alt={song.title} className="w-20"/>
      <div className="ml-3">
        <h3 className={`text-lg  ${song.active ? 'text-gray-50' : 'text-gray-600'}`}>{song.title}</h3>
        <h4 className={`text-xs  ${song.active ? 'text-gray-200' : 'text-gray-500'}`}>{song.artists.join(', ')}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;