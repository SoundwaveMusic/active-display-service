import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/app.js';

const currentSongIdsInDatabase = {
  '4500000000': 4500000000,
  '4500000001': 4500000001,
  '4500000002': 4500000002,
  '4500000003': 4500000003,
  '4500000004': 4500000004,
  '4500000005': 4500000005,
  '4500000006': 4500000006,
  '4500000007': 4500000007,
  '4500000008': 4500000008,
  '4500000009': 4500000009,
  '4500000010': 4500000010,
  '4500000011': 4500000011,
  '4500000012': 4500000012,
  '4500000013': 4500000013,
  '4500000014': 4500000014,
  '4500000015': 4500000015,
}
const newRandomId = Object.keys(currentSongIdsInDatabase)[Math.floor(Math.random() * 16)];

$.ajax({
  method: "GET",
  url: `http://127.0.0.1:3050/${newRandomId}`,
  success: (songData) => {
    ReactDOM.render(<App songData={songData[0]}/>, document.getElementById('app'));
  },
  failure: () => {
    ReactDOM.render(<div><h1>Whoops! There was an error retrieving this song from our database</h1></div>, document.getElementById('app'));  }
});
