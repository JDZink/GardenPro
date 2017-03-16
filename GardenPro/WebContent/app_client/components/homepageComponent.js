var app = angular.module('ngGarden');

var homepageController = function(gardenService){
  var vm = this;
};

app.component('homepageComponent', {
  template : `
  TESTING TESTING TESTING
  `,
  controller : homepageController,

  bindings : {
    planting : "="
  }
});
