const { Pool } = require('pg');
const secret = require('./dbConfig.js');

const pool = new Pool({
  host: secret.host || 'localhost',
  database: secret.database || 'postgres',
  port: secret.port || 5432,
  user: secret.user || 'postgres',
  password: secret.password || 'postgres',
  max: 10
});

pool.on('error', (err, client) => {
  console.log('Error on clicent', err);
  process.exit(-1);
});

pool.connect();

module.exports = pool;
