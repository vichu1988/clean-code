/**
 * Created by vsury1 on 12/22/16.
 */
var constants = require('./constants');

function divisibleBy(input, divisor) {
  return ((input % divisor) === 0);
}

function fizzOrBuzz(input) {

  return divisibleBy(input, 3) ? (divisibleBy(input, 5) ? constants.FIZZBUZZ : constants.FIZZ) : (divisibleBy(input, 5) ? constants.BUZZ : input);

}

module.exports = {
  fizzOrBuzz: fizzOrBuzz
};
