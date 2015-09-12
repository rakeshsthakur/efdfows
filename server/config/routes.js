var express = require('express'),
    dbModel = require('../controllers/dbCtrl');

publicPath= '../public/';//from views folder


module.exports = function(app){
    app.get('/partials/*', function (req, res) {
        res.render(publicPath + req.params[0]);
    });

    app.get('/api/newOne/:eventUserData',function(req,res){
        dbModel.dbQuery(req,res);
    });

    app.get('*', function(req,res) {
        res.render('views/index');
    });

};

