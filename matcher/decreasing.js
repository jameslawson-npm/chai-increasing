var Immutable = require('immutable');
var fromJS = Immutable.fromJS;
var STRICTLY_FLAG = require('./flags').STRICTLY;
var identity = require('lodash.identity')

function sorted(list, isStrict) {
  var weak = function(curr, prev) { return prev >= curr; }
  var strict = function(curr, prev) { return prev > curr; }
  var comparitor = (isStrict === true) ? strict : weak;
  return list.skip(1).zipWith(comparitor, list).every(identity);
}

var MSG_MONO = {
  ERR_MSG: 'expected #{this} to be monotonicaly decreasing',
  NOT_MSG: 'expected #{this} to not be monotonically decreasing'
};
var MSG_STRICT = {
  ERR_MSG: 'expected #{this} to be strictly decreasing',
  NOT_MSG: 'expected #{this} to not be strictly decreasing'
};

function makeDecreasing(chai, utils) {
  function decreasing() {
    var list = fromJS(this._obj);
    var isStrict = utils.flag(this, STRICTLY_FLAG) === true;
    var passes  = sorted(list, isStrict);
    var MSG = isStrict ? MSG_STRICT : MSG_MONO;
    this.assert(passes, MSG.ERR_MSG, MSG.NOT_MSG);
  }
  return decreasing;
}

module.exports = makeDecreasing;
