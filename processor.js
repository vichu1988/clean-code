/**
 * Created by vsury1 on 12/22/16.
 */
var constants = require('./constants');

function divisibleBy(input, divisor) {
  return ((input % divisor) === 0);
}

function fizzOrBuzz(input) {

  switch (input) {
    case (divisibleBy(input, 3)):
      return constants.FIZZ;
      break;

    case (divisibleBy(input, 5)):
      return constants.BUZZ;

    case (divisibleBy(input, 3) && divisibleBy(input, 5)):
      return constants.FIZZBUZZ;

    default:
      return input;

  }

}

module.exports = {
  fizzOrBuzz: fizzOrBuzz
};
