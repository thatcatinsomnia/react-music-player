function PlayerTimeControl({ timeInfo, setTimeInfo, audioRef }) {
  const getMinutes = time => {
    return ('0' + Math.floor(time / 60)).slice(-2);
  };

  // return the last 2 number in seconds
  // example: 059 -> 59, 001 -> 01, 060 -> 60
  const getSeconds = time => {
    return ('0' + Math.floor(time % 60)).slice(-2);
  };

  const formatTime = time => {
    return getMinutes(time) + ':' + getSeconds(time);
  };

  const dragHandler = event => {
    audioRef.current.currentTime = event.target.value; 
    setTimeInfo({...timeInfo, currentTime: event.target.value });
  };

  return (
    <div className="px-1 py-4 max-w-xl w-full flex items-center text-gray-500">
      <p className="w-14 text-center text-sm sm:text-lg sm:w-16 sm:px-2">{formatTime(timeInfo.currentTime)}</p>
      <input className="py-4 flex-1" type="range" 
        min="0" 
        max={timeInfo.duration || 0} 
        value={timeInfo.currentTime || 0}
        step="0.000001"
        onChange={dragHandler}
      />
      <p className="w-14 text-center text-sm sm:text-lg sm:w-16 sm:px-2">{timeInfo.duration ? formatTime(timeInfo.duration) : '00:00' }</p>
    </div>
  );
}

export default PlayerTimeControl;