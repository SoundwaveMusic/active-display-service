import React from 'react';
import WaveformPlayer from './waveformPlayer.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div id="play-pause-button"></div>
        <table>
          <tr>
            <td><div id="artist" className="text">Childish Gambino</div></td>
            <td><div id="post-date">3 years ago</div></td>
          </tr>
          <tr>
            <td><div id="song-name" className="text">This is America</div></td>
            <td><div id="tag">#Hip-Hop</div></td>
          </tr>
        </table>
        <div id="album-artwork"></div>
        <WaveformPlayer />
      </>
    );
  }
};

export default App;
