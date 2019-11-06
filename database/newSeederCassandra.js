const fs = require('fs');
const faker = require('faker');
const random = require('./random.js');

const stream = fs.createWriteStream('data.csv');

stream.on('finish', () => {
  console.log('Writing ended');
  console.timeEnd();
  console.log('Records created: ' + recordsCreated);
});

stream.on('error', (err) => {
  console.error('ERROR', err);
});

let recordsCreated = 0;

const createRecordSet = (i) => {
  const recordSet = [];
  const n16 = faker.random.number({ min: 1, max: 16 });
  const newSongLength = random.lengthInSecondsGenerator();
  const songData = [
    i,                                      // id
    random.titleGenerator(),                // title
    random.artistGenerator(),               // artist
    random.artworkGenerator(n16),           // artwork (url)
    random.postingGenerator(),              // postingDate
    random.tagGenerator(),                  // tag
    random.waveformGenerator(),             // waveform (url)
    newSongLength,                          // lengthInSeconds
    random.currentTimestampGenerator(),     // currentTimestampInSeconds
  ];

  const comments = random.commentsGenerator(newSongLength);
  recordsCreated += comments.length;

  comments.forEach((comment, j) => {
    const commentsDataArray = [
      j + 1,
      comment.username,
      comment.avatar,
      comment.text,
      comment.timestampInSeconds,
    ];

    const record = songData.concat(commentsDataArray).join(',');
    recordSet.push(record);
  });

  return recordSet.join('\n') + '\n';
};

function write10000000Times() {
  console.time();
  let i = 10000000;
  write();
  function write() {
    let ok = true;
    do {
      var data = createRecordSet(i)
      i--;
      if (i === 0) {
        // Last time!
        stream.write(data);
        stream.end();
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = stream.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      stream.once('drain', write);
    }
  }
}

write10000000Times();
