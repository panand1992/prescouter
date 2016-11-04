var app = angular.module('myApp', ['ui.materialize']);
app.controller('myCtrl', function($scope, $http) {
    $http.get("response.json").then(function(response) {
        $scope.distanceData = response.data;
        $scope.cityDeparture = _.uniq($scope.distanceData.deals, function(deal){ return deal.departure; });
        $scope.cityDeparture = _.sortBy($scope.cityDeparture, function(city){ return city.departure; });
        $scope.cityArrival = _.uniq($scope.distanceData.deals, function(deal){ return deal.arrival; });
        $scope.cityArrival = _.sortBy($scope.cityArrival, function(city){ return city.arrival; });
    });
});