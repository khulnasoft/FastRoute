'use strict'

var assert = require('node:assert')
var fastroute = require('../')

describe('app', function(){
  describe('.locals', function () {
    it('should default object with null prototype', function () {
      var app = fastroute()
      assert.ok(app.locals)
      assert.strictEqual(typeof app.locals, 'object')
      assert.strictEqual(Object.getPrototypeOf(app.locals), null)
    })

    describe('.settings', function () {
      it('should contain app settings ', function () {
        var app = fastroute()
        app.set('title', 'Fastroute')
        assert.ok(app.locals.settings)
        assert.strictEqual(typeof app.locals.settings, 'object')
        assert.strictEqual(app.locals.settings, app.settings)
        assert.strictEqual(app.locals.settings.title, 'Fastroute')
      })
    })
  })
})
