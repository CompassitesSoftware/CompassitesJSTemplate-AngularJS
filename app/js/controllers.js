'use strict';

/* Controllers */
/* Angular creates scope in ng-repeate */

var offeringControllers = angular.module('myApp.offeringControllers', []);

// Programme
offeringControllers.controller('ProgrammeListCtrl', ['$scope', 'Programme',
    function($scope, Programme) {
        /* builds the mods object used in the view */
        /* scope is whatever child dom where controller is applied */
        $scope.programmes = Programme.query();
    }]);

// Generic Controller
offeringControllers.controller('ListCtrl', ['$scope', '$routeParams', 'Di',
    function($scope, $routeParams, Di) {
        /* builds the mods object used in the view */
        /* scope is whatever child dom where controller is applied */
        //$scope[$routeParams.method] = Di.list($routeParams.method).query();
        $scope.list = Di.list($routeParams.tree, $routeParams.method).query();
    }]);

// Dashboard
offeringControllers.controller('DashboardCtrl', ['$scope',
    function($scope) {
        Morris.Donut({
            element: 'morris-chart-donut',
            data: [
                {label: "Referal", value: 10},
                {label: "Event", value: 30},
                {label: "Roadshow", value: 40},
                {label: "Website", value: 10},
                {label: "Newspaper", value: 10}
            ],
            formatter: function(y) {
                return y + "%";
            }
        });
        Morris.Area({
            element: 'morris-area',
            data: [
                {y: '2013-01', a: 100, b: 90, c: 80, d: 70},
                {y: '2013-02', a: 75, b: 65, c: 50, d: 40},
                {y: '2013-03', a: 50, b: 40, c: 40, d: 40},
                {y: '2013-04', a: 75, b: 65, c: 55, d: 50},
                {y: '2013-05', a: 50, b: 40, c: 40, d: 30},
                {y: '2013-06', a: 75, b: 65, c: 55, d: 45},
                {y: '2013-07', a: 100, b: 90, c: 85, d: 80}
            ],
            xkey: 'y',
            ykeys: ['a', 'b', 'c', 'd'],
            labels: ['Registered', 'Took PreTest', 'Joined Classes', 'Finished Classes']
        });
    }]);

offeringControllers.controller('CalendarCtrl', ['$scope',
    function($scope) {
        /* builds the mods object used in the view */
        /* scope is whatever child dom where controller is applied */
        //$scope.learners = Learner.query();

        $(document).ready(function() {

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();
            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                //defaultView: 'agendaWeek',
                editable: true,
                events: [
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 7, 13, 0),
                        end: new Date(y, m, 7, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 14, 13, 0),
                        end: new Date(y, m, 14, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 21, 13, 0),
                        end: new Date(y, m, 21, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 28, 13, 0),
                        end: new Date(y, m, 28, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, d + 21, 13, 0),
                        end: new Date(y, m, d + 21, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 7, 13, 0),
                        end: new Date(y, m, 7, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 14, 13, 0),
                        end: new Date(y, m, 14, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 21, 13, 0),
                        end: new Date(y, m, 21, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 28, 13, 0),
                        end: new Date(y, m, 28, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, d + 21, 13, 0),
                        end: new Date(y, m, d + 21, 16, 0),
                        allDay: false
                    },
                    {
                        id: 997,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 7, 13, 0),
                        end: new Date(y, m, 7, 16, 0),
                        allDay: false
                    },
                    {
                        id: 997,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 14, 13, 0),
                        end: new Date(y, m, 14, 16, 0),
                        allDay: false
                    },
                    {
                        id: 997,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 21, 13, 0),
                        end: new Date(y, m, 21, 16, 0),
                        allDay: false
                    },
                    {
                        id: 997,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 28, 13, 0),
                        end: new Date(y, m, 28, 16, 0),
                        allDay: false
                    },
                    {
                        id: 997,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, d + 21, 13, 0),
                        end: new Date(y, m, d + 21, 16, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 7, 9, 0),
                        end: new Date(y, m, 7, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 14, 9, 0),
                        end: new Date(y, m, 14, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 21, 9, 0),
                        end: new Date(y, m, 21, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 28, 9, 0),
                        end: new Date(y, m, 28, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, d + 21, 9, 0),
                        end: new Date(y, m, d + 21, 12, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 2, 13, 0),
                        end: new Date(y, m, 2, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 9, 13, 0),
                        end: new Date(y, m, 9, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 16, 13, 0),
                        end: new Date(y, m, 16, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 23, 13, 0),
                        end: new Date(y, m, 23, 16, 0),
                        allDay: false
                    },
                    {
                        id: 999,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, d + 16, 13, 0),
                        end: new Date(y, m, d + 16, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 2, 13, 0),
                        end: new Date(y, m, 2, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 9, 13, 0),
                        end: new Date(y, m, 9, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 16, 13, 0),
                        end: new Date(y, m, 16, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, 23, 13, 0),
                        end: new Date(y, m, 23, 16, 0),
                        allDay: false
                    },
                    {
                        id: 998,
                        title: 'JELFI-13-09-06-T',
                        start: new Date(y, m, d + 16, 13, 0),
                        end: new Date(y, m, d + 16, 16, 0),
                        allDay: false
                    },
                    {
                        id: 992,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 2, 13, 0),
                        end: new Date(y, m, 2, 16, 0),
                        allDay: false
                    },
                    {
                        id: 992,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 9, 13, 0),
                        end: new Date(y, m, 9, 16, 0),
                        allDay: false
                    },
                    {
                        id: 992,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 16, 13, 0),
                        end: new Date(y, m, 16, 16, 0),
                        allDay: false
                    },
                    {
                        id: 992,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, 23, 13, 0),
                        end: new Date(y, m, 23, 16, 0),
                        allDay: false
                    },
                    {
                        id: 992,
                        title: 'HGLFI-13-09-06-T',
                        start: new Date(y, m, d + 16, 13, 0),
                        end: new Date(y, m, d + 16, 16, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 2, 9, 0),
                        end: new Date(y, m, 2, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 9, 9, 0),
                        end: new Date(y, m, 9, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 16, 9, 0),
                        end: new Date(y, m, 16, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, 23, 9, 0),
                        end: new Date(y, m, 23, 12, 0),
                        allDay: false
                    },
                    {
                        id: 996,
                        title: 'JELFB-13-09-06-T',
                        start: new Date(y, m, d + 16, 9, 0),
                        end: new Date(y, m, d + 16, 12, 0),
                        allDay: false
                    }



                ]
            });
        });
    }]);