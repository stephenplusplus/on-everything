'use strict';

var request = require('request');

var onEverything = require('./index.js');

describe('stream-forward', function () {
  it('works', function (done) {
    onEverything(request('http://www.google.com/hello'), function (eventName) {
      if (eventName === 'complete') {
        done();
      }
    });
  });
});
