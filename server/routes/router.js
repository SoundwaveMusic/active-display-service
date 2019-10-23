const database = require('../../database/connection.js');

const retrieveSong = (songId, callback) => {
  database.findOneSong(songId, (song) => callback(song));
};

const updateSong = (songId, newTimestamp, callback) => {
  const updateOptions = { currentTimestampInSeconds: newTimestamp };
  database.updateOneSong(songId, updateOptions, (song) => callback(song));
};

module.exports = {
  retrieveSong,
  updateSong,
};
