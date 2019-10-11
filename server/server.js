const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/router.js');

const app = express();
const port = 3050;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (_, response) => {
  response.send(express.static(__dirname, '..', 'public', 'index.html'));
});

// Finds a /########## string, where # => any digit
app.get(/(?:\/\d{10})(?!.)/, (request, response) => {
  router.getSong(request.url.match(/(?:\d{10})/), (song) => {
    console.log('The song requested was id: \n', song[0]);
    response.send(song);
  });
});

// Finds a /##########/song-play string, where # => any digit
app.get(/(?:\/\d{10}\/song-play)(?!.)/, (request, response) => {
  router.getSong(request.url.match(/(?:\d{10})/), (song) => {
    console.log('The song to play was id: \n', song[0]);
    response.send(song);
  });
});

// Finds a /##########/song-pause string, where # => any digit
app.post(/(?:\/\d{10}\/song-pause)(?!.)/, (request, response) => {
  router.getSong(request.url.match(/(?:\d{10})/), (song) => {
    console.log('The song to pause was id: \n', song[0]);
    response.send(song);
  });
});
// Finds a /##########/song-scrub string, where # => any digit
app.post(/(?:\/\d{10}\/song-scrub)(?!.)/, (request, response) => {
  router.getSong(request.url.match(/(?:\d{10})/), (song) => {
    console.log('The song to scrub was id: \n', song[0]);
    response.send(song);
  });
});

app.listen(port, () => console.log(`Server is up and running!  \nListening on port ${port}`));
