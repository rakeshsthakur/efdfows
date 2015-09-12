'use strict';
angular.module('app').factory('selectService', function() {
    var productList = [];

    var addProduct = function(newObj) {
        productList.push(newObj);
      //  console.log(newObj);
    };

    var getData = function(){
        return productList;
    };

    return {
        addProduct: addProduct,
        getData: getData
    };

});

angular.module('app').controller('selectCtrl', function($scope, selectService) {
   // console.log(name);
    var currObj = name;
    var fromYearDropdown=[];
    var toYearDropdown=[];
    for (var i=1950; i <=2015 ; i ++){
        fromYearDropdown.push(i);
    }
    $scope.fromYear=fromYearDropdown;

    $scope.toYearFun= function (selectedFromYear) {
        for (var i = selectedFromYear; i <= 2015; i++) {
            if(selectedFromYear !=='null')
            toYearDropdown.push(i);
        }
        $scope.toYear = toYearDropdown;
    };
    $scope.callToInputToQueryData = function(selectedFromYear,selectedToYear,checkboxCA,checkboxWA,checkboxOR){
        var inputData=[];
        //console.log(here);
        inputData.push(selectedFromYear,selectedToYear,checkboxCA,checkboxWA,checkboxOR);
        console.log(inputData.length);
        $.each(inputData,function(index,value){
            if (typeof value === 'undefined') {
                value = false;
            }
            selectService.addProduct(value);
            console.log(value);
        });
    };
});

angular.module('app').controller('CartController', function($scope, selectService,dataService) {
    $scope.data = selectService.getData();
    //console.log($scope.data);




    $scope.dataCtl1 = dataService;
    //console.log($scope.dataCtl1 );
});