var app = angular.module('ngGarden');

var plantsComponentController = function(gardenService){
  var vm = this;

  vm.deletePlant = function(planting) {
    gardenService.deletePlanting(planting)
    .then(vm.loadData);
  };

  vm.noPlants = function(garden) {
    if(garden.length === 0) {
      document.getElementById("noPlants").style.display = "block";
    } else {
      document.getElementById("noPlants").style.display = "none";
    }
  };
};

app.component('plantsComponent', {
  template : `
  {{$ctrl.noPlants($ctrl.garden | plantFilter)}}
  <div class="plantings-box">
    <div class="plant stage{{plant.stage}}" ng-repeat="plant in $ctrl.garden | plantFilter | orderBy:'commonName'">
      <h3>{{plant.plant.commonName}}</h3>
      <h4>Quantity: {{plant.qty}}<h4>
      <h4>Stage: {{plant.stage}}<h4>      
      <button class="delete btn btn-danger" ng-click="$ctrl.deletePlant(plant)">Delete</button>
    </div>
    <div id="noPlants">
      <h2>You don't have any Plants yet.</h2>
      <h3>To add Plants, either transplant from your "Plants in Seed Stages" section,
      or click the "Add Plants" button and select "Young Plant" or "Mature Plant" as
      the "Stage of Plant" when adding.</h3>
    </div>
  </div>
  `,

  controller : plantsComponentController,

  bindings : {
    garden: '=',
    loadData: '<'
  }
});
