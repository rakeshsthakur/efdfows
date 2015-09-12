/**
 * Created by rakeshthakur on 8/29/15.
 */
'use strict';
angular.module('app').controller('getQueryData', function($scope, userDataService,dataService,uiGmapGoogleMapApi,mapCoordsService) {
    $scope.data = userDataService.getUserData();
    $scope.tableData = dataService.dbQueryFunction();
    $scope.tableData.$promise.then(function(data){
        allTableData(data);

    });
    $scope.itemsByPage=10;

    /**various functions*/
    $scope.getEventCoords= function (latitude, longitude) {
        var coords = [];
        coords.push(latitude,longitude);
        mapCoordsService.addCoordsData(coords);
    };
    $scope.getToolTipInfo = function(eventDate, eventDeaths, eventInjuries,eventPropertyDamage){
        var toolTipInfoWindow = [];
        toolTipInfoWindow.push(eventDate, eventDeaths, eventInjuries,eventPropertyDamage);
        mapCoordsService.addToolTipWindowData(toolTipInfoWindow);

    };
    /*working Code*/
    var allTableData=function(tableData){
        $scope.rowCollection = tableData;
        $scope.displayedCollection = [].concat($scope.rowCollection);
        var allTableDataVariable =[];
        var i = 0;
        var propertyLossProper = 0;
        $.each(tableData,function(key,value){
            i=i+1;
            propertyLossProper = (value.eventPropertyDamage).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
           var title = "This events geographical coordinates are :"+value.eventBeginLatitude+", "+value.eventBeginLongitude+" and this occurred on :"+value.eventDate+" which resulted in "+ value.eventDeaths+" deaths, "+value.eventInjuries+" injuries and $"+propertyLossProper + " property loss.";
            allTableDataVariable.push({id:i, latitude:value.eventBeginLatitude, longitude:value.eventBeginLongitude, title:title});
        });
        mapCoordsService.addAllMakersData(allTableDataVariable);
    };
});