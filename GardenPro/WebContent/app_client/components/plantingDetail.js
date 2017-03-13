var app = angular.module('ngGarden');

var plantingController = function(gardenService){
  var vm = this;
  vm.update = function(planting) {
    gardenService.updatePlanting(planting);
  };
};

app.component('plantingDetail', {
  template : `
  
  `,
  controller : plantingController,

  bindings : {
    planting : "="
  }
});
