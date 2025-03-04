'use strict'

var assert = require('node:assert')
var fastroute = require('../');
var request = require('supertest');

describe('exports', function(){
  it('should expose Router', function(){
    assert.strictEqual(typeof fastroute.Router, 'function')
  })

  it('should expose json middleware', function () {
    assert.equal(typeof fastroute.json, 'function')
    assert.equal(fastroute.json.length, 1)
  })

  it('should expose raw middleware', function () {
    assert.equal(typeof fastroute.raw, 'function')
    assert.equal(fastroute.raw.length, 1)
  })

  it('should expose static middleware', function () {
    assert.equal(typeof fastroute.static, 'function')
    assert.equal(fastroute.static.length, 2)
  })

  it('should expose text middleware', function () {
    assert.equal(typeof fastroute.text, 'function')
    assert.equal(fastroute.text.length, 1)
  })

  it('should expose urlencoded middleware', function () {
    assert.equal(typeof fastroute.urlencoded, 'function')
    assert.equal(fastroute.urlencoded.length, 1)
  })

  it('should expose the application prototype', function(){
    assert.strictEqual(typeof fastroute.application, 'object')
    assert.strictEqual(typeof fastroute.application.set, 'function')
  })

  it('should expose the request prototype', function(){
    assert.strictEqual(typeof fastroute.request, 'object')
    assert.strictEqual(typeof fastroute.request.accepts, 'function')
  })

  it('should expose the response prototype', function(){
    assert.strictEqual(typeof fastroute.response, 'object')
    assert.strictEqual(typeof fastroute.response.send, 'function')
  })

  it('should permit modifying the .application prototype', function(){
    fastroute.application.foo = function(){ return 'bar'; };
    assert.strictEqual(fastroute().foo(), 'bar')
  })

  it('should permit modifying the .request prototype', function(done){
    fastroute.request.foo = function(){ return 'bar'; };
    var app = fastroute();

    app.use(function(req, res, next){
      res.end(req.foo());
    });

    request(app)
    .get('/')
    .expect('bar', done);
  })

  it('should permit modifying the .response prototype', function(done){
    fastroute.response.foo = function(){ this.send('bar'); };
    var app = fastroute();

    app.use(function(req, res, next){
      res.foo();
    });

    request(app)
    .get('/')
    .expect('bar', done);
  })
})
