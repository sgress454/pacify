var mapping = require('./allowable-bad-characters');

var convertAllowableBadCharsToEnglish = function(string) {

  if (typeof string !== 'string') {throw new Error("Input must be a string!");}

  var chars = string.split('');
  return chars.map(function(char, index) {
    if (mapping[char]) {
      var transformed = '';
      var previousChar = chars[index - 1];
      var nextChar = chars[index + 1];
      if (previousChar && previousChar != '_' && !mapping[previousChar]) {
        transformed += '_';
      }
      transformed += mapping[char];
      if (nextChar && nextChar != '_' && !mapping[nextChar]) {
        transformed += '_';
      }
      return transformed;
    } else {
      return char;
    }
  }).join('');


};

convertAllowableBadCharsToEnglish.mapping = mapping;
module.exports = convertAllowableBadCharsToEnglish;