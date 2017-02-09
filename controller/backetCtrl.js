storeApp.controller('backetCtrl', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope) {
    $scope.order = JSON.parse(window.localStorage.getItem("orders")) || [];
    if (JSON.parse(window.localStorage.getItem("flag")) == true) {
        $scope.userIn = JSON.parse(window.localStorage.getItem("userIn"));
        $scope.userNameI = $scope.userIn.name;
        $scope.userPhoneI = $scope.userIn.phone;
        $scope.userCityI = $scope.userIn.city;
        $scope.userStreetI = $scope.userIn.street;
        $scope.userHouseI = $scope.userIn.house;
        $scope.userFlatI = $scope.userIn.flat;

    }
    $scope.totalPrice = 0;
    angular.forEach($scope.order, function(val, i, arr) {
        $scope.totalPrice += +(arr[i].price);
    })
    $scope.deleteOrder = function(el) {
        for (var i = 0; i < $scope.order.length; i++) {
            if ($scope.order[i].name == el.name) {
                var index = i;
                $scope.order.splice(i, 1);
                break;
            }
        };
        $scope.totalPrice = $scope.totalPrice -= +(el.price);
        window.localStorage["orders"] = JSON.stringify($scope.order, function(key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });
        $scope.backet = JSON.parse(window.localStorage.getItem("orders")) || [];
        $scope.$r = $rootScope;
        $rootScope.numOrder = $scope.backet.length;
    };
    $scope.sendOrder = function() {
        if ($scope.userNameI == null || $scope.userNameI.length < 3) {
            alert('Введите Имя');
            return
        }
        if ($scope.userPhoneI == "" || $scope.userPhoneI.length < 8) {
            alert('Введите телефон');
            return;
        }
        $location.path('/success');
        $location.replace();

    }
}]);