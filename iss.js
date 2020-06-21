/* eslint-disable func-names */
const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', (err, res, body) => {
    // handle error if request faild
    if (err) {
      return callback(err);
    }
    // if non-200 status, assume server error
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching IP. Response: ${body}`;
      return callback(Error(msg), null);
    }
    // use the callback to pass the ip return in body
    const { ip } = JSON.parse(body);
    return callback(null, ip);
  });
};
const fetchCoordsByIP = function (ip, callback) {
  request(`https://ipvigilante.com/${ip}`, (err, res, body) => {
    if (err) {
      return callback(err, null);
    }
    // if non-200 status, assume server error
    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching data. Response: ${body}`;
      return callback(msg, null);
    }
    // use the callback to pass the data
    const { data } = JSON.parse(body);
    return callback(null, data);
  });
};


module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};
