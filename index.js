var pfx = ':base64:', match = new RegExp('^' + pfx);

module.exports.stringify = function(obj) {
    //backup Buffer toJSON prototype
  var before = Buffer.prototype.toJSON;
  Buffer.prototype.toJSON = function(){
    return pfx + this.toString('base64');
  };
  var ret = JSON.stringify(obj);
  Buffer.prototype.toJSON = before;
  return ret;
};


module.exports.parse = function(s) {
  return JSON.parse(s, function (key, value) {
    if('string' === typeof value) {
      if(match.test(value))
        return new Buffer(value.substring(8), 'base64');
      else
        return value; 
    }
    return value;
  });
};
