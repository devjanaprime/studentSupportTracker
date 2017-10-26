myApp.controller('LandingController', function($location) {
    
    var vm = this;

    // function to relocate user to login view
    vm.loginClick = function() {
        $location.url('/login');
    }

    // function to relocate user to register view
    vm.registerClick = function() {
        $location.url('/register');
    }
});