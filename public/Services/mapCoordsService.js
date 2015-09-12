/**
 * Created by rakeshthakur on 8/30/15.
 */
'use strict';
angular.module('app').factory('mapCoordsService', function() {
    var coordsList = [];
    var toolTipInfoWindowData=[];
    var allMakersDataVariable = [];

    var addCoordsData = function(inputdata) {
        if(coordsList.length!=0) coordsList=[];
        coordsList = inputdata;
    };

    var addAllMakersData = function(inputdata) {
        if(allMakersDataVariable.length!=0) allMakersDataVariable=[];
        allMakersDataVariable = inputdata;
    };

    var addToolTipwindowData = function(toolTipInfoWindow){
        if(toolTipInfoWindowData.length!=0) toolTipInfoWindowData=[];
        toolTipInfoWindowData = toolTipInfoWindow;
    };

    var getCoordsData = function(){
        return coordsList;
    };
    var getToolTipwindowData = function(){
        return toolTipInfoWindowData;
    };
    var getAllMakersData = function(){
        return allMakersDataVariable;
    };

    return {
        addCoordsData: addCoordsData,
        getCoordsData: getCoordsData,
        addToolTipWindowData: addToolTipwindowData,
        getToolTipwindowData : getToolTipwindowData,
        addAllMakersData:addAllMakersData,
        getAllMakersData:getAllMakersData
    };

});
