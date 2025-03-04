'use strict'

var assert = require('node:assert')
var fastroute = require('..')
var request = require('supertest')

describe('app', function(){
  it('should inherit from event emitter', function(done){
    var app = fastroute();
    app.on('foo', done);
    app.emit('foo');
  })

  it('should be callable', function(){
    var app = fastroute();
    assert.equal(typeof app, 'function');
  })

  it('should 404 without routes', function(done){
    request(fastroute())
    .get('/')
    .expect(404, done);
  })
})

describe('app.parent', function(){
  it('should return the parent when mounted', function(){
    var app = fastroute()
      , blog = fastroute()
      , blogAdmin = fastroute();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    assert(!app.parent, 'app.parent');
    assert.strictEqual(blog.parent, app)
    assert.strictEqual(blogAdmin.parent, blog)
  })
})

describe('app.mountpath', function(){
  it('should return the mounted path', function(){
    var admin = fastroute();
    var app = fastroute();
    var blog = fastroute();
    var fallback = fastroute();

    app.use('/blog', blog);
    app.use(fallback);
    blog.use('/admin', admin);

    assert.strictEqual(admin.mountpath, '/admin')
    assert.strictEqual(app.mountpath, '/')
    assert.strictEqual(blog.mountpath, '/blog')
    assert.strictEqual(fallback.mountpath, '/')
  })
})

describe('app.path()', function(){
  it('should return the canonical', function(){
    var app = fastroute()
      , blog = fastroute()
      , blogAdmin = fastroute();

    app.use('/blog', blog);
    blog.use('/admin', blogAdmin);

    assert.strictEqual(app.path(), '')
    assert.strictEqual(blog.path(), '/blog')
    assert.strictEqual(blogAdmin.path(), '/blog/admin')
  })
})

describe('in development', function(){
  before(function () {
    this.env = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'
  })

  after(function () {
    process.env.NODE_ENV = this.env
  })

  it('should disable "view cache"', function(){
    var app = fastroute();
    assert.ok(!app.enabled('view cache'))
  })
})

describe('in production', function(){
  before(function () {
    this.env = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'
  })

  after(function () {
    process.env.NODE_ENV = this.env
  })

  it('should enable "view cache"', function(){
    var app = fastroute();
    assert.ok(app.enabled('view cache'))
  })
})

describe('without NODE_ENV', function(){
  before(function () {
    this.env = process.env.NODE_ENV
    process.env.NODE_ENV = ''
  })

  after(function () {
    process.env.NODE_ENV = this.env
  })

  it('should default to development', function(){
    var app = fastroute();
    assert.strictEqual(app.get('env'), 'development')
  })
})
