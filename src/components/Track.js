function Track({ pickedSong }) {
  return (
    <div className="max-w-lg mx-auto flex-1 flex flex-col items-center justify-center">
      <img src={pickedSong.img} alt={pickedSong.name} className="w-3/4 rounded-full"/>
      <span className="mt-3 py-2 text-2xl text-gray-600">{pickedSong.title}</span>
      <span className="text-xl text-gray-500">{pickedSong.artists.join(', ')}</span>
    </div>
  );
}

export default Track;