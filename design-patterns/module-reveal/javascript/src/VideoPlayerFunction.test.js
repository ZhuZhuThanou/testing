const chai = require('chai');
const { expect } = chai;

const videoPlayer = require('./VideoPlayerFunction');

describe('VideoPlayerFunction', () =>{
  beforeEach(() => {
    videoPlayer.clearVideoQueue();
  });

  it('video count', ()=> {
    // delta assert
    const defaultCount = videoPlayer.numberOfVideos();
    videoPlayer.addVideoToQueue('Funny-video');
    expect(defaultCount + 1).to.be.equal(videoPlayer.numberOfVideos());
  });
});