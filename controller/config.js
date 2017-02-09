storeApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })

    $routeProvider
        .when('/', {
            templateUrl: 'view/home.html',
            controller: 'mainCtrl'
        })
        .when('/notebook', {
            templateUrl: 'view/notebook.html',
            controller: 'productCtrl'
        })
        .when('/computer', {
            templateUrl: 'view/computer.html',
            controller: 'productCtrl'
        })
        .when('/backet', {
            templateUrl: 'view/backet.html',
            controller: 'backetCtrl'
        })
        .when('/mystore', {
            templateUrl: 'view/mystore.html',
            controller: 'mystoreCtrl'
        })
        .when('/success', {
            templateUrl: 'view/success.html',
            controller: 'successCtrl'
        })
        .when('/compare', {
            templateUrl: 'view/compare.html',
            controller: 'compareCtrl'
        })
        .when('/about', {
            templateUrl: 'view/about.html',
            controller: 'aboutCtrl'
        })
        .when('/:productId', {
            templateUrl: 'view/product-details.html',
            controller: 'productInfoCtrl'
        })
        .otherwise({
            ridirectTo: '/'
        })
}]);