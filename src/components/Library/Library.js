import LibrarySong from './LibrarySong';

function Library({ songs }) {
  return (
    <div className="py-4 bg-white fixed left-0 top-0 h-full w-80 shadow-2xl overflow-x-scroll">
      <h2 className="px-4 py-6 text-3xl text-gray-600">Library</h2>
      <div>
        {songs.map(song => <LibrarySong song={song} />)}
      </div>
    </div>
  )
}

export default Library;