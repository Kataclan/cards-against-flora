'use strict';
exports.__esModule = true;
const express_1 = require('express');
const app = express_1['default']();
const DEFAULT_PORT = 3001; // default port to listen
const API_PORT = process.env.API_PORT || DEFAULT_PORT;
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.set('port', API_PORT);
app.listen(API_PORT, function() {
  console.log('Cards Against Flora listening on port 3001!');
});
app.get('/', function(req, res) {
  res.send('Hello World!');
});
app.get('/decks', function(req, res) {
  res.send([
    { uid: '001', displayName: 'Sample Deck 1', rottenCards: [], freshCards: [] },
    { uid: '002', displayName: 'Sample Deck 2', rottenCards: [], freshCards: [] },
    { uid: '003', displayName: 'Sample Deck 3', rottenCards: [], freshCards: [] },
    { uid: '004', displayName: 'Sample Deck 4', rottenCards: [], freshCards: [] },
  ]);
});
exports['default'] = app;
