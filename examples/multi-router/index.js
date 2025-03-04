'use strict'

var fastroute = require('../..');

var app = module.exports = fastroute();

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

app.get('/', function(req, res) {
  res.send('Hello from root route.')
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Fastroute started on port 3000');
}
