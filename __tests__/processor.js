/**
 * Created by vsury1 on 12/22/16.
 */
var expect = require('chai').expect;
var processor = require('../processor');
var constants = require('../constants');

describe('FizzBuzz Processor Suite!', function () {

  it('3 or anything divisible by only 3 becomes FIZZ', function () {
    expect(constants.FIZZ).equals(processor.fizzOrBuzz(3));
  });

  it('5 or anything divisible by only 5 then becomes BUZZ', function () {
    expect(constants.BUZZ).equals(processor.fizzOrBuzz(5));
  });

  it('15 or anything divisible by 3 or 5 suddenly becomes FIZZBUZZ', function () {
    expect(constants.FIZZBUZZ).equals(processor.fizzOrBuzz(15));
  });

  it('anything else just comes back as is', function () {
    expect(8).equals(processor.fizzOrBuzz(8));
  });

});
