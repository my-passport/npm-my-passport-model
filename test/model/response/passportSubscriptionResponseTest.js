var chai = require('chai');
var should = chai.should();
var passportSubscriptionResponse = require('../../../lib/model/response/passportSubscriptionResponse');

describe('passportSubscriptionResponse model test', function () {

  var subscribed = 'subscribed';

  it('should create model', function (done) {

    var passportSubscriptionResponseModel = new passportSubscriptionResponse.PassportSubscriptionResponse(
      subscribed
    );

    should.exist(passportSubscriptionResponseModel);
    passportSubscriptionResponseModel.subscribed.should.be.equal(subscribed);
    done();
  });

  it('should create model by builder', function (done) {

    var passportSubscriptionResponseModel = new passportSubscriptionResponse.PassportSubscriptionResponseBuilder()
      .withSubscribed(subscribed)
      .build();

    should.exist(passportSubscriptionResponseModel);
    passportSubscriptionResponseModel.subscribed.should.be.equal(subscribed);
    done();
  });

});
