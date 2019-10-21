import React from 'react';
import WaveformPlayer from './waveformPlayer.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playClicked: false,
      currentTimestamp: props.songData.currentTimestampInSeconds,
    };
  }

  changePlayPauseButton({ target }) {
    const newButtonId = this.state.playClicked ? 'display-play-button' : 'display-pause-button';
    document.getElementById('display-none').id = newButtonId;
    target.id = "display-none";
    this.setState((state) => ({ playClicked: !state.playClicked }));
  }

  goToArtistPage({ target }) {
    alert(`This would send you to the profile page for ${target.innerHTML}`);
  }
  goToPopularTracksForTag({ target }) {
    alert(`This would send you to the Most Popular Tracks for ${target.innerHTML} page`);
  }

  render() {
    console.dir(this.props);
    return (
      <>
        <div id="display-play-button" className="play-pause-button" onClick={(event) => this.changePlayPauseButton(event)}></div>
        <div id="display-none" className="play-pause-button" onClick={(event) => this.changePlayPauseButton(event)}></div>
        <table id="song-info-table">
          <tbody>
            <tr>
              <td><div id="artist" className="text" onClick={(event) => this.goToArtistPage(event)}>{this.props.songData.artist}</div></td>
            </tr>
            <tr>
              <td><div id="song-name" className="text">{this.props.songData.title}</div></td>
            </tr>
          </tbody>
        </table>
        <img src={this.props.songData.artwork} id="album-artwork"/>
        <table id="song-meta-table">
          <tbody>
            <tr>
              <td><div id="post-date" className="text">3 years ago</div></td>
            </tr>
            <tr>
              <td><div id="tag" className="text" onClick={(event) => this.goToPopularTracksForTag(event)}>{this.props.songData.tag}</div></td>
            </tr>
          </tbody>
        </table>
        <WaveformPlayer songData={this.props.songData} timestamp={this.state.currentTimestamp} />
      </>
    );
  }
};
