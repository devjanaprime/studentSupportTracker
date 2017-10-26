myApp.controller('AddEventController', function($http, $location) {

    var vm = this;

    // function to add a new event, but only if required information is filled out, then redirects user back to logged in landing page
    vm.eventSubmit = function() {
        vm.newEvent = {
            eventName: vm.eventName,
            date: vm.eventDate,
            attendees: vm.attendees,
            notes: vm.notes,
            volunteers: vm.volunteers
        };
        if(vm.newEvent.eventName === '' || vm.newEvent.date === '' || vm.newEvent.attendees === '') {
            vm.message = 'Please enter event name, date, and attendees'
        } else {
            $http.post('/addEvent', vm.newEvent).then(function(res) {
                $location.path('/home');
            }).catch(function(res) {
                vm.message = 'Please try again';
            });
        }
    }
});