const convertToCelsius = function(foo) {
  let C = (foo - 32) * .5555555556
  let cRound = Math.round(C * 10) / 10
  return cRound
};

const convertToFahrenheit = function(barr) {
  let F = (barr * 1.8) + 32
  let fRound = Math.round(F * 10) /10
  return fRound
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
