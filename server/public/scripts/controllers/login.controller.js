myApp.controller('LoginController', function($http, $location, UserService) {

    var vm = this;

    vm.userservice = UserService;
    
    vm.message = '';

    // function to log in a user
    vm.login = function() {
        vm.user = {
            username: vm.username,
            password: vm.password
        };
        if(vm.user.username === '' || vm.user.password === '') {
            vm.message = 'Enter your username and password';
        } else {
            $http.post('/login', vm.user).then(function(res) {
                if(res.data.username) {
                    $location.path('/home');
                } else {
                    vm.message = 'Wrong username or password, please try again';
                };
            }).catch(function(res) {
                vm.message = 'Please register to use this app!'
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