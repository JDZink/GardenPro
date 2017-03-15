var app = angular.module('ngGarden');

var navController = function($location, authenticationService){
  var vm = this;
  vm.logout = function(){
    authenticationService.logout();
    $location.path('/login');
  };
  vm.login = function(){
    $location.path('/login');
  };

  vm.signup = function() {
    $location.path('/register');
  };

  vm.isLoggedIn = function() {
    return authenticationService.isLoggedIn();
  };
};

app.component('navComponent', {
  template : `
  <div class="mynav">
      <nav class="navbar navbar-default navigation-clean-button">
          <div class="container nav-container">
              <div class="navbar-header"><a class="navbar-brand navbar-link" href="#/">DigIt</a>
                  <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
              </div>
              <div class="collapse navbar-collapse" id="navcol-1">
                  <ul class="nav navbar-nav">
                      <li role="presentation"><a href="#/garden">Garden</a></li>
                      <li role="presentation"><a href="#/addPlants">Add Plants</a></li>
                  </ul>
                  <p class="navbar-text navbar-right actions" ng-hide="$ctrl.isLoggedIn()"> <a class="btn btn-default action-button signup-button" role="button" ng-click="$ctrl.signup()">Sign Up</a></p>
                  <p class="navbar-text navbar-right actions" ng-hide="$ctrl.isLoggedIn()"> <a class="btn btn-default action-button login-button" role="button" ng-click="$ctrl.login()">Log In</a></p>
                  <p class="navbar-text navbar-right actions" ng-show="$ctrl.isLoggedIn()"> <a class="btn btn-default action-button logout-button" role="button" ng-click="$ctrl.logout()">Log Out</a></p>
              </div>
          </div>
      </nav>
  </div>
  `,
  controller : navController
});
