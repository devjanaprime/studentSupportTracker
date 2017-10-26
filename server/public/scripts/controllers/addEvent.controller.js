myApp.controller('AddEventController', function($http, $location) {
    console.log('AddEventController');

    var vm = this;

    console.log('user', vm.user);

    vm.eventSubmit = function() {
        console.log('inside event submit function');
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