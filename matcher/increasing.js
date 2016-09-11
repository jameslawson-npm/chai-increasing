var Immutable = require('immutable');
var fromJS = Immutable.fromJS;
var STRICTLY_FLAG = require('./flags').STRICTLY;
var identity = require('lodash.identity')

function sorted(list, isStrict) {
  var weak = function(curr, prev) { return prev <= curr; }
  var strict = function(curr, prev) { return prev < curr; }
  var comparitor = (isStrict === true) ? strict : weak;
  return list.skip(1).zipWith(comparitor, list).every(identity);
}

function makeIncreasing(chai, utils) {
  function increasing() {
    var list = fromJS(this._obj);
    var passes  = sorted(list, utils.flag(this, STRICTLY_FLAG));
    var ERR_MSG = 'expected #{this} to monotonicaly increasing';
    var NOT_MSG = 'expected #{this} to not be monotonically increasing';
    this.assert(passes, ERR_MSG, NOT_MSG);
  }
  return increasing;
}

module.exports = makeIncreasing;
