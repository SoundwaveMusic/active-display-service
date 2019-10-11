const faker = require('faker');

const brandNewIdGenerator = (baseId) => {
  let baseIdWithLeadingZeros = baseId.toString();
  if (baseIdWithLeadingZeros.length < 3) {
    baseIdWithLeadingZeros = baseIdWithLeadingZeros.length > 1 ? '0'.concat(baseIdWithLeadingZeros) : '00'.concat(baseIdWithLeadingZeros);
  }

  return (Math.floor(Math.random() * 10000000).toString()).concat(baseIdWithLeadingZeros);
};

module.exports = {
  brandNewIdGenerator,
};
