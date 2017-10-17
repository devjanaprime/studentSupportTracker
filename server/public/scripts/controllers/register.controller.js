myApp.controller('RegisterController', function($http, $location, UserService) {
    console.log('RegisterController');

    var vm = this;

    //vm.userService = UserService;



    vm.message = '';

    vm.register = function() {
        vm.newUser = {
            name: vm.name,
            username: vm.username,
            password: vm.password
        };
        console.log('RegisterController register function');
        if(vm.newUser.name === '' || vm.newUser.username === '' || vm.newUser.password === '') {
            vm.message = 'Please enter your name, a username, and a password'
        } else {
            console.log('RegisterController register sending to server', vm.newUser);
            $http.post('/register', vm.newUser).then(function(res) {
                console.log('RegisterController register successful');
                $location.path('/');
            }).catch(function(res) {
                console.log('RegisterController register error');
                vm.message = 'Please try again';
            });
        }
    }

})