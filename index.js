/* eslint-disable no-console, func-names, no-restricted-syntax */
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require('./iss');

// prints ip as string to console or error if found
// fetchMyIP((err, ip) => {
//   if (err) {
//     return console.log('it did not work', err);
//   }
//   // prints out the latitude & longitude of given ip
//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       return console.log('it did not work', error);
//     }
//     const { latitude, longitude } = data;
//     fetchISSFlyOverTimes(data, (errFlyOver, dataFlyOver) => {
//       if (errFlyOver) {
//         return console.log('it did not work', errFlyOver);
//       }
//       return console.log(dataFlyOver);
//     });
//     return console.log({ latitude, longitude });
//   });
//   return console.log(ip);
// });

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const { duration } = pass;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
  // console.log(passTimes);
});
