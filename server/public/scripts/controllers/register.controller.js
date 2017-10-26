myApp.controller('RegisterController', function($http, $location, UserService) {

    var vm = this;

    vm.message = '';

    // function to register a new user if all the required information is filled out
    vm.register = function() {
        vm.newUser = {
            name: vm.name,
            username: vm.username,
            password: vm.password
        };
        if(vm.newUser.name === '' || vm.newUser.username === '' || vm.newUser.password === '') {
            vm.message = 'Please enter your name, a username, and a password'
        } else {
            $http.post('/register', vm.newUser).then(function(res) {
                $location.path('/');
            }).catch(function(res) {
                vm.message = 'Please try again';
            });
        }
    }

})