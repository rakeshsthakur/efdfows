var app = angular.module('app', ['ngRoute','ngResource','uiGmapgoogle-maps','smart-table','chart.js']);

app.config(function($routeProvider,$locationProvider,uiGmapGoogleMapApiProvider,ChartJsProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyA7qpqpty5cv99e8HWb4FVRIwBR0desbUU',
        //v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false});

    //ChartJsProvider.setOptions({
    //    colours: ['#FF5252', '#FF8A80'],
    //    responsive: true
    //});
    //ChartJsProvider.setOptions('Line', {
    //    datasetFill: false
    //});


    $routeProvider
        .when('/', {
            templateUrl : 'partials/landingPage/main',
            controller  : 'mainCtrl'
        })
        .when('/tables-page', {
            templateUrl : 'partials/table-page/tablePage',
            controller :'getQueryData'
        })
        .when('/maps', {
            templateUrl : 'partials/maps/map',
            controller  : 'mapCtrl'
        })
        .when('/tab3', {
            templateUrl : 'partials/tab3/tab3',
            controller :'chartCtrl'
        })
        .when('/map-all-events', {
            templateUrl : 'partials/maps/map-all-events',
            controller :'mapAllCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
});