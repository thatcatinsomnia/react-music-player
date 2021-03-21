function Song({ playingSong }) {
  return (
    <div className="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center">
      <img src={playingSong.img} alt={playingSong.name} className="p-4 w-3/4 rounded-full"/>
      <span className="py-2 text-2xl text-gray-600">{playingSong.title}</span>
      <span className="text-xl text-gray-500">{playingSong.artists.join(', ')}</span>
    </div>
  );
}

export default Song;