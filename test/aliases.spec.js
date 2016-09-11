var chai = require('chai');
var expect = chai.expect;

chai.use(require('../index'));

describe('"nondecreasing" alias', function() {

  it('should be that [] is "nondecreasing"', function() {
    expect([]).to.be.nondecreasing;
  });

  it('should be that [1,2,3] is "nondecreasing"', function() {
    expect([1,2,3]).to.be.nondecreasing;
  });

  it('should be that [3,2,1] is not "nondecreasing"', function() {
    expect([3,2,1]).to.be.not.nondecreasing;
  });

});

describe('"nonincreasing" alias', function() {

  it('should be that [] is "nonincreasing"', function() {
    expect([]).to.be.nondecreasing;
  });

  it('should be that [3,2,1] is "nonincreasing"', function() {
    expect([3,2,1]).to.be.nonincreasing;
  });

  it('should be that [1,2,3] is not "nonincreasing"', function() {
    expect([1,2,3]).to.be.not.nonincreasing;
  });

});
