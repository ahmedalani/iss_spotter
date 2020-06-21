/* eslint-disable no-console */
const { fetchMyIP } = require('./iss');

// prints ip as string to console or error if found
fetchMyIP((err, ip) => {
  if (err) {
    return console.log('it did not work', err);
  }
  return console.log(ip);
});
