var chai = require('chai');
var should = chai.should();
var StatusEnum = require('../../lib/model/statusEnum').StatusEnum;

describe('country enum test', function () {

  it('should get country enum', function (done) {

    var enumValue = StatusEnum.getStatus('CREATED');

    should.exist(enumValue);
    enumValue.should.be.equal('CREATED');

    done();
  });

  it('should return null for unknown country enum', function (done) {

    var enumValue = StatusEnum.getStatus('unknown');

    should.not.exist(enumValue);

    done();
  });


});