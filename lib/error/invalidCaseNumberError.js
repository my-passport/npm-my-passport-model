'use strict';

var InvalidCaseNumber = function InvalidCaseNumber(message) {
  Error.call(this);
  this.name = 'InvalidCaseNumber';
  this.message = message;
  this.userMessage = 'Nieprawidłowy numer sprawy. Numer sprawy powinien zawierać 16 cyfr';
};

module.exports.InvalidCaseNumber = InvalidCaseNumber;

InvalidCaseNumber.prototype = Object.create(Error.prototype);
InvalidCaseNumber.prototype.constructor = InvalidCaseNumber;