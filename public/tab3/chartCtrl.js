/**
 * Created by rthakur on 9/4/2015.
 */
'use strict';
angular.module('app').controller("chartCtrl", ['$scope', '$timeout','dataService', function ($scope, $timeout, dataService ) {
    $scope.tableData = dataService.dbQueryFunction();
    $scope.tableData.$promise.then(function (data) {
        var yearArray = [];
        var statesArray = [];
        var lossTemp = 0;
        var lossInState = [];

        $.each(data, function (key, val) {
            if (($.inArray(val.eventYear, yearArray)) < 0) {
                yearArray.push(val.eventYear);
            }
            if (($.inArray(val.eventState, statesArray)) < 0) {
                statesArray.push(val.eventState);
            }

        });

        yearArray.sort();
        statesArray.sort();

        /*bar charts deaths and injuries */
        var deathsTempBar = 0;
        var injuriesTempBar = 0;
        var deathsInStateBarChart = [];
        var injuriesInStateBarChart = [];
        var deathsPerYearInStateBarChart = [];
        var injuriesPerYearInStateBarChart = [];

        $.each(statesArray, function (key, val) {
            $.each(yearArray, function (key1, val1) {
                $.each(data, function (key2, val2) {
                    if (val2.eventYear == val1) {
                        if (val2.eventState == val) {
                            deathsTempBar = deathsTempBar + val2.eventDeaths;
                            injuriesTempBar = injuriesTempBar + val2.eventInjuries;
                        }
                    }
                });
                deathsInStateBarChart.push(deathsTempBar);
                injuriesInStateBarChart.push(injuriesTempBar);
                deathsTempBar = 0;
                injuriesTempBar = 0;
            });
            deathsPerYearInStateBarChart.push(deathsInStateBarChart);
            injuriesPerYearInStateBarChart.push(injuriesInStateBarChart);
            deathsInStateBarChart = [];
            injuriesInStateBarChart = [];
        });

        $scope.labelsBar = yearArray;
        $scope.seriesBar = statesArray;
        $scope.dataDeathsBar = deathsPerYearInStateBarChart;
        $scope.dataInjuriesBar = injuriesPerYearInStateBarChart;

        /*Doughnut Chart Code*/
        $.each(statesArray, function (key, val) {
            $.each(data, function (key1, val1) {
                if (val1.eventState == val) {
                    lossTemp = lossTemp + val1.eventPropertyDamage;
                }
            });
            lossInState.push(lossTemp);

            lossTemp = 0;

        });
        $scope.options = {
            tooltipTemplate: function (lossInState) {
                return lossInState.label + ': $' + lossInState.value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            }
        };

        $scope.dataDoughnut = lossInState;
        $scope.labelsDoughnut = statesArray;
        $scope.seriesDoughnut = ['property loss'];
        /*end of Doughnut Chart*/

        /* line Chart for loss per year with respect to each state*/
        var lossTempLine = 0;
        var lossPerYearInStateLineChart = [];
        var lossInStateLineChart = [];
        var lossPerYearAllStatesLineChart = [];
        $.each(statesArray, function (key, val) {
            $.each(yearArray, function (key1, val1) {
                $.each(data, function (key2, val2) {
                    if (val2.eventYear == val1) {
                        if (val2.eventState == val) {
                            lossTempLine = lossTempLine + val2.eventPropertyDamage;
                        }
                    }
                });
                lossInStateLineChart.push(lossTempLine);
                lossTempLine = 0;
            });
            lossPerYearInStateLineChart.push(lossInStateLineChart);
            lossInStateLineChart = [];
        });
        lossPerYearAllStatesLineChart  = lossPerYearInStateLineChart;

        $scope.optionsLine = {
            multiTooltipTemplate: function (lossPerYearAllStatesLineChart) {
                return lossPerYearAllStatesLineChart.label + ': $' + lossPerYearAllStatesLineChart.value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            },
            scaleLabel: function (lossPerYearAllStatesLineChart) {
                return '$ '+lossPerYearAllStatesLineChart.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        };
        $scope.dataLine = lossPerYearAllStatesLineChart;
        $scope.labelsLine = yearArray;
        $scope.seriesLine = statesArray;
        /* END of line Chart for loss per year with respect to each state*/

    });
}]);
