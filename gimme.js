var request = require('request');

function prettyJSON(data) {
  return JSON.stringify(data, null, 2);
}

function applyQuery(data, query) {
  return query.split('.').reduce(function(result, property) {
    if (result instanceof Array) {
      return result.map(function(element) {
        return element[property];
      });
    } else {
      return result[property];
    }
  }, data);
}

module.exports = function gimme(url, options) {
  request(url, function(error, response, body) {
    if (error) {
      console.error(error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error('Error: ' + response.statusCode + ' status');
      return;
    }

    var data = JSON.parse(body);

    if (options.query) {
      data = applyQuery(data, options.query);
    }

    if (options.limit && data instanceof Array && options.limit < data.length) {
      data = data.slice(0, Math.max(options.limit, 0));
    }

    console.log(prettyJSON(data));
  });
};
