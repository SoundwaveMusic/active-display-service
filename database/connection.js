const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'jastdance',
  port: 5432
});

pool.on('error', (err, client) => {
  console.log('Error on clicent', err);
  process.exit(-1);
});

pool.connect();

module.exports = pool;
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/display');

// const database = mongoose.connection;

// database.on('error', console.error.bind(console, 'connection error:'));
// database.once('open', () => {});

// const songSchema = new mongoose.Schema({
//   id: {
//     type: Number,
//     unique: true,
//   },
//   artist: String,
//   title: String,
//   artwork: String, // ← This is a URL String
//   postingDate: Date,
//   tag: String,
//   waveform: String, // ← This is a URL String
//   lengthInSeconds: Number,
//   currentTimestampInSeconds: Number,
//   comments: [
//     {
//       username: String,
//       avatar: String, // ← This is a URL String
//       text: String,
//       timestampInSeconds: Number,
//     },
//   ],
// });

// const Song = mongoose.model('Song', songSchema);

// const findOneSong = (songId, callback) => {
//   Song.find({ id: songId }).exec((_, song) => callback(song));
// };
// const updateOneSong = (songId, updateKeyAndValue, callback) => {
//   Song.update({ id: songId }, updateKeyAndValue).exec((_, song) => callback(song));
// };

// module.exports = {
//   database,
//   Song,
//   findOneSong,
//   updateOneSong,
// };
