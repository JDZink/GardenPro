var app = angular.module('ngGarden');

/*****************APP COMPONENT*******************/
var appController = function(authenticationService){
  var vm = this;
  vm.userLoggedIn = function() {
    return authenticationService.isLoggedIn();
  };
};

app.component('appComponent', {
  template : `
  <ng-view></ng-view>
  `,
  controller : appController
});
/*************************************************/
