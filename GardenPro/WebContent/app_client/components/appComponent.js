var app = angular.module('ngGarden');

/*****************APP COMPONENT*******************/
var appController = function(){};

app.component('appComponent', {
  template : `
  <ng-view></ng-view>
  `,
  controller : appController
});
/*************************************************/
