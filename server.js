var express = require('express'),
	mongoose = require('mongoose'),
    app = express();

require('./server/config/express')(app);
require('./server/config/routes')(app);
require('./server/config/mongoConfig')();

var port = 3030;
app.listen(port);
console.log('Listining on port ' + port);