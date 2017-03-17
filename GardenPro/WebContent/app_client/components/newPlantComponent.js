var app = angular.module('ngGarden');

var registrationController = function($location, authenticationService){
  var vm = this;

  vm.addPlant = function(user) {
    plantService.addPlant(user)
    .then(function(res){
      $location.path('/garden');
    });
    regForm.reset();
  };

  vm.editPlant = function() {
    $location.path('/editPlant');
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
    <input type="text" name="commonName" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="botanicalName" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="type" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="sowingMethod" ng-model="user.username" placeholder="How to sow" REQUIRED> <br>
    <label for="weeksBeforeLastFrostId">How many weeks before the frost date should it be planted indoors?</label>
    <input type="number" id="weeksBeforeLastFrostId" name="weeksBeforeLastFrost" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>
    <input type="text" name="variety" ng-model="user.username" placeholder="username" REQUIRED> <br>


      <br>
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
