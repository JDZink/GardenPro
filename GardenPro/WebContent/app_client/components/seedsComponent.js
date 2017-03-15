var app = angular.module('ngGarden');

var seedsComponentController = function(gardenService){
  var vm = this;

  vm.plantSeed = function(planting) {
    planting.stage = 1;
    gardenService.updatePlanting(planting)
    .then(vm.loadData);
  };

  vm.transplantSeed = function(planting) {
    planting.stage = 4;
    gardenService.updatePlanting(planting)
    .then(vm.loadData);
  };

  vm.deleteSeed = function(planting) {
    gardenService.deletePlanting(planting)
    .then(vm.loadData);
  };

  vm.isSeed = function(seed) {
    if (seed.stage === 0) {
      return true;
    } else {
      return false;
    }
  };
};

app.component('seedsComponent', {
  template : `
  <div class="plantings-box">
    <div class="seed" ng-repeat="seed in $ctrl.garden | seedFilter:$ctrl.showSeeds | orderBy:'commonName'">
      <h3>{{seed.plant.commonName}}</h3>
      <h4>Quantity: {{seed.qty}}<h4>
      <h4>Stage: {{seed.stage}}<h4>
      <button class="plant-button btn btn-primary" ng-click="$ctrl.plantSeed(seed)" ng-show="$ctrl.isSeed(seed)">Plant</button>
      <button class="transplant-button btn btn-primary" ng-click="$ctrl.transplantSeed(seed)" ng-hide="$ctrl.isSeed(seed)">Transplant</button>
      <button class="delete btn btn-danger" ng-click="$ctrl.deleteSeed(seed)">Delete</button>
    </div>
  </div>
  `,

  controller : seedsComponentController,

  bindings : {
    garden: '=',
    showSeeds: '<',
    loadData: '<'
  }
});
