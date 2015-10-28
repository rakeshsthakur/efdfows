/**
 * Created by rthakur on 8/28/2015.
 */
var express = require('express'),
    lessMiddleware = require('less-middleware');
    publicPath= '../public/';//from views folder

module.exports = function(app) {
    app.set('view engine', 'jade');
  //  console.log(__dirname);
    app.use('/dependencies', lessMiddleware(__dirname + '../../dependencies'));

    app.set('views', __dirname + '/..');
        app.use('/dependencies', express.static(__dirname + '/../../dependencies'));
    app.use('/server', express.static('/..'));
    app.use(express.static(__dirname + '/../../public/'));
};