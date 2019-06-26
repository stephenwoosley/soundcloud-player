import React from 'react';
import './App.css';
// import Player from './Components/Player';
// import * as SC from './utils/soundcloud';
// import api from './utils/api';
var SC = require('soundcloud');

// export default App;

// const clientId = '95f22ed54a5c297b1c41f72d713623ef';
// const tameImpala = 'https://soundcloud.com/tame-impala/borderline';

// you can even use functional components!
// const CustomPlayer = withSoundCloudAudio(props => {
//   const { soundCloudAudio, playing, track } = props;
//   const play = () => {
//     if (playing) {
//       soundCloudAudio.pause();
//     } else {
//       soundCloudAudio.play();
//     }
//   };

//   if (!track) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{track.title}</h2>
//       <h3>{track.user.username}</h3>
//       <button onClick={() => play()}>
//         {playing ? 'Pause' : 'Play'}
//       </button>
//     </div>
//   );
// });

class App extends React.Component {

  componentDidMount() {
    SC.initialize({
      client_id: '95f22ed54a5c297b1c41f72d713623ef'
    })
    // SC.oEmbed(tameImpala);
  }

  getTameTrack() {
    // SC.get('/user/tame-impala/tracks').then(function(tracks){
    //   console.log('Latest track: ' + tracks[0].title);
    // });
    SC.get('/tracks', {
      genres: 'punk', bpm: { from: 120 }
    }).then(function(tracks) {
      console.log(tracks);
    });
    SC.oEmbed('http://soundcloud.com/tame-impala/borderline', {
    element: document.getElementById('putTheWidgetHere')
  });
  }

  render() {
    return (
      // <CustomPlayer
      //   resolveUrl={resolveUrl}
      //   clientId={clientId}
      //   onReady={() => {
      //     console.log('player url ready!');
      //   }} />
      <div>
        <h1>Testing time</h1>
        <button onClick={this.getTameTrack}>Try me</button>
        <div id="putTheWidgetHere"></div>
      </div>
      
    );
  }
}

export default App;
