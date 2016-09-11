var chai = require('chai');
var expect = chai.expect;
var List = require('immutable').List;

chai.use(require('../index'));

describe('strings', function() {

  it('should be that ["Apple","Banana","Coconut"] is strictly increasing', function() {
    expect(['Apple', 'Banana', 'Coconut']).to.be.strictly.increasing;
  });

  it('should be that ["A","Z","a","z"] is strictly increasing', function() {
    expect(['A', 'Z', 'a', 'z']).to.be.strictly.increasing;
  });

});

describe('floats', function() {

  it('should be that [1.15, 1.75, 3.28, 4.96] is strictly increasing', function() {
    expect([1.15, 1.75, 3.28, 4.96]).to.be.strictly.increasing;
  });

  it('should be that [1.15, 1.75, 3.28, 4.96] is strictly increasing', function() {
    expect([-4.5, -5.0, -5.5, -6.0]).to.be.strictly.decreasing;
  });

});

describe('Immutable.js Lists', function() {

  it('should be that List [] is (strictly) increasing and decreasing', function() {
    expect(List.of()).to.be.increasing;
    expect(List.of()).to.be.decreasing;
    expect(List.of()).to.be.strictly.increasing;
    expect(List.of()).to.be.strictly.decreasing;
  });

  it('should be that List [1, 1, 1] is increasing and decreasing', function() {
    expect(List.of(1, 1, 1)).to.be.increasing;
    expect(List.of(1, 1, 1)).to.be.decreasing;
  });

  it('should be that List [1, 2, 3] is (strictly) increasing', function() {
    expect(List.of(1, 2, 3)).to.be.increasing;
    expect(List.of(1, 2, 3)).to.be.strictly.increasing;
  });

  it('should be that List [3, 2, 1] is (strictly) decreasing', function() {
    expect(List.of(3, 2, 1)).to.be.decreasing;
    expect(List.of(3, 2, 1)).to.be.strictly.decreasing;
  });

});
