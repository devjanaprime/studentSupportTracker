myApp.controller('RegisterController', function($http, $location, UserService, $mdDialog, $mdToast) {

    var vm = this;


    // function to register a new user if all the required information is filled out
    vm.register = function() {
        vm.newUser = {
            name: vm.name,
            username: vm.username,
            password: vm.password
        };

        // dialog if any required fields are left blank
        if(vm.newUser.name === undefined || vm.newUser.username === undefined || vm.newUser.password === undefined) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('.popupContainer')))
                .clickOutsideToClose(false)
                .title('Error')
                .textContent('Name, Email, and Password are required fields')
                .ariaLabel('Missing Information Dialog')
                .ok('Oh no!')
            );
        } else {
            $http.post('/register', vm.newUser).then(function(res) {
                $location.path('/');
            }).catch(function(res) {
                // dialog if person tries to enter non-Prime email
                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('.popupContainer')))
                    .clickOutsideToClose(false)
                    .title('Error')
                    .textContent('Must use @primeacademy.io email address, please try again')
                    .ariaLabel('Invalid Registration Dialog')
                    .ok('Oh no!')
                );
            });
        }
    }

})