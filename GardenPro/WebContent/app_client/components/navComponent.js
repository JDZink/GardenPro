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
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand">ngGarden</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#/">Home</a></li>
      <li><a href="#/garden">Garden</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/contact">Contact</a></li>
      <li><button class="logout" type="button" ng-click='$ctrl.logout()'>LogOut</button></li>
    </ul>
  </div>
</nav>
  `,
  controller : navController
});
