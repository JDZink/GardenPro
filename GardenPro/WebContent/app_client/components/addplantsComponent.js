var app = angular.module('ngGarden');


var addplantsController = function(gardenService) {
  var vm = this;

  vm.plants = [];

  vm.loadPlants = function(){
    gardenService.getPlants()
    .then(function(res){
      vm.plants = res.data;
    });
  };
  vm.loadPlants();

  vm.addPlanting = function(plant,qty,stage){
    gardenService.createPlanting(plant,qty,stage)
      .then(vm.loadData);
  };
};

app.component('addplantsComponent',{
  template : `
    <div class="content-div">
      <h1>Plants</h1>

        <div class="plants-box">
          <div class="plant" ng-repeat="plant in $ctrl.plants">
            <h4>{{plant.commonName}}</h4>
            <h5>Variety: {{plant.variety}}<h5>
            <button class="add btn btn-primary" ng-click="$ctrl.addPlanting(plant,1,0)">Add Plant</button>
          </div>
        </div>

    </div>
  `,
  controller : addplantsController
});
