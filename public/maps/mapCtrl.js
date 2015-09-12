'use strict';
app.controller("mapCtrl", function($scope, uiGmapGoogleMapApi,mapCoordsService) {
    var coords = mapCoordsService.getCoordsData();
    var toolTipInfoData = mapCoordsService.getToolTipwindowData();
    $scope.map = { center: { latitude: coords[0], longitude: coords[1] }, zoom: 8 };
    $scope.marker = {
        id: 1,
        coords: {
            latitude: coords[0],
            longitude: coords[1]
        }
    };
    $scope.windowOptions = {
        visible: false
    };

    $scope.onClick = function() {
        $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

    $scope.title = toolTipInfoData;
    $scope.propertyLoss =toolTipInfoData[3].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    $scope.coordsWindow = coords;
    //$scope.title = title.push(coords,toolTipInfoData[0],toolTipInfoData[1] +" death(s) " + ", " + toolTipInfoData[2] + " injured and resulted in $"+ toolTipInfoData[3].toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + " Property loss";

    uiGmapGoogleMapApi.then(function(maps) {

    });
});
