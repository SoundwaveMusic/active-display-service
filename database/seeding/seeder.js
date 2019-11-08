const database = require('./connection.js');
const random = require('./random.js');

let iterator = 0;
while (iterator < 16) {
  const newSongLength = random.lengthInSecondsGenerator();
  const newSongOptions = {
    id: random.idGenerator(iterator),
    artist: random.artistGenerator(),
    title: random.titleGenerator(),
    artwork: random.artworkGenerator(iterator), // ← This is a URL String
    postingDate: random.postingGenerator(),
    tag: random.tagGenerator(),
    waveform: random.waveformGenerator(), // ← This is a URL String
    lengthInSeconds: newSongLength,
    currentTimestampInSeconds: random.currentTimestampGenerator(),
    comments: random.commentsGenerator(newSongLength),
  };
  const newSong = new database.Song(newSongOptions);
  newSong.save(() => console.log(`Song ID#${newSong.id} was saved to the database`));
  iterator += 1;
}
