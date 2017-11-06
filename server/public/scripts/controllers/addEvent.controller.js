myApp.controller('AddEventController', function($http, $location, $mdDialog) {

    var vm = this;


    // function to add a new event, but only if required information is filled out, then redirects user back to logged in landing page
    vm.eventSubmit = function() {

        if (vm.attendees) {
            vm.attendeesArray = [];
            
            vm.attendees.replace(/\s/g, '').split(",").map(function(attendee) {
                vm.attendeesArray.push({"name": attendee});
            });
        }
        
        if (vm.volunteers) {
            vm.volunteersArray = [];
            
                vm.volunteers.replace(/\s''/g).split(",").map(function(volunteer) {
                    vm.volunteersArray.push({"name": volunteer});
                });
        }
        
        vm.newEvent = {
            eventName: vm.eventName,
            date: vm.eventDate,
            attendees: vm.attendeesArray,
            notes: vm.notes,
            volunteers: vm.volunteersArray
        };
        
        // display dialog if any required fields are missing
        if(vm.newEvent.eventName === undefined || vm.newEvent.date === undefined || vm.newEvent.attendees === undefined) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(false)
                .title('Error')
                .theme(WarnPalette)
                .textContent('Event Name, Date, and Attendees are required fields')
                .ariaLabel('Missing Information Dialog')
                .ok('Oh no!')
            );
        } else {
            $http.post('/addEvent', vm.newEvent).then(function(res) {
                $location.path('/home');
            }).catch(function(res) {
                console.log(res);
            });
        }
    }
});