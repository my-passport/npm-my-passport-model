var PassportSubscriptionResponse = function PassportSubscriptionResponse(subscribed) {
  this.subscribed = subscribed;
};

var PassportSubscriptionResponseBuilder = function PassportSubscriptionResponseBuilder() {
  this.subscribed = null;

  var self = this;

  this.withSubscribed = function withSubscribed(subscribed) {
    self.subscribed = subscribed;
    return self;
  };


  this.build = function build() {
    return new PassportSubscriptionResponse(
     self.subscribed
    );
  };

};

module.exports = exports = {
  PassportSubscriptionResponse: PassportSubscriptionResponse,
  PassportSubscriptionResponseBuilder: PassportSubscriptionResponseBuilder
};
