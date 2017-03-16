var app = angular.module('ngGarden');

var signupController = function($location, authenticationService){
  var vm = this;
  vm.register = function(user) {
    authenticationService.register(user)
    .then(function(res){
      $location.path('/garden');
    });
  };
};

app.component('signupComponent', {
  controller : signupController,
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
      <input type="text" name="username" ng-model="user.username" placeholder="username" required ng-minlength="4"/><br>
      <input type="password" name="password" ng-model="user.password" placeholder="password"
        required ng-minlength="6"/><br>
      <input type="password" name="password2" placeholder="confirm password"
        required ng-minlength="6"/><br>
        Zone: <select name="zone" ng-model="user.zone" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
        </select><br>
        <input type="submit" value="Register" ng-click="$ctrl.register(user)">
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
      <li ng-show="regForm.password.$dirty && regForm.password.$invalid && regForm.password2.$dirty && regForm.password2.$invalid
      && (regForm.password !== regForm.password2)">
        password must match confirm password
      </li>
      <li ng-show="regForm.password.$dirty && regForm.password.$error.required">
        password is required
      </li>
    </ul>
  </div>
  `
});
