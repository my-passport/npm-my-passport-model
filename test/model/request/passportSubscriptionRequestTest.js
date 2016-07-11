var chai = require('chai');
var should = chai.should();
var passportSubscriptionRequest = require('../../../lib/model/request/passportSubscriptionRequest');

describe('passportSubscriptionRequest model test', function () {

  var token = 'token';

  it('should create model', function (done) {

    var passportSubscriptionRequestModel = new passportSubscriptionRequest.PassportSubscriptionRequest(
      token
    );

    should.exist(passportSubscriptionRequestModel);
    passportSubscriptionRequestModel.token.should.be.equal(token);
    done();
  });

  it('should create model by builder', function (done) {

    var passportSubscriptionRequestModel = new passportSubscriptionRequest.PassportSubscriptionRequestBuilder()
      .withToken(token)
      .build();

    should.exist(passportSubscriptionRequestModel);
    passportSubscriptionRequestModel.token.should.be.equal(token);
    done();
  });

});
