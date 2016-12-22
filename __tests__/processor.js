/**
 * Created by vsury1 on 12/22/16.
 */
var expect = require('chai').expect;
var processor = require('../processor');
var constants = require('../constants');

describe('processor suite!', function () {

  it('so happens that 3 or anything divisible by only 3 becomes FIZZ', function () {
    expect(constants.FIZZ).equals(processor.fizzOrBuzz(3));
  });

  it('so happens that 5 or anything divisible by only 5 then becomes BUZZ', function () {
    expect(constants.BUZZ).equals(processor.fizzOrBuzz(5));
  });

  it('so happens that 15 or anything divisible by 3 or 5 sudddenly becomes FIZZBUZZ', function () {
    expect(constants.FIZZBUZZ).equals(processor.fizzOrBuzz(15));
  });

  it('so happens that anything else just comes back as is', function () {
    expect(8).equals(processor.fizzOrBuzz(8));
  });

});
