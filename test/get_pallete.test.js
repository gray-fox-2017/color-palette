var chai = require('chai');
var getPallete = require('../lib/get_pallete.js');
var assert = chai.assert;

describe('getPallete', function() {
  it('should return an array that contains 3 elements', function() {
    assert.equal(getPallete().length, 3);
  })
})
