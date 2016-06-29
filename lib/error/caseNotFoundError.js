'use strict';

var CaseNotFoundError = function CaseNotFoundError(message) {
  Error.call(this);
  this.name = 'CaseNotFoundError';
  this.message = message;
  this.userMessage = 'Nie znaleziono danych dla wniosku';
};

module.exports.CaseNotFoundError = CaseNotFoundError;

CaseNotFoundError.prototype = Object.create(Error.prototype);
CaseNotFoundError.prototype.constructor = CaseNotFoundError;