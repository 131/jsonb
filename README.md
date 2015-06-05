# jsonb

Simple JSON replacer (for stringify & parse) that converts Buffer to base64.



``` js
var JSONB = require('jsonb')

var str = JSONB.stringify(new Buffer('hello there!'))

console.log(JSONB.parse(str)) //GET a BUFFER back
```

* For non buffer data, behave as a pure superset of native JSON
* `JSONB.parse(JSON.encode(foo)) = JSON.parse(JSONB.encode(foo))`


## License

MIT
