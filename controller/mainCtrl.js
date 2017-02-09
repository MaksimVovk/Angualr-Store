storeApp.controller('mainCtrl', ['$scope', '$http', '$location', '$rootScope', '$timeout', function($scope, $http, $location, $rootScope, $timeout) {
    $http.get('data/products.json').success(function(data, status, headers, config) {
        $scope.produts = data;

    });
    $scope.backet = JSON.parse(window.localStorage.getItem("orders")) || [];
    $scope.$r = $rootScope;
    $rootScope.numOrder = $scope.backet.length;

    $scope.toCompare = function() {
        $scope.compareArray = JSON.parse(window.localStorage.getItem('compare')) || [];
        if ($scope.compareArray.length != 2) {
            $scope.alertMessage('Добавьте товар для сравнения');
            return
        }
        if ($scope.compareArray.length == 2) {
            $location.path('/compare');
            $location.replace();
        }
    }
    $scope.showMes = true;
    $scope.alertMessage = function(mes) {
        $scope.showMes = false;
        $scope.alertMess = mes;
        $timeout(function() {
            $scope.showMes = true;
        }, 1500);
    }
}]);