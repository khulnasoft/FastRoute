'use strict'

var fastroute = require('../')
  , request = require('supertest');

describe('throw after .end()', function(){
  it('should fail gracefully', function(done){
    var app = fastroute();

    app.get('/', function(req, res){
      res.end('yay');
      throw new Error('boom');
    });

    request(app)
    .get('/')
    .expect('yay')
    .expect(200, done);
  })
})
