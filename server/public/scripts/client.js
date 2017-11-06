// Establish angular app
var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// routes
myApp.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
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
            templateUrl: '/views/template/login.html',
            controller: 'LoginController as lc'
        })
        .when('/addEvent', {
            templateUrl: '/views/template/addEvent.html',
            controller: 'AddEventController as ac'
        })
        .when('/events', {
            templateUrl: '/views/template/events.html',
            controller: 'EventListController as ec'
        })
        .when('/', {
            templateUrl: '/views/template/landing.html',
            controller: 'LandingController as mc'
        })
        .otherwise({
            redirectTo: 'landing'
        });

    // Angular Material themes to control the colors of elements
    $mdThemingProvider
        .theme('default')
        .primaryPalette('teal')
        .accentPalette('blue-grey')
        .warnPalette('deep-orange')
        .backgroundPalette('grey');
});