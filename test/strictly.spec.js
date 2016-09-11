var chai = require('chai');
var expect = chai.expect;

chai.use(require('../index'));

describe('strictly increasing', function() {

  it('should be that [] is strictly increasing', function() {
    expect([]).to.be.strictly.increasing;
  });

  it('should be that [1] is strictly increasing', function() {
    expect([1]).to.be.strictly.decreasing;
  });

  it('should be that [1,2,3] is strictly increasing', function() {
    expect([1,2,3]).to.be.strictly.increasing;
  });

  it('should be that [1,1,1] is not strictly increasing', function() {
    expect([1,1,1]).not.to.be.strictly.increasing;
  });

});

describe('strictly decreasing', function() {

  it('should be that [] is strictly decreasing', function() {
    expect([]).to.be.strictly.decreasing;
  });

  it('should be that [1] is strictly decreasing', function() {
    expect([1]).to.be.strictly.decreasing;
  });

  it('should be that [3,2,1] is strictly decreasing', function() {
    expect([3,2,1]).to.be.strictly.decreasing;
  });

  it('should be that [1,1,1] is not strictly decreasing', function() {
    expect([1,1,1]).not.to.be.strictly.decreasing;
  });

});
