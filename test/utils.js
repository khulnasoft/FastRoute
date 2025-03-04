'use strict'

var assert = require('node:assert');
var utils = require('../lib/utils');

describe('utils.etag(body, encoding)', function(){
  it('should support strings', function(){
    assert.strictEqual(utils.etag('fastroute!'),
      '"8-O2uVAFaQ1rZvlKLT14RnuvjPIdg"')
  })

  it('should support utf8 strings', function(){
    assert.strictEqual(utils.etag('fastroute❤', 'utf8'),
      '"a-JBiXf7GyzxwcrxY4hVXUwa7tmks"')
  })

  it('should support buffer', function(){
    assert.strictEqual(utils.etag(Buffer.from('fastroute!')),
      '"8-O2uVAFaQ1rZvlKLT14RnuvjPIdg"')
  })

  it('should support empty string', function(){
    assert.strictEqual(utils.etag(''),
      '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"')
  })
})

describe('utils.setCharset(type, charset)', function () {
  it('should do anything without type', function () {
    assert.strictEqual(utils.setCharset(), undefined);
  });

  it('should return type if not given charset', function () {
    assert.strictEqual(utils.setCharset('text/html'), 'text/html');
  });

  it('should keep charset if not given charset', function () {
    assert.strictEqual(utils.setCharset('text/html; charset=utf-8'), 'text/html; charset=utf-8');
  });

  it('should set charset', function () {
    assert.strictEqual(utils.setCharset('text/html', 'utf-8'), 'text/html; charset=utf-8');
  });

  it('should override charset', function () {
    assert.strictEqual(utils.setCharset('text/html; charset=iso-8859-1', 'utf-8'), 'text/html; charset=utf-8');
  });
});

describe('utils.wetag(body, encoding)', function(){
  it('should support strings', function(){
    assert.strictEqual(utils.wetag('fastroute!'),
      'W/"8-O2uVAFaQ1rZvlKLT14RnuvjPIdg"')
  })

  it('should support utf8 strings', function(){
    assert.strictEqual(utils.wetag('fastroute❤', 'utf8'),
      'W/"a-JBiXf7GyzxwcrxY4hVXUwa7tmks"')
  })

  it('should support buffer', function(){
    assert.strictEqual(utils.wetag(Buffer.from('fastroute!')),
      'W/"8-O2uVAFaQ1rZvlKLT14RnuvjPIdg"')
  })

  it('should support empty string', function(){
    assert.strictEqual(utils.wetag(''),
      'W/"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"')
  })
})
