function PlayerTimeControl({ timeInfo }) {
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

  return (
    <div className="py-4 max-w-lg w-full flex items-center text-gray-500">
      <p className="w-14 text-center">{formatTime(timeInfo.currentTime)}</p>
      <input className="py-4 flex-1" type="range" name="" id=""/>
      <p className="w-14 text-center">{formatTime(timeInfo.duration)}</p>
    </div>
  );
}

export default PlayerTimeControl;