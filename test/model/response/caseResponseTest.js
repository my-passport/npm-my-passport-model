var chai = require('chai');
var should = chai.should();
var caseResponse = require('../../../lib/model/response/caseResponse');

describe('caseResponse model test', function () {

  var id = 'id';
  var status = 'status';

  it('should create model', function (done) {

    var caseResponseModel = new caseResponse.CaseResponse(
      id, 
      status
    );

    should.exist(caseResponseModel);
    caseResponseModel.id.should.be.equal(id);
    caseResponseModel.status.should.be.equal(status);
    done();
  });

  it('should create model by builder', function (done) {

    var caseResponseModel = new caseResponse.CaseResponseBuilder()
      .withId(id)
      .withStatus(status)
      .build();
    
    should.exist(caseResponseModel);
    caseResponseModel.id.should.be.equal(id);
    caseResponseModel.status.should.be.equal(status);
    done();
  });

});
