'use strict';

var grunt = require('grunt');
var utils = module.exports;

utils.parseAndFlatten = function(file) {
  return utils.flatten(grunt.file.readJSON(file));
}

utils.flatten = function(obj) {

  var flattened = {};

  function f(obj, prefix) {
    for (var prop in obj) {
      var val = obj[prop];
      if (typeof(val) === 'string') {
        flattened[(prefix ? prefix + '.' : '') + prop] = val;
      } else {
        f(val, (prefix ? prefix + '.' : '') + prop);
      }
    }
  }

  f(obj, '');

  return flattened;
};