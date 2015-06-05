# jsonb

Simple JSON replacer (for stringify & parse) that converts Buffer to base64.

``` js
var JSONB = require('jsonb')

var str = JSONB.stringify(new Buffer('hello there!'))

console.log(JSONB.parse(str)) //GET a BUFFER back
```

## License

MIT
