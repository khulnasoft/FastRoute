'use strict'

/**
 * Module dependencies.
 */

var escapeHtml = require('escape-html');
var fastroute = require('../..');
var fs = require('node:fs');
var marked = require('marked');
var path = require('node:path');

var app = module.exports = fastroute();

// register .md as an engine in fastroute view system

app.engine('md', function(path, options, fn){
  fs.readFile(path, 'utf8', function(err, str){
    if (err) return fn(err);
    var html = marked.parse(str).replace(/\{([^}]+)\}/g, function(_, name){
      return escapeHtml(options[name] || '');
    });
    fn(null, html);
  });
});

app.set('views', path.join(__dirname, 'views'));

// make it the default, so we don't need .md
app.set('view engine', 'md');

app.get('/', function(req, res){
  res.render('index', { title: 'Markdown Example' });
});

app.get('/fail', function(req, res){
  res.render('missing', { title: 'Markdown Example' });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Fastroute started on port 3000');
}
