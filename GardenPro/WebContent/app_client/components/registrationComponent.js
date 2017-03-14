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
    form * {
      margin:5px;
    }
  </style>

  <div style="margin-left:5%;">
    <form name="regForm">
      <input type="text" name="username" ng-model="user.username" placeholder="username" required ng-minlength="4"><br>
      <input type="password" name="password" ng-model="user.password" placeholder="password"
        required ng-minlength="6"><br>
      <input type="submit" value="LogIn" ng-click="$ctrl.login(user)">
      <input type="button" value="Sign Up" ng-click="$ctrl.signup()">
    </form>
  </div>

  <div>
    <ul>
      <li ng-show="regForm.email.$dirty && regForm.email.$invalid">
        Username must be at least 4 characters
      </li>
      <li ng-show="regForm.email.$dirty && regForm.email.$error.required">
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
  `
});
