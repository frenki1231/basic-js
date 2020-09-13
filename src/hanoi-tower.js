const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  return {
    turns: 2**disksNumber-1,
    seconds: Math.trunc(((2**disksNumber-1)/turnsSpeed)*60*60)
  }
};
