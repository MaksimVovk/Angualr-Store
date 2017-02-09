storeApp.filter('trueFalse', function() {
    return function(input) {
        if (!input) {
            return "нету"
        } else return input
    }

});
storeApp.filter('sortLastAdd', function() {
    return function(product) {
        if (!product) return product;
        return product.filter(function(el) { return el.lastAdd })
    }
});
angular.module('storeApp')
    .filter('checkOs', function() {
        return function(input, osSystem) {
            var result = [];
            angular.forEach(input, function(items) {
                angular.forEach(osSystem, function(selected, osSystem) {
                    if (selected && osSystem == items.osFamily) {
                        result.push(items);
                    }
                })
            })
            if (result.length == 0) {
                return input;
            } else return result;
        }
    })
    .filter('checkMade', function() {
        return function(input, family) {
            var result = [];
            angular.forEach(input, function(items) {
                angular.forEach(family, function(selected, family) {
                    if (selected && family == items.family) {
                        result.push(items);
                    }
                })
            })
            if (result.length == 0) {
                return input;
            } else return result;
        }
    })