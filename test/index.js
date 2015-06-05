
var assert = require('assert')
var test = require('tape')
var _JSON = require('../')

function clone (o) {
  return JSON.parse(JSON.stringify(o))
}

var examples = {
  simple: { foo: [], bar: {}, baz: new Buffer('some binary data') },
  just_buffer: new Buffer('JUST A BUFFER'),
  all_types: {
    string:'hello',
    number: 3145,
    null: null,
    object: {},
    array: [],
    boolean: true,
    boolean2: false
  },
  foo: new Buffer('foo'),
  foo2: new Buffer('foo2'),
  escape: {
    buffer: new Buffer('x'),
    string: _JSON.stringify(new Buffer('x'))
  },

  escape2: {
    buffer: new Buffer('x'),
  },

  undefined: {
    empty: undefined, test: true
  },
  undefined2: {
    first: 1, empty: undefined, test: true
  },
  undefinedArray: {
    array: [undefined, 1, 'two']
  },
  fn: {
    fn: function () {}    
  }
}


var start = Date.now();
for(var i=0;i<10000;i++) {
  for(k in examples)
  (function (value, k) { 
    var s = _JSON.stringify(value)
    var _value = _JSON.parse(s)
    assert.deepEqual(clone(_value), clone(value));
  })(examples[k], k)
}

var took = Date.now()-start;

console.log(took);
return;

for(k in examples)
(function (value, k) { 
  test(k, function (t) {
    var s = _JSON.stringify(value)
    console.log(s)
    var _value = _JSON.parse(s)
    t.deepEqual(clone(_value), clone(value))
    t.end()
  })
})(examples[k], k)
