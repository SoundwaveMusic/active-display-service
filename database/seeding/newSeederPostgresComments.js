const fs = require('fs');
const random = require('./random.js');

let recordsWritten = 0;

const commentsStream = fs.createWriteStream('commentsData.csv');

const streamFinish = (message, timer) => {
  console.log(message);
  console.timeEnd(timer);
};

const streamError = (err) => { console.error('ERROR', err); };

commentsStream.on('finish', () => {
  const message = `Comment stream finished\nRecords created: ${recordsWritten}`;
  streamFinish(message, 'commentsStream');
});

commentsStream.on('error', streamError);

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

const createComments = (i, songId) => {
  const newSongLength = songLengths[songId % songLengths.length];
  const comments = random.commentsGenerator(newSongLength);
  let c = '';

  comments.forEach((comment, j) => {
    const arr = [
      i + j,
      songId,
      comment.username,
      comment.avatar,
      comment.text,
      comment.timestampInSeconds
    ];

    c = c + arr.join(',') + '\n';
  });

  recordsWritten += comments.length;

  return [i + comments.length, c];
};

const write10000000Times = () => {
  console.time('commentsStream');
  let i = 1;
  const maxRecords = 10000000;

  const write = () => {
    let ok = true;
    while (i <= maxRecords && ok) {
      const data = createComments(recordsWritten + 1, i);
      if (i === maxRecords) {
        // Last time!
        commentsStream.end(data[1]);
      } else {
        // See if we should continue, or wait.
        // Don't pass the callback, because we're not done yet.
        ok = commentsStream.write(data[1]);
      }
      i += 1;
    }
    if (i <= maxRecords) {
      // Had to stop early!
      // Write some more once it drains.
      commentsStream.once('drain', write);
    }
  };

  write();
};

write10000000Times();