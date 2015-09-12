angular.module('app').controller('mainCtrl', function($scope, userDataService) {
    var currObj = name;
    var fromYearDropdown=[];
    var toYearDropdown=[];
    for (var i=1995; i <=2015 ; i ++){
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
    $scope.callToSaveUserData = function(selectedFromYear,selectedToYear,checkboxCA,checkboxWA,checkboxOR){
        var inputData=[];
        inputData.push(selectedFromYear,selectedToYear,checkboxCA,checkboxWA,checkboxOR);

        userDataService.addUserData(inputData);
    };
});