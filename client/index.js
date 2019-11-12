import React from 'react';
import ReactDOM from 'react-dom';
import Display from './components/app.js';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const url = `/api/song/${id}/comments`;

const transformSongData = (data) => {
  if (data.length === 0) {
    return data;
  }

  return {
    id: data[0].songid,
    artist: data[0].artist,
    title: data[0].title,
    artwork: data[0].artwork,
    postingDate: data[0].postingdate,
    waveform: data[0].waveform,
    lengthInSeconds: data[0].songlength,
    currentTimestampInSeconds: data[0].currenttimestamp,
    tag: data[0].tag,
    comments: data.map((d) => {
      return {
        username: d.username,
        avatar: d.avatar,
        text: d.comment,
        timestampInSeconds: d.commenttimestampinseconds
      };
    })
  };
};

fetch(url)
  .then(response => response.json())
  .then(data => transformSongData(data))
  .then(songData => {
    ReactDOM.render(<Display songData={songData}/>, document.getElementById('Display'));
  })
  .catch(err => {
    const errorMessage = 'Whoops! There was an error retrieving this song from our database'
    ReactDOM.render(<div><h1>{errorMessage}</h1></div>, document.getElementById('Display'));
  });
