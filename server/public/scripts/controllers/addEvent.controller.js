myApp.controller('AddEventController', function($http, $location, ngMaterial) {

    var vm = this;


    // function to add a new event, but only if required information is filled out, then redirects user back to logged in landing page
    vm.eventSubmit = function() {

        vm.attendeesArray = [];
        
        vm.attendees.replace(/\s/g, '').split(",").map(function(attendee) {
            vm.attendeesArray.push({"name": attendee});
        });
    
        vm.volunteersArray = [];
    
        vm.volunteers.replace(/\s''/g).split(",").map(function(volunteer) {
            vm.volunteersArray.push({"name": volunteer});
        });

        vm.newEvent = {
            eventName: vm.eventName,
            date: vm.eventDate,
            attendees: vm.attendeesArray,
            notes: vm.notes,
            volunteers: vm.volunteersArray
        };
        if(vm.newEvent.eventName === '' || vm.newEvent.date === '' || vm.newEvent.attendees === '') {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(false)
                .title('Oh no!')
                .
            )
        } else {
            $http.post('/addEvent', vm.newEvent).then(function(res) {
                $location.path('/home');
            }).catch(function(res) {
                vm.message = 'Please try again';
            });
        }
    }
});