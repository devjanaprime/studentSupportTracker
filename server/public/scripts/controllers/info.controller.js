myApp.controller('InfoController', function(UserService) {
    console.log('InfoController');
    
    var vm = this;

    vm.userService = UserService;
});