'use strict';

/* Filters */

angular.module('myApp.filters', []).
        filter('interpolate', ['version', function(version) {
                return function(text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
                }
            }]);
/* Filters */

angular.module('modFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});
