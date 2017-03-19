var app = angular.module('ngGarden');

var signupController = function($location, authenticationService){
  var vm = this;
  vm.register = function(user) {
    authenticationService.register(user)
    .then(function(res){
      $location.path('/garden');
    });
  };
  var user = {};
  user.zone = 1;
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
  </style>

  <div class="login-clean">
      <form name="regForm" method="post">
          <h2 class="sr-only">Login Form</h2>
          <div class="regHead"><span class="signupHead">Sign Up For</span>
          <span class="moveUp"><strong>DigIt</strong> <i class="fa fa-leaf" aria-hidden="true"></i></span></div>
          <div class="form-group">
              <input class="form-control" type="text" name="username" placeholder="username" ng-model="user.username"
                required ng-minlength="4">
          </div>
          <div class="form-group">
              <input class="form-control" type="password" name="password" ng-model="user.password" placeholder="password"
                required ng-minlength="6">
          </div>
          <div class="form-group">
              <input class="form-control" type="password" name="password2" ng-model="user.password" placeholder="confirm password"
                required ng-minlength="6">
          </div>
          <div class="form-group zoneSelect">
          <span class="zoneSelect"> Zone: <select name="zone" ng-model="user.zone" required>
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
          </select></span>
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

              <li ng-show="regForm.password.$dirty && regForm.password.$invalid && regForm.password2.$dirty && regForm.password2.$invalid
              && (regForm.password !== regForm.password2)">
                password must match confirm password
              </li>

              <li ng-show="regForm.password.$dirty && regForm.password.$error.required">
                password is required
              </li>
            </ul>
          </div>
          <div class="form-group">
              <input type="submit" class="btn btn-primary regBtnFull" value="Register" type="submit" ng-click="$ctrl.register(user)"/>
          </div>
      </form>
  </div>
  `
});
