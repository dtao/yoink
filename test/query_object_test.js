require('should');

describe('queryObject', function() {
  var queryObject = require('../gimme').queryObject;

  it('"reaches in" to the given nested property', function() {
    queryObject({foo: {bar: {baz: 1}}}, 'foo.bar.baz').should.eql(1);
  });

  it('applies the given query to all elements of an array', function() {
    queryObject([{foo: {bar: 1}}, {foo: {bar: 2}}], 'foo.bar').should.eql([1, 2]);
  });
});
