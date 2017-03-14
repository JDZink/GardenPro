var app = angular.module('ngGarden');

var plantsComponentController = function(gardenService){
  var vm = this;

  vm.deletePlant = function(planting) {
    gardenService.deletePlanting(planting)
    .then(vm.loadData);
  };
};

app.component('plantsComponent', {
  template : `
  <div class="plantings-box">
    <div class="plant" ng-repeat="plant in $ctrl.garden | plantFilter">
      <h3>{{plant.plant.commonName}}</h3>
      <h4>Quantity: {{plant.qty}}<h4>
      <h4>Stage: {{plant.stage}}<h4>
      <button class="delete" ng-click="$ctrl.deleteplant(plant)">Delete</button>
    </div>
  </div>
  `,

  controller : plantsComponentController,

  bindings : {
    garden: '=',
    loadData: '<'
  }
});
