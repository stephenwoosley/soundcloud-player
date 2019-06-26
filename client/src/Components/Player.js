import React from 'react';
// const SoundCloudAudio = require('soundcloud-audio');
// const player = new SoundCloudAudio('95f22ed54a5c297b1c41f72d713623ef');

class Player extends React.Component {

  play = () => {
    console.log("playing?")
    // player.resolve("https://soundcloud.com/tame-impala/borderline", function (track) {
    //     player.play();
    // });
  }

  render() {
    return (
      <button 
      onClick={() => this.play()}
      >
        Play
      </button>

    );
  }
}

export default Player;