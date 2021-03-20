function Nav({ libraryStatus, setLibraryStatus }) {
  const libraryBtnClass = libraryStatus === true ? 'bg-gray-600 text-gray-50' : '';

  return (
    <nav className="px-4 py-3 mx-auto max-w-3xl text-gray-600 flex justify-between">
      <h2 className="text-3xl ">Waves</h2>
      <button className={`px-4 border-2 border-gray-600 rounded hover:bg-gray-600 hover:text-gray-50 transition-colors duration-300 ${libraryBtnClass}`}
        onClick={() => setLibraryStatus(!libraryStatus) }
      >
        Library
      </button>
    </nav>
  );
}

export default Nav;