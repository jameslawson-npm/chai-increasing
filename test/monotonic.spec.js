var chai = require('chai');
var expect = chai.expect;

chai.use(require('../index'));

describe('monotonic increasing', function() {

  it('should assert [] is monotonically increasing', function() {
    expect([]).to.be.increasing;
  });

  it('should assert [1,1,1] is monotonically increasing', function() {
    expect([1,1,1]).to.be.increasing;
  });

  it('should assert [1,2,3] is monotonically increasing', function() {
    expect([1,2,3]).to.be.increasing;
  });

  it('should assert [3,2,1] is not monotonically increasing', function() {
    expect([3,2,1]).to.not.be.increasing;
  });

});

describe('monotonic decreasing', function() {

  it('should assert [] is monotonically decreasing', function() {
    expect([]).to.be.decreasing;
  });

  it('should assert [1,1,1] is monotonically decreasing', function() {
    expect([1,1,1]).to.be.decreasing;
  });

  it('should assert [3,2,1] is monotonically decreasing', function() {
    expect([3,2,1]).to.be.decreasing;
  });

  it('should assert [3,2,1] is not monotonically increasing', function() {
    expect([1,2,3]).to.be.not.decreasing;
  });

});
