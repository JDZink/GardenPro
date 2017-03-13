var app = angular.module('ngGarden');

var gardenTableController = function(gardenService){
  var vm = this;

  vm.removePlanting = function(planting){
    gardenService.deletePlanting(planting)
      .then(vm.loadData);
  };

  vm.updatePlanting = function(planting){
    gardenService.updatePlanting(planting)
      .then(vm.loadData);
  };
};

app.component('gardenTable', {
  template : `
  <table class='table table-striped' style='background-color:#aaa; margin-top:10px; border-radius:5px;'>
   
  </table>
  `,

  controller : gardenTableController,

  bindings : {
    garden: '=',
    showComplete: '<',
    loadData: '<'
  }
});