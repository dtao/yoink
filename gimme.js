var request = require('request');

function prettifyJSON(json) {
  return JSON.stringify(JSON.parse(json), null, 2);
}

module.exports = function gimme(url) {
  request(url, function(error, response, body) {
    if (error) {
      console.error(error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Error: ' + response.statusCode + ' status');
      return;
    }

    console.log(prettifyJSON(body));
  });
};
