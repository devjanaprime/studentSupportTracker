myApp.controller('HomeController', function($location) {

    var vm = this;

    // relocates user to view to add event
    vm.addEventClick = function() {
        $location.url('/addEvent');
    };

    // relocates user to view to see events
    vm.viewEventClick = function() {
        $location.url('/events');
    };

});