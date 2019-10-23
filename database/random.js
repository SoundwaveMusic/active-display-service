const faker = require('faker');

const idGenerator = (baseId) => {
  let baseIdWithLeadingZeros = baseId.toString();
  if (baseIdWithLeadingZeros.length < 3) {
    baseIdWithLeadingZeros = baseIdWithLeadingZeros.length > 1 ? '0'.concat(baseIdWithLeadingZeros) : '00'.concat(baseIdWithLeadingZeros);
  }
  /**
  * CODE BELOW KEPT IF NEEDED FOR ACTUAL RANDOMIZATION OF IDS
  * let randomNumber = Math.floor(Math.random() * 10000000).toString();
  * randomNumber = randomNumber.length < 10 ? randomNumber.concat('0000000000') : randomNumber;
  * randomNumber = randomNumber.slice(0, 7);
  */
  const randomNumber = (4500000).toString();
  return (randomNumber).concat(baseIdWithLeadingZeros);
};
const artistGenerator = () => faker.name.firstName().concat(' ', faker.name.lastName());
const titleGenerator = () => faker.commerce.color().concat(' ', faker.hacker.noun());
const artworkGenerator = (iterator) => {
  const tagOptions = [
    '1.jpg',
    '2.jpg',
    '3.jpeg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.png',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpeg',
    '13.jpg',
    '14.jpg',
    '15.gif',
    '16.jpg',
  ];
  // const randomSelection = Math.floor(Math.random() * 16);
  return `http://127.0.0.1:3050/images/artwork-${tagOptions[iterator]}`;
};
const postingGenerator = () => faker.date.between('01-01-2014', '10-10-2019');
const tagGenerator = () => {
  const tagOptions = ['Hip-Hop', 'Classic Rock', 'Indie Rock', 'Pop'];
  const randomSelection = Math.floor(Math.random() * 4);
  return '# '.concat(tagOptions[randomSelection]);
};
const waveformGenerator = () => {
  const waveformOptions = ['waveform-1', 'waveform-2', 'waveform-3', 'waveform-4'];
  const randomSelection = Math.floor(Math.random() * 4);
  return `http://127.0.0.1:3050/images/${waveformOptions[randomSelection]}.svg`;
};
const lengthInSecondsGenerator = () => {
  const lengthLimits = {
    lowerLimit: 110,
    upperLimit: 250,
  };
  const limitDifference = lengthLimits.upperLimit - lengthLimits.lowerLimit;
  const randomLengthAddition = Math.floor(Math.random() * limitDifference);
  return lengthLimits.lowerLimit + randomLengthAddition;
};
const currentTimestampGenerator = () => 0;
const commentsGenerator = (songLength) => {
  const allNewComments = [];
  for (let i = 0; i < songLength; i += 20) {
    const newComment = {
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
      text: faker.lorem.sentence(),
      timestampInSeconds: Math.floor(Math.random() * songLength),
    };
    allNewComments.push(newComment);
  }
  return allNewComments;
};

module.exports = {
  idGenerator,
  artistGenerator,
  titleGenerator,
  artworkGenerator,
  postingGenerator,
  tagGenerator,
  waveformGenerator,
  lengthInSecondsGenerator,
  currentTimestampGenerator,
  commentsGenerator,
};
