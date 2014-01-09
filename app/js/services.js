'use strict';

/* Services */

var offeringServices = angular.module('myApp.offeringServices', ['ngResource']);

/* Defines the models */
/* Mod define the service object variable used in ng-repeat */

offeringServices.factory('ProgrammeModules', ['$resource',
    function($resource) {
        return $resource('data/module/:modId.json', {}, {
            query: {method: 'GET', params: {modId: 'programme_modules'}, isArray: true}
        });
    }]);

offeringServices.factory('Class', ['$resource',
    function($resource) {
        return $resource('data/class/:classId.json', {}, {
            query: {method: 'GET', params: {classId: 'classes'}, isArray: true}
        });
    }]);

offeringServices.factory('Learner', ['$resource',
    function($resource) {
        return $resource('data/config/:learnerId.json', {}, {
            query: {method: 'GET', params: {learnerId: 'learners'}, isArray: true}
        });
    }]);

offeringServices.factory('Trainer', ['$resource',
    function($resource) {
        return $resource('data/trainer/:trainerId.json', {}, {
            query: {method: 'GET', params: {trainerId: 'trainers'}, isArray: true}
        });
    }]);

offeringServices.factory('Di0', ['$resource',
    function($resource) {
        return $resource('data/config/:id.json', {}, {
            query: {method: 'GET', params: {locationId: 'locations'}, isArray: true}
        });
    }]);

offeringServices.factory('Di', ['$resource',
    function($resource) {
        return {
            list: function(path, param) {
                return $resource('data/' + path + '/' + param + '.json');
            }
        };
    }]);

