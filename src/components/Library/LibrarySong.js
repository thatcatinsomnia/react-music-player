function LibrarySong({ song }) {
  return (
    <div className="mt-1 px-4 py-3 flex items-center cursor-pointer hover:bg-purple-100">
      <img src={song.img} alt={song.title} className="w-20"/>
      <div className="ml-3">
        <h3 class="text-lg text-gray-600">{song.title}</h3>
        <h4 class="text-xs text-gray-500">{song.artists.join(', ')}</h4>
      </div>
    </div>
  )
}

export default LibrarySong;