storeApp.controller('mystoreCtrl', ['$scope', '$http', '$location', '$timeout', function($scope, $http, $location, $timeout) {
    $scope.arrayUsers = JSON.parse(window.localStorage.getItem("users")) || [];
    $scope.flagOn = JSON.parse(window.localStorage.getItem("flag"));
    if ($scope.flagOn == true) {
        $scope.mStore = false;
        $scope.userIn = JSON.parse(window.localStorage.getItem("userIn"));
    } else { $scope.mStore = true }
    $scope.showM = true;
    $scope.alertMessage = function(mes) {
        $scope.showM = false;
        $scope.alertM = mes;
        $timeout(function() {
            $scope.showM = true;
        }, 1500);
    }
    $scope.registerUser = function() {
        $scope.validateEmail = function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(re.test(email));
            return re.test(email);
        }
        if ($scope.validateEmail($scope.emailUser)) {

            for (var i = 0; i < $scope.arrayUsers.length; i++) {
                if ($scope.emailUser == $scope.arrayUsers[i].email) {
                    $scope.alertMessage('Такой пользователь уже зарегестрирован');
                    return;
                }
            }
            if ($scope.passwordUser == undefined) {
                $scope.alertMessage('Введите пароль');
                return;
            }
            $scope.arrayUsers.push({ email: $scope.emailUser, password: $scope.passwordUser, name: $scope.userName, phone: $scope.userTel, city: $scope.userCity, street: $scope.userStreet, house: $scope.userHouse, flat: $scope.userFlat });
            window.localStorage["users"] = JSON.stringify($scope.arrayUsers, function(key, val) {
                if (key == '$$hashKey') {
                    return undefined;
                }
                return val
            });
            $location.path('/');
            $location.replace();
        } else $scope.alertMessage('Заполните форму');

        console.log($scope.arrayUsers);
    }

    $scope.enterUser = function() {

        console.log($scope.arrayUsers.length);
        $scope.arrayUsers = JSON.parse(window.localStorage.getItem("users")) || [];

        for (var i = 0; i < $scope.arrayUsers.length; i++) {
            console.log(i);

            if ($scope.arrayUsers[i].email.toLowerCase() == $scope.userEmailEnter.toLowerCase()) {
                if ($scope.arrayUsers[i].password == $scope.userPasswordEnter) {
                    $location.path('/');
                    $location.replace();
                    $scope.flagOn = true;
                    window.localStorage["flag"] = JSON.stringify($scope.flagOn, function(key, val) {
                        if (key == '$$hashKey') {
                            return undefined;
                        }
                        return val
                    });
                    window.localStorage["userIn"] = JSON.stringify($scope.arrayUsers[i], function(key, val) {
                        if (key == '$$hashKey') {
                            return undefined;
                        }
                        return val
                    });
                    break;

                } else {

                    $scope.alertMessage("Неверный логин или пароль");
                    break;
                }

            } else {
                if (i == ($scope.arrayUsers.length - 1)) {
                    $scope.alertMessage("Неверный логин или пароль");
                }
            }

        }
    }
    $scope.exitFromAccount = function() {
        $scope.flagOn = false;
        window.localStorage["flag"] = JSON.stringify($scope.flagOn, function(key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });
        window.localStorage["userIn"] = JSON.stringify('', function(key, val) {
            if (key == '$$hashKey') {
                return undefined;
            }
            return val
        });
        $location.path('/');
        $location.replace();
    }
    $scope.checkForm = true;
    $scope.enter = function(evt) {
        angular.element(evt.target).addClass('active');
        angular.element(document.querySelector('.regStore').classList.remove('active'));
        return $scope.checkForm = true;
    }

    $scope.reg = function(evt) {
        angular.element(evt.target).addClass('active');
        angular.element(document.querySelector('.enterStore').classList.remove('active'));
        return $scope.checkForm = false;
    }

}]);