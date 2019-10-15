const faker = require('faker');

const idGenerator = (baseId) => {
  let baseIdWithLeadingZeros = baseId.toString();
  if (baseIdWithLeadingZeros.length < 3) {
    baseIdWithLeadingZeros = baseIdWithLeadingZeros.length > 1 ? '0'.concat(baseIdWithLeadingZeros) : '00'.concat(baseIdWithLeadingZeros);
  }
  return (Math.floor(Math.random() * 10000000).toString()).concat(baseIdWithLeadingZeros);
};
const artistGenerator = () => faker.name.firstName.concat(' ', faker.name.lastName);
const titleGenerator = () => faker.commerce.color.concat(' ', faker.hacker.noun);
const artworkGenerator = () => faker.image.image();
const postingGenerator = () => faker.date.between('01-01-2014', '10-10-2019');
const tagGenerator = () => {
  const tagOptions = ['#Hip-Hop', '#Classic Rock', '#Indie Rock', '#Pop'];
  const randomSelection = Math.floor(Math.random() * 4);
  return tagOptions[randomSelection];
};
const waveformGenerator = () => {
  const waveformOptions = ['waveform-1', 'waveform-2', 'waveform-3', 'waveform-4'];
  const randomSelection = Math.floor(Math.random() * 4);
  return `http://127.0.0.1:3050/images/${waveformOptions[randomSelection]}`;
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
  for (let i = 0; i < songLength; i += 1) {
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
  backgroundGenerator,
  postingGenerator,
  tagGenerator,
  waveformGenerator,
  lengthInSecondsGenerator,
  currentTimestampGenerator,
  commentsGenerator,
};
