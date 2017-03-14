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
};

app.component('seedsComponent', {
  template : `
  <div class="plantings-box">
    <div class="seed" ng-repeat="seed in $ctrl.garden | seedFilter:$ctrl.showSeeds">
      <h3>{{seed.plant.commonName}}</h3>
      <h4>Quantity: {{seed.qty}}<h4>
      <h4>Stage: {{seed.stage}}<h4>
      <button class="plant-button {seed.stage}" ng-click="$ctrl.plantSeed(seed)">Plant</button>
      <button class="transplant-button {seed.stage}" ng-click="$ctrl.transplantSeed(seed)">Transplant</button>
      <button class="delete" ng-click="$ctrl.deleteSeed(seed)">Delete</button>
      <script>
        if ($('.plant-button').hasClass('0')){
          $('.plant-button').attr('display','inherit');
        } else {
          $('.plant-button').attr('display','none');
        }
        if ($('.transplant-button').hasClass('0')){
          $('.transplant-button').attr('display','none');
        } else {
          $('.transplant-button').attr('display','inherit');
        }
      </script>
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
