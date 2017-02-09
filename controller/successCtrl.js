storeApp.controller('successCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
    $scope.orderSuccess = JSON.parse(window.localStorage.getItem('orders'));
    console.log($scope.orderSuccess);
    if ($scope.orderSuccess != '') {
        console.log($scope.orderSuccess);
        $scope.totalPrice = 0;
        angular.forEach($scope.orderSuccess, function(val, i, arr) {
            $scope.totalPrice += +(arr[i].price);
        })
        $timeout(function() {
            window.localStorage["orders"] = JSON.stringify('', function(key, val) {
                if (key == '$$hashKey') {
                    return undefined;
                }
                return val
            });
        }, 1000);

    } else {
        $location.path('/');
        $location.replace();
    }

}]);