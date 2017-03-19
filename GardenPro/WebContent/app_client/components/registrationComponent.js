var app = angular.module('ngGarden');

var registrationController = function($location, authenticationService){
  var vm = this;
  vm.login = function(user) {
    authenticationService.login(user)
    .then(function(res){
      $location.path('/garden');
    });
    regForm.reset();
  };
  vm.signup = function() {
    $location.path('/register');
  };
};

app.component('registrationComponent', {
  controller : registrationController,
  template : `
  <style>
    form *.ng-dirty.ng-invalid {
      background-color: #df9393;
    }
    form *.ng-dirty.ng-valid {
      background-color: #b4e49c;
    }
  </style>

  <div class="login-clean">
      <form name="regForm" method="post">
          <h2 class="sr-only">Login Form</h2>
          <div class="illustration"><strong>DigIt</strong> <i class="fa fa-leaf" aria-hidden="true"></i></div>
          <div class="form-group">
              <input class="form-control" type="text" name="username" placeholder="username" ng-model="user.username"
                required ng-minlength="4">
          </div>
          <div class="form-group">
              <input class="form-control" type="password" name="password" ng-model="user.password" placeholder="password"
                required ng-minlength="6">
          </div>

          
          <div class="errorMessages">
            <ul>
              <li ng-show="regForm.username.$dirty && regForm.username.$invalid">
                Username must be at least 4 characters
              </li>
              <li ng-show="regForm.username.$dirty && regForm.username.$error.required">
                Username is required
              </li>
              <li ng-show="regForm.password.$dirty && regForm.password.$invalid">
                password must be at least 6 characters
              </li>
              <li ng-show="regForm.password.$dirty && regForm.password.$error.required">
                password is required
              </li>
            </ul>
          </div>
          <div class="form-group">
              <input type="submit" class="btn btn-primary regBtn" value="Log In" type="submit" ng-click="$ctrl.login(user)"/>
              <input type="button" class="btn btn-primary regBtn" value="Sign Up" type="submit" ng-click="$ctrl.signup()"/>
          </div>
      </form>
  </div>
  `
});
