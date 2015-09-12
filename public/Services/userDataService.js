'use strict';
angular.module('app').factory('userDataService', function() {
    var productList = [];

    var addUserData = function(inputdata) {
        var tempInputData=[];
        if(length.productList==6) productList=0;
        $.each(inputdata,function(index,value) {
            if (typeof value === 'undefined') {
                value = false;
            }
            tempInputData.push(value);
        });
        productList=tempInputData;
        //console.log(productList);
    };

    var getUserData = function(){
        return productList;
    };

    return {
        addUserData: addUserData,
        getUserData: getUserData
    };

});
