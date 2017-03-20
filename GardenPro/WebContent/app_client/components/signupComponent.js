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

  var temp = {};
  vm.zone_lookup_show = function() {
    document.getElementById("zoneLookup").style.display = "flex";
  };
  vm.zone_lookup_hide = function(seed) {
    document.getElementById("zoneLookup").style.display = "none";
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
              <input class="form-control" type="password" name="password2" ng-model="temp.password" placeholder="confirm password"
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
          <p class="zoneLookupPar"><a class="zoneLookupClick" ng-click="$ctrl.zone_lookup_show()">Zone Lookup</a></p>
          </div>

          <div class="popup" id="zoneLookup">
            <div class="lookupBox">
              <div class="close">
                <i class="btn fa fa-window-close" aria-hidden="true" ng-click="$ctrl.zone_lookup_hide()"></i>
              </div>
              <iframe name="zonelookup" src="https://www.arborday.org/webtools/hortzones/ziplookup.cfm?RegID=4563" height="300" width="300" scrolling="No" frameborder="0" marginheight="0" marginwidth="0">[Your browser doesn't support IFrames. <a href="https://www.arborday.org/TreeInfo/ZoneLookup.cfm" target="_blank">Click here</a> to look up your arborday.org hardiness zone.]</iframe>
            </div>
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
              <li ng-show="regForm.password2.$dirty && regForm.password.$error.required">
                password confirmation is required
              </li>

              <li ng-show="regForm.password.$dirty && regForm.password2.$dirty && (user.password !== temp.password)">
                password must match confirm password
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
