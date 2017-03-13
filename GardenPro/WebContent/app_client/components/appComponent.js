var app = angular.module('ngGarden');

/*****************APP COMPONENT*******************/
var appController = function(){
  var vm = this;
  vm.message = "Hello Angular";
};

app.component('appComponent', {
  template : `
  <nav-component></nav-component>
  <ng-view></ng-view>
  `,
  controller : appController
});
/*************************************************/
