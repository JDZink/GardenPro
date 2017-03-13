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
  vm.register = function(user) {
    authenticationService.register(user);
    regForm.reset();
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
      <input type="email" name="email" ng-model="user.email" required placeholder="email"><br>
      <input type="password" name="password" ng-model="user.password" placeholder="password"
        required ng-minlength="6"><br>
      <input type="button" value="LogIn" ng-click="$ctrl.login(user)">
      <input type="button" value="Register" ng-click="$ctrl.register(user)">
    </form>
  </div>

  <div>
    <ul>
      <li ng-show="regForm.email.$dirty && regForm.email.$invalid">
        Email must be valid
      </li>
      <li ng-show="regForm.email.$dirty && regForm.email.$error.required">
        Email is required
      </li>
      <li ng-show="regForm.password.$dirty && regForm.password.$invalid">
        password must be more than 6 characters
      </li>
      <li ng-show="regForm.password.$dirty && regForm.password.$error.required">
        password is required
      </li>
    </ul>
  </div>
  `
});
