storeApp.controller('aboutCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.chart = {};

    $scope.chart.type = "ColumnChart";
    $scope.randomNum = function() {
        return Math.round(70 + Math.random() * (200 - 70));
    }

    $scope.chart.data = {
        "cols": [
            { id: "t", label: "Topping", type: "string" },
            { id: "s", label: "Заказы", type: "number" }
        ],
        "rows": [{
                c: [
                    { v: "Пн" },
                    { v: $scope.randomNum() },
                ]
            }, {
                c: [
                    { v: "Вт" },
                    { v: $scope.randomNum() },
                ]
            },
            {
                c: [
                    { v: "Ср" },
                    { v: $scope.randomNum() }
                ]
            },
            {
                c: [
                    { v: "Чт" },
                    { v: $scope.randomNum() },
                ]
            },
            {
                c: [
                    { v: "Пт" },
                    { v: $scope.randomNum() },
                ]
            },
            {
                c: [
                    { v: "Сб" },
                    { v: $scope.randomNum() },
                ]
            },
            {
                c: [
                    { v: "Вс" },
                    { v: $scope.randomNum() },
                ]
            }
        ]

    };

    $scope.chart.options = {
        'title': 'Заказы за последнию неделю'
    };

}]);