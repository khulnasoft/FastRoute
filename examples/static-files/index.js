'use strict'

/**
 * Module dependencies.
 */

var fastroute = require('../..');
var logger = require('morgan');
var path = require('node:path');
var app = fastroute();

// log requests
app.use(logger('dev'));

// fastroute on its own has no notion
// of a "file". The fastroute.static()
// middleware checks for a file matching
// the `req.path` within the directory
// that you pass it. In this case "GET /js/app.js"
// will look for "./public/js/app.js".

app.use(fastroute.static(path.join(__dirname, 'public')));

// if you wanted to "prefix" you may use
// the mounting feature of Connect, for example
// "GET /static/js/app.js" instead of "GET /js/app.js".
// The mount-path "/static" is simply removed before
// passing control to the fastroute.static() middleware,
// thus it serves the file correctly by ignoring "/static"
app.use('/static', fastroute.static(path.join(__dirname, 'public')));

// if for some reason you want to serve files from
// several directories, you can use fastroute.static()
// multiple times! Here we're passing "./public/css",
// this will allow "GET /style.css" instead of "GET /css/style.css":
app.use(fastroute.static(path.join(__dirname, 'public', 'css')));

app.listen(3000);
console.log('listening on port 3000');
console.log('try:');
console.log('  GET /hello.txt');
console.log('  GET /js/app.js');
console.log('  GET /css/style.css');
