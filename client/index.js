import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/app.js';

const currentSongIdsInDatabase = {
  '5996737003': 5996737003,
  '6335285008': 6335285008,
  '4449711013': 4449711013,
  '6468773001': 6468773001,
  '4346373006': 4346373006,
  '2544168011': 2544168011,
  '7985724004': 7985724004,
  '5647517009': 5647517009,
  '7252256014': 7252256014,
  '1543976000': 1543976000,
  '1047733005': 1047733005,
  '1602675010': 1602675010,
  '6353256002': 6353256002,
  '8206215007': 8206215007,
  '5299255012': 5299255012,
  '5816213015': 8651093013,
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
