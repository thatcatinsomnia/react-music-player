function Song({ playingSong }) {
  return (
    <div className="px-6 py-16 h-4/6 flex flex-col items-center justify-center">
      <img src={playingSong.img} alt={playingSong.name} className="max-w-sm w-full rounded-full"/>
      <h2 className="mt-4 py-3 text-2xl text-gray-600">{playingSong.title}</h2>
      <h3 className="text-xl text-gray-500">{playingSong.artists.join(', ')}</h3>
    </div>
  );
}

export default Song;