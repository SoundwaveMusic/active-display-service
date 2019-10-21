import React from 'react';

export default class WaveformPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  changeTimeToMinutesAndSeconds(timestamp) {
    const minutes = Math.floor(timestamp/60);
    let minutesString = minutes.toString();
    minutesString = minutesString.length === 1 ? '0'.concat(minutesString) : minutesString;
    const seconds = timestamp - (minutes * 60);
    let secondsString = seconds.toString();
    secondsString = secondsString.length === 1 ? '0'.concat(secondsString) : secondsString;
    return `${minutesString}:${secondsString}`;
  }

  render() {
    return (
      <>
        <img src={this.props.songData.waveform} id="waveform"/>
        <div id="current-timestamp">{this.changeTimeToMinutesAndSeconds(this.props.timestamp)}</div>
        <div id="song-length">{this.changeTimeToMinutesAndSeconds(this.props.songData.lengthInSeconds)}</div>
      </>
    );
  }
};
