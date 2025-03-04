'use strict'

var fastroute = require('../../');

var app = module.exports = fastroute()

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Fastroute started on port 3000');
}
