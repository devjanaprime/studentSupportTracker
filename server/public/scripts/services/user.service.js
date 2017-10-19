myApp.service('UserService', function($http) {
    console.log('UserService');

    var self = this;

    // takes user obj and sends to /register route to create new user
    self.register = function(userObj) {
        $http.post('/register', userObj).then(function(res) {
            console.log('Successful response from server');
        }).catch(function(err) {
            console.log('error in user service');
        });
    }
});