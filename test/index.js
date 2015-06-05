
var assert = require('assert')
var test = require('tape')
var JSONB = require('../')

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
    string: JSONB.stringify(new Buffer('x'))
  },

  escape2: {
    buffer: new Buffer('x'),
    prefixed : ":this is something",
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



for(k in examples)
(function (value, k) { 
  test(k, function (t) {
    var s = JSONB.stringify(value)
    console.log(s)
    var _value = JSONB.parse(s)
    t.deepEqual(clone(_value), clone(value))

    value = clone(value);//now harmess
    
    t.deepEqual(JSONB.parse(JSON.stringify(value)), JSON.parse(JSONB.stringify(value)))
    t.end()
  })
})(examples[k], k)

