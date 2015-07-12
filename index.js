'use strict';

var stub = require('stubs');

module.exports = function (ee, onEvent) {
  stub(ee, 'emit', { callthrough: true }, function () {
    switch (arguments[0]) {
      case '*':
      case 'data':
        break;
      default:
        onEvent.apply(ee, arguments);
    }
  });

  return ee;
};
