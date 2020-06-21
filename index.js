/* eslint-disable no-console */
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

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
    fetchISSFlyOverTimes(data, (errFlyOver, dataFlyOver) => {
      if (errFlyOver) {
        return console.log('it did not work', errFlyOver);
      }
      return console.log(dataFlyOver);
    });
    return console.log({ latitude, longitude });
  });
  return console.log(ip);
});
