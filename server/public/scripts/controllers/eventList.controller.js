myApp.controller('EventListController', function($http) {

    var vm = this;

    // function to get all events
    $http.get('/events').then(function(res) {
        vm.events = res.data;
    });
});