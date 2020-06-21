/* eslint-disable no-console */
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// prints ip as string to console or error if found
fetchMyIP((err, ip) => {
  if (err) {
    return console.log('it did not work', err);
  }
  // prints out the latitude & longitude of given ip
  fetchCoordsByIP(ip, (error, data) => {
    if (error) {
      return console.log('it did not work', error);
    }
    const { latitude, longitude } = data;
    return console.log({ latitude, longitude });
  });
  return console.log(ip);
});
