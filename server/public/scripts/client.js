// Establish angular app
var myApp = angular.module('myApp', ['ngRoute']);
console.log('client.js loaded');
// routes
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/home', {
            templateUrl: '/views/template/home.html',
            controller: 'HomeController as hc'
        })
        .when('/register', {
            templateUrl: '/views/template/register.html',
            controller: 'RegisterController as rc'
        })
        .when('/login', {
            templateUrl: 'views/template/login.html',
            controller: 'LoginController as lc'
        })
        .when('/', {
            templateUrl: 'views/template/landing.html',
            controller: 'LandingController as mc'
        })
        .otherwise({
            redirectTo: 'landing'
        });
});