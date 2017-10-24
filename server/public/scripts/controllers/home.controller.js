myApp.controller('HomeController', function($location) {
    console.log('HomeController');
    var vm = this;

    vm.addEventClick = function() {
        $location.url('/addEvent');
    };

    vm.viewEventClick = function() {
        $location.url('/events');
    };

});