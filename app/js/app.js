'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
    'ngRoute',
    //'ngAnimate',
    //'ui.bootstrap',
    'myApp.offeringControllers',
    'myApp.offeringServices'
]);

app.config(['$routeProvider', function($routeProvider) {
		// Default view
        $routeProvider.when('/', {templateUrl: 'partials/common/login.html'});

        $routeProvider.when('/:package/:method', {
            // This allows us to dynamically change the template for this route since you cannot inject services into the templateUrl method.
            template: "<div ng-include='templateUrl'></div>",
			
            // This controller will execute for this route, then we replace the template dynamnically based on the current url framgments.
            controller: function($scope, $route, $routeParams) {
                // based on the url framgments we use the core paths:
                $scope.templateUrl = 'partials/' + $routeParams.package + '/' + $routeParams.method + '.html';
            }
        });

        $routeProvider.when('/:package/:tree/:method', {
            // This allows us to dynamically change the template for this route since you cannot inject services into the templateUrl method.
            template: "<div ng-include='templateUrl'></div>",
			
            // This controller will execute for this route, then we replace the template dynamnically based on the current url framgments.
            controller: function($scope, $route, $routeParams) {
                if (!$routeParams.tree || !$routeParams.method) {
                    $scope.templateUrl = "partials/common/dashboard.html";
                }

                // otherwise if it is a core tree we use the core paths:
                // partials/{treetype}/{method}.html
                $scope.templateUrl = 'partials/' + $routeParams.package + '/' + $routeParams.tree + '/' + $routeParams.method + '.html';
            }
        });
		
		// Default route
        $routeProvider.otherwise({redirectTo: '/'});
    }]);