/*!
 * filter-types <https://github.com/jonschlinkert/filter-types>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');
var filter = require('arr-filter');

module.exports = function filterType(arr, types) {
  types = Array.isArray(types) ? types : [types];

  return filter(arr, function (ele) {
    return types.indexOf(typeOf(ele)) !== -1;
  });
};
