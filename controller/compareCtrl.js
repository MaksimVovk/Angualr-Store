storeApp.controller('compareCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.compareArray = JSON.parse(window.localStorage.getItem('compare')) || [];
    $scope.deleteCompare = function(el) {
        window.localStorage["compare"] = JSON.stringify('', function(key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });
        $location.path('/');
        $location.replace();
    };
}]);