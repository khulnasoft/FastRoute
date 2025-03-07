'use strict'

/**
 * Module dependencies.
 */

var fastroute = require('../../');
var path = require('node:path');

var app = module.exports = fastroute();

// Register ejs as .html. If we did
// not call this, we would need to
// name our views foo.ejs instead
// of foo.html. The __fastroute method
// is simply a function that engines
// use to hook into the Fastroute view
// system by default, so if we want
// to change "foo.ejs" to "foo.html"
// we simply pass _any_ function, in this
// case `ejs.__fastroute`.

app.engine('.html', require('ejs').__fastroute);

// Optional since fastroute defaults to CWD/views

app.set('views', path.join(__dirname, 'views'));

// Path to our public directory

app.use(fastroute.static(path.join(__dirname, 'public')));

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');

// Dummy users
var users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

app.get('/', function(req, res){
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Fastroute started on port 3000');
}
