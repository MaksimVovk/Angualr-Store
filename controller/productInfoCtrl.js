storeApp.controller('productInfoCtrl', ['$scope', '$http', '$location', '$routeParams', '$rootScope', '$timeout', function($scope, $http, $location, $routeParams, $rootScope, $timeout) {
    $scope.productId = $routeParams.productId;
    $http.get('data/products.json').success(function(data) {
        $scope.produts = data;
        $scope.getObj = function(id) {
            for (var key in $scope.produts) {
                for (var val in $scope.produts[key]) {
                    for (var property in $scope.produts[key][val]) {
                        if ($scope.produts[key][val]['id'] == id) {
                            return $scope.produts[key][val]
                        }
                    }
                }
            }
        }

        $scope.$r = $rootScope;
        $scope.showAdded = true;
        $scope.backet = JSON.parse(window.localStorage.getItem("orders")) || [];
        $rootScope.numOrder = $scope.backet.length;
        $scope.prodInfo = $scope.getObj($routeParams.productId);

        $scope.alertMessage = function(mes) {
            $scope.showAdded = false;
            $scope.alertText = mes;
            $timeout(function() {
                $scope.showAdded = true;
            }, 1500);
        }
        $scope.buttonBay = function() {

            console.log($scope.showAdded);
            $rootScope.numOrder++;
            $scope.backet.push($scope.prodInfo);
            window.localStorage["orders"] = JSON.stringify($scope.backet, function(key, val) {
                if (key == '$$hashKey') {
                    return undefined;
                }
                return val
            });
            $scope.alertMessage('Товар добавлено в корзину');

        };
        $scope.showCompare = true;
        $scope.getToCompare = function(elem) {
            $scope.arrayCompare = JSON.parse(window.localStorage.getItem("compare")) || [];
            if ($scope.arrayCompare.length < 2) {
                for (var i = 0; i < $scope.arrayCompare.length; i++) {
                    if ($scope.arrayCompare[i].name == elem.name) {
                        $scope.alertMessage('Этот продукт уже добавлен в корзину');
                        return
                    }
                }
                $scope.arrayCompare.push(elem);
                $scope.alertMessage('Товар добавлено для сравнения');
                window.localStorage['compare'] = JSON.stringify($scope.arrayCompare, function(key, val) {
                    if (key == '$$hashKey') {
                        return undefined;
                    }
                    return val;
                });
            } else {
                $scope.alertMessage('Корзина сравнения заполнена');
            }
        };

    });
}]);