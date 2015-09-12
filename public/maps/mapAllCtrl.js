/**
 * Created by rthakur on 9/1/2015.
 */
'use strict';
app.controller("mapAllCtrl", function($scope, uiGmapGoogleMapApi,mapCoordsService) {
    var coords = mapCoordsService.getCoordsData();
    $scope.map = { center: { latitude: 32.7150, longitude: 117.1625 }, zoom: 3 };
    $scope.allData = mapCoordsService.getAllMakersData();
    uiGmapGoogleMapApi.then(function(maps) {

    });
});
