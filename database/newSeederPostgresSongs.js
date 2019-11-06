const fs = require('fs');
const faker = require('faker');
const random = require('./random.js');

let recordsWritten = 0;

const songStream = fs.createWriteStream('songsData.csv');

const streamFinish = (message, timer) => {
  console.log(message);
  console.timeEnd(timer);
};

const streamError = (err) => { console.error('ERROR', err); };

songStream.on('finish', () => {
  const message = `Song stream finished\nRecords created: ${recordsWritten}`;
  streamFinish(message, 'songStream');
});

songStream.on('error', streamError);

const songLengths = [
  137,
  148,
  222,
  180,
  129,
  177,
  114,
  198,
  142,
  200,
];

const createSong = (i) => {
  const n16 = faker.random.number({ min: 1, max: 16 });
  const songData = [
    i,                                      // id
    random.titleGenerator(),                // title
    random.artistGenerator(),               // artist
    random.artworkGenerator(n16),           // artwork (url)
    random.postingGenerator(),              // postingDate
    random.tagGenerator(),                  // tag
    random.waveformGenerator(),             // waveform (url)
    songLengths[i % songLengths.length],    // lengthInSeconds
    random.currentTimestampGenerator(),     // currentTimestampInSeconds
  ];

  return songData.join(',') + '\n';
};

const write10000000Times = () => {
  console.time('songStream');
  let i = 1;
  const maxRecords = 10000000;

  const write = () => {
    let ok = true;
    while (i <= maxRecords && ok) {
      const data = createSong(i);
      if (i === maxRecords) {
        // Last time!
        songStream.end(data);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = songStream.write(data);
      }
      i += 1;
      recordsWritten += 1;
    }
    if (i <= maxRecords) {
      // Had to stop early!
      // Write some more once it drains.
      songStream.once('drain', write);
    }
  };

  write();
};

write10000000Times();
