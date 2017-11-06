myApp.controller('LoginController', function($http, $location, UserService, $mdDialog) {

    var vm = this;

    vm.userservice = UserService;

    // trying to capture user's name variable to display in greeting on the DOM
    vm.userInfo = '';

    // function to log in a user
    vm.login = function() {
        vm.user = {
            username: vm.username,
            password: vm.password
        };

        // if email or password are missing, dialog to inform user of required fields
        if(vm.user.username === undefined || vm.user.password === undefined) {
            $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('.popupContainer')))
                .clickOutsideToClose(false)
                .title('Error')
                .textContent('Email and Password are required fields')
                .ariaLabel('Missing Information Dialog')
                .ok('Oh no!')
            );
        } else {
            $http.post('/login', vm.user).then(function(res) {
                vm.userInfo = res.data;
                console.log('userInfo inside function', vm.userInfo);
                if(res.data.username) {
                    $location.path('/home');
                } else {
                    // dialog if user enters wrong credentials
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('.popupContainer')))
                        .clickOutsideToClose(false)
                        .title('Error')
                        .textContent('Incorrect credentials, please try again')
                        .ariaLabel('Missing Information Dialog')
                        .ok('Oh no!')
                    )
                };
                return vm.userInfo;
            }).catch(function(res) {
                // dialog if user is not registered
                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('.popupContainer')))
                    .clickOutsideToClose(false)
                    .title('Error')
                    .textContent('Please register to use this app')
                    .ariaLabel('Missing Information Dialog')
                    .ok('Oh no!')
                );
            });
        }
    };
    // function to log out a user
    vm.logout = function() {
        $http.get('/logout').then(function(res) {
            $location.path('/');
        });
    }
});