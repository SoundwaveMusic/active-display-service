require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip');
// const faker = require('faker');


const {
  getCommentsBySongId,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
} = require('../database/models/comment.js');

const app = express();
const port = 3050;

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (request, response) => {
  expressStaticGzip('/', {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    },
  });
  // response.send(express.static(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/song/random', (req, res, next) => {
  req.params.songId = Math.floor(Math.random() * 10000000);
  getCommentsBySongId(req, res, next);
})

app.get('/api/song/:songId/comments/', getCommentsBySongId);

app.get('/api/comment/:commentId', getCommentById);

app.post('/api/comment/', createComment);

app.put('/api/comment/:commentId', updateComment);

app.delete('/api/comment/:commentId', deleteComment);

// Finds a /########## string, where # => any digit
// app.get(/(?:\/\d{10})(?!.)/, (request, response) => {
//   router.retrieveSong(request.url.match(/(?:\d{10})/), (song) => {
//     console.log('The song requested was id: \n', song[0].id);
//     response.send(song);
//   });
// });

// // Finds a /##########/song-play string, where # => any digit
// app.get(/(?:\/\d{10}\/song-play)(?!.)/, (request, response) => {
//   router.retrieveSong(request.url.match(/(?:\d{10})/), (song) => {
//     console.log('The song to play was id: \n', song[0].id);
//     response.send(song.currentTimestampInSeconds);
//   });
// });

// // Finds a /##########/song-pause string, where # => any digit
// app.post(/(?:\/\d{10}\/song-pause)(?!.)/, (request, response) => {
//   router.updateSong(request.url.match(/(?:\d{10})/), request.body.newTimestamp, (song) => {
//     console.log('The song to pause was id: \n', song[0].id);
//     response.send(song.currentTimestampInSeconds);
//   });
// });
// // Finds a /##########/song-scrub string, where # => any digit
// app.post(/(?:\/\d{10}\/song-scrub)(?!.)/, (request, response) => {
//   router.updateSong(request.url.match(/(?:\d{10})/), request.body.newTimestamp, (song) => {
//     console.log('The song to scrub was id: \n', song[0].id);
//     response.send(song.currentTimestampInSeconds);
//   });
// });

app.listen(port, () => console.log(`Server is up and running!  \nListening on port ${port}`));
