var app = angular.module('ngGarden');


var addplantsController = function(gardenService) {
  var vm = this;

  vm.garden = [];

  vm.plants = [];

  vm.loadPlants = function(){
    gardenService.getPlants()
    .then(function(res){
      vm.plants = res.data;
    });
  };
  vm.loadPlants();

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

app.component('addplantsComponent',{
  template : `
    <div class="content-div">
      <h1>Plants</h1>

        <div class="plants-box">
          <div class="plant" ng-repeat="plant in $ctrl.plants | plantsFilter">
            <h3>{{plant.commonName}}</h3>
            <h4>Quantity: {{plant.variety}}<h4>
            <button class="add btn btn-primary" ng-click="$ctrl.deleteplant(plant)">Delete</button>
          </div>
        </div>

    </div>
  `,
  controller : addplantsController
});
