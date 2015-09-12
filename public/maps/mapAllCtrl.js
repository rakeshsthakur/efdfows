/**
 * Created by rthakur on 9/1/2015.
 */
'use strict';
app.controller("mapAllCtrl", function($scope, uiGmapGoogleMapApi,mapCoordsService) {
    var coords = mapCoordsService.getCoordsData();
    $scope.map = { center: { latitude: 41, longitude: -120 }, zoom: 5 };
    $scope.allData = mapCoordsService.getAllMakersData();
    uiGmapGoogleMapApi.then(function(maps) {

    });
});
