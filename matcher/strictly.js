var STRICTLY_FLAG = require('./flags').STRICTLY;

function makeStrictly(chai, utils) {
  function strictly() {
    utils.flag(this, STRICTLY_FLAG, true);
  }
  return strictly;
}

module.exports = makeStrictly;
