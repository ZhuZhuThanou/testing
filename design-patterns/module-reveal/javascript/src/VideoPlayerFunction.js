
let VideoPlayer = function () {
  // No one can directly access our Video list
  const _videoList = [];  

  // Expose all these functions to the user
  function play () {
    console.log('Playing the next video');
  }

  function pause () {
    console.log('Video paused!');
  }

  function addVideoToQueue (Video) {
    _videoList.push(Video);
    console.log('added a Video');
  }

  function clearVideoQueue() {
    _videoList = [];
  }

  function VideoCount() {
    return _videoList.length;
  }

  function showNextVideo () {
    console.log('The next Video is ', _videoList[0]);
  }

  // Hide this function
  function _loadVideo() {
    filesystem.loadNextVideo();
  }

  return {
    playVideo: play,
    pauseVideo: pause,
    showNextVideo,
    addVideoToQueue,
    clearVideoQueue,
    numberOfVideos: VideoCount,
  }
}

module.exports = new VideoPlayer();
