# chai-increasing

*Flexible chai matchers for snabbdom*

A [chai](http://chaijs.com/) plugin for forming assertions on [increasing/decreasing sequences](https://en.wikipedia.org/wiki/Sequence#Increasing_and_decreasing).

## Usage

Monotonic increasing/decreasing:
```javascript
expect([1,2,3]).to.be.increasing;
expect([3,2,1]).to.be.decreasing;
expect([1,1,1]).to.be.increasing;
expect([1,1,1]).to.be.decreasing;
```

Strictly increasing/decreasing:
```javascript
expect([1,2,3]).to.be.strictly.increasing;
expect([3,2,1]).to.be.strictly.increasing;
expect([1,1,1]).not.to.be.strictly.increasing;
expect([1,1,1]).not.to.be.strictly.decreasing;
```

Empty arrays:
```javascript
expect([]).to.be.strictly.increasing;
expect([]).to.be.increasing;
```

Strings/Floats:
```javascript
expect(['Apple','Banana','Coconut']).to.be.strictly.increasing;
expect([1.15, 1.75, 3.28, 4.96]).to.be.strictly.increasing;
```

Nondecreasing/Nonincreasing:
```javascript
// "nondecreasing" and "nonincreasing" may be used instead 
// of "increasing" and "decreasing" for clarity; the behaviour is the same.
expect([1,1,1]).to.be.increasing;
expect([1,1,1]).to.be.nondecreasing;
```

## Installation

```bash
npm install chai-increasing --save-dev
```

```javascript
var chai = require('chai');
chai.use(require('chai-increasing'));
```

## License

MIT License.    
Copyright © 2016 James Lawson
