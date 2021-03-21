import { ReactComponent as MusicIcon } from '../assets/svg/music.svg';

function Nav({ libraryStatus, setLibraryStatus }) {
  const libraryBtnClass = libraryStatus === true ? 'bg-gray-600 text-gray-50' : '';

  return (
    <nav className="px-4 py-6 mx-auto max-w-3xl w-full text-gray-600 flex justify-between">
      <h2 className="text-3xl">Waves</h2>
      <button className={`px-4 border-2 flex items-center justify-center border-gray-600 rounded hover:bg-gray-600 hover:text-gray-50 transition-colors duration-300 ${libraryBtnClass}`}
        onClick={() => setLibraryStatus(!libraryStatus) }
      >
        Library
        <MusicIcon className="ml-1 w-4 h-4 fill-current" />
      </button>
    </nav>
  );
}

export default Nav;