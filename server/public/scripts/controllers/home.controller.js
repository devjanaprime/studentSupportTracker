myApp.controller('UserController', function(UserService) {
    console.log('UserController');
    var vm = this;

    vm.userService = UserService;

    vm.userObject = UserService.userObject;
})