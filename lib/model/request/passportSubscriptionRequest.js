var PassportSubscriptionRequest = function PassportSubscriptionRequest(token) {
  this.token = token;
};

var PassportSubscriptionRequestBuilder = function PassportSubscriptionRequestBuilder() {
  this.token = null;

  var self = this;

  this.withToken = function withToken(token) {
    self.token = token;
    return self;
  };


  this.build = function build() {
    return new PassportSubscriptionRequest(
     self.token
    );
  };

};

module.exports = exports = {
  PassportSubscriptionRequest: PassportSubscriptionRequest,
  PassportSubscriptionRequestBuilder: PassportSubscriptionRequestBuilder
};
