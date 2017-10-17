myApp.controller('LandingController', function($location) {
    console.log('LandingController');
    
    var vm = this;

    //vm.userService = UserService;

    vm.loginClick = function() {
        console.log('Login button clicked!');
        $location.url('/login');
    }

    vm.registerClick = function() {
        console.log('Register button clicked!');
        $location.url('/register');
    }
});