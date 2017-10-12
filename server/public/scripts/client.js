// Establish angular app
var myApp = angular.module('myApp', ['ngRoute']);

// routes
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/home', {
            templateUrl: '/views/template/home.html'
        })
        .when('/register', {
            templateUrl: '/views/template/register.html',
            controller: 'LoginController',
            controllerAs: 'lc'
        })
        .otherwise({
            redirectTo: '/home'
        });
});