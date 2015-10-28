var express = require('express');

var app = express();

require('./server/config/express')(app);
require('./server/config/routes')(app);
require('./server/config/mongoConfig')();

var port = 3030;
app.listen(port);
console.log('Listening  on port ' + port);