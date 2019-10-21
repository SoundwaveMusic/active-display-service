import React from 'react';
import WaveformPlayer from './waveformPlayer.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playClicked: false,
      currentTimestamp: props.songData.currentTimestampInSeconds,
      currentIntervalId: 0,
    };
  }

  changePlayPauseButton({ target }) {
    const newButtonId = this.state.playClicked ? 'display-play-button' : 'display-pause-button';
    document.getElementById('display-none').id = newButtonId;
    target.id = "display-none";
    this.setState((state) => ({ playClicked: !state.playClicked }));
  }
  startPlayTimer() {
    const intervalId = setInterval((() => {
      this.setState((state) => { return { currentTimestamp: (state.currentTimestamp + 1) } });
    }).bind(this), 1000);
    this.setState({ currentIntervalId: intervalId });
  }
  stopPlayTimer() {
    clearInterval(this.state.currentIntervalId);
  }
  goToArtistPage({ target }) {
    alert(`This would send you to the profile page for ${target.innerHTML}`);
  }
  goToPopularTracksForTag({ target }) {
    alert(`This would send you to the Most Popular Tracks for ${target.innerHTML} page`);
  }
  popoutArtworkWindow({ target }) {
    // console.dir(document.getElementById('app'));
    // document.getElementById('app').style.setProperty('filter', 'grayscale(100%)');
    target.nextSibling.classList.remove('hidden');
  }
  closeArtworkWindow({ target }) {
    // console.dir(target);
    // document.getElementById('app').style.setProperty('filter', 'none');
    target.parentNode.classList.add('hidden');
  }

  render() {
    return (
      <>
        <div id="display-play-button" className="play-pause-button" onClick={(event) => {
          this.changePlayPauseButton(event);
          this.startPlayTimer();
        }}></div>
        <div id="display-none" className="play-pause-button" onClick={(event) => {
          this.changePlayPauseButton(event);
          this.stopPlayTimer();
        }}></div>
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
        <img src={this.props.songData.artwork} id="album-artwork" onClick={(event) => this.popoutArtworkWindow(event)} />
        <div id="popout-artwork-window" className="hidden">
          <div id="x-to-closeout" onClick={(event) => this.closeArtworkWindow(event)}>x</div>
          <div id="popout-info-pane">
            <h1>{this.props.songData.title}</h1>
            <img src={this.props.songData.artwork} id="popout-album-artwork" />
          </div>
        </div>
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
