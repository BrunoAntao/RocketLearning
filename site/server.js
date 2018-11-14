const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const port = 80;

app.set('views', path.join(__dirname, '/views'));
app.use(compression());
app.use('/client', express.static('site/client'));

require('./server/routes.js')(app);

http.listen(port, function () {

    console.log('listening on: ' + port);

});