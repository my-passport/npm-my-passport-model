'use strict';

var InvalidCaseNumberFormatError = function InvalidCaseNumberFormatError(message) {
  Error.call(this);
  this.name = 'InvalidCaseNumberFormatError';
  this.message = message;
  this.userMessage = 'Nieprawidłowy numer sprawy. Numer sprawy powinien zawierać 16 cyfr';
};

module.exports.InvalidCaseNumberFormatError = InvalidCaseNumberFormatError;

InvalidCaseNumberFormatError.prototype = Object.create(Error.prototype);
InvalidCaseNumberFormatError.prototype.constructor = InvalidCaseNumberFormatError;