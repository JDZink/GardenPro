var app = angular.module('ngGarden');

var navController = function($location, authenticationService){
  var vm = this;
  vm.logout = function(){
    authenticationService.logout();
    $location.path('/');
  };
};

app.component('navComponent', {
  template : `
  <div>
      <nav class="navbar navbar-default navigation-clean-button">
          <div class="container nav-container">
              <div class="navbar-header"><a class="navbar-brand navbar-link" href="#/">DigIt</a>
                  <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
              </div>
              <div class="collapse navbar-collapse" id="navcol-1">
                  <ul class="nav navbar-nav">
                      <li class="active" role="presentation"><a href="#/garden">Garden</a></li>
                      <li role="presentation"><a href="#/addPlants">Add Plants</a></li>
                  </ul>
                  <p class="navbar-text navbar-right actions"> <a class="btn btn-default action-button" role="button" ng-click='$ctrl.logout()'>Log Out</a></p>
              </div>
          </div>
      </nav>
  </div>
  `,
  controller : navController
});
