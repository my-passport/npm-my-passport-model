'use strict';

module.exports.StatusEnum = {
  CREATED: 'CREATED',
  PENDING: 'PENDING',
  READY: 'READY',
  UNKNOWN: 'UNKNOWN',

  getStatus: function (status) {

    if (!this.hasOwnProperty(status)) {
      return null;
    }

    return module.exports.StatusEnum[status];
  }
};
