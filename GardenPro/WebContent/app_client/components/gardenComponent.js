var app = angular.module('ngGarden');


var gardenController = function(gardenService) {
  var vm = this;

  vm.garden = [];

  vm.loadData = function(){
    gardenService.getGarden()
      .then(function(res){
        vm.garden = res.data;
      });
  };

  vm.loadData();

  vm.addPlanting = function(planting){
    gardenService.createPlanting(planting)
      .then(vm.loadData);
  };
};

app.component('gardenComponent',{
  template : `
   
  `,
  controller : gardenController
});