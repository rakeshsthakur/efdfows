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
    $scope.itemsByPage=12;
    $scope.sortOptions = [
        {value:"eventLocation",text:"Sort by County/Zone"},
        {value:"eventState",text:"Sort by state"},
        {value:"eventDate",text:"Sort by Date"},
        {value:"eventInjuries",text:"Sort by Injured Count"},
        {value:"eventDeath",text:"Sort by Death Count"},
        {value:"eventPropertyDamage",text:"Sort by Property Damage"}
    ];
    console.log($scope.sortOptions[0]);
    $scope.sortOrder = $scope.sortOptions[0].value;
    console.log($scope.sortOrder);
    /**support for map ctrls*/
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

    /* to make td tooltip*/
    $scope.mouseOverToolTip = function(){
    $('td').bind('mouseenter', function(){
        var $this = $(this);
        if(this.offsetWidth < this.scrollWidth && !$this.attr('title')){
            $this.attr('title', $this.text());
        }
    });
    };

});

