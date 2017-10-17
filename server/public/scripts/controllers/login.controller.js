myApp.controller('LoginController', function($http, $location, UserService) {
    console.log('LoginController');

    var vm = this;
    vm.test = 'hello';
    vm.user = {
        username: '',
        password: ''
    };

    vm.message = '';

    vm.login = function() {
        console.log('LoginController, inside login function');
        if(vm.user.username === '' || vm.user.password === '') {
            vm.message = 'Enter your username and password';
        } else {
            console.log('LoginController, logging in user: ', vm.user);
            $http.post('/', vm.user).then(function(res) {
                if(res.data.username) {
                    console.log('LoginController, log in success! ', res.data);
                    $location.path('/home');
                } else {
                    console.log('LoginController, failure', res);
                    vm.message = 'Wrong username or password, please try again';
                };
            }).catch(function(res) {
                console.log('LoginController register failure', res);
                vm.message = 'Please register to use this app!'
            });
        }
    };


});