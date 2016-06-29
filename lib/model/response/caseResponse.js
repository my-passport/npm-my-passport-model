var CaseResponse = function CaseResponse(id, status) {
  this.id = id;
  this.status = status;
};

var CaseResponseBuilder = function CaseResponseBuilder() {
  this.id = null;
  this.status = null;

  var self = this;

  this.withId = function withId(id) {
    self.id = id;
    return self;
  };

  this.withStatus = function withStatus(status) {
    self.status = status;
    return self;
  };


  this.build = function build() {
    return new CaseResponse(
     self.id, 
     self.status
    );
  };

};

module.exports = exports = {
  CaseResponse: CaseResponse,
  CaseResponseBuilder: CaseResponseBuilder
};
