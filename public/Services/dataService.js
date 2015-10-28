/**
 * Created by rthakur on 8/25/2015.
 */
'use strict';
angular.module("app").factory("dataService",function(userDataService,$resource){
    var dbQueryFunction = function() {
        var dbQueryObject = "";
        var query = [];
        if (query.length != 0) query = [];
        var query = userDataService.getUserData();
        if (query[0] !== false) {
            dbQueryObject = "{eventYear: {$gte: " + query[0];
        }
        if (query[1] !== false) {
            dbQueryObject = dbQueryObject + ", $lte: " + query[1] + "}";
        }
        dbQueryObject = dbQueryObject + ", eventState: {$in : [";
        if (query[2] !== false) {
            dbQueryObject = dbQueryObject + "'CA'";
        }
        if (query[3] !== false) {
            dbQueryObject = dbQueryObject + ", 'OR'";
        }
        if (query[4] !== false) {
            dbQueryObject = dbQueryObject + ",'WA'";
        }
        dbQueryObject = dbQueryObject + "]}}";

        return $resource('/api/newOne/:eventUserData', {eventUserData: dbQueryObject}).query();
       //return  $resource('/api/newOne/:eventUserData', {eventUserData: dbQueryObject});

        //console.log(resource);

    };
    //return dbQueryFunction;
    return {
        dbQueryFunction:dbQueryFunction
    };
});
