function plugin(chai, utils) {
  chai.Assertion.addProperty('increasing', require('./matcher/increasing')(chai, utils));
  chai.Assertion.addProperty('decreasing', require('./matcher/decreasing')(chai, utils));
  chai.Assertion.addProperty('strictly', require('./matcher/strictly')(chai, utils));
}

module.exports = plugin;
