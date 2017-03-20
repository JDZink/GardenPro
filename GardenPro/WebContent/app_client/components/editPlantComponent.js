var app = angular.module('ngGarden');

var newPlantController = function($location, $scope, plantService){
  var vm = this;

  vm.editPlant = function(plant) {

    if(plant.zones){
    plant.zones = plant.zones.toString();
    }
    if("fruit grain herb veg".indexOf(plant.type) > -1){
      plant.harvestable = true;
    }

    if(plant.weeksBeforeLastFrost !== null){
      plant.weeksBeforeLastFrost = -plant.weeksBeforeLastFrost;
    }
    if(plant.startGerm !== null){
      plant.startGerm = -plant.startGerm;
    }
    if(plant.endGerm !== null){
      plant.endGerm = -plant.endGerm;
    }
	  plantService.editPlant(plant)
    .then(function(res){
      $location.path('/addPlants');
    });
    regForm.reset();
  };

  $scope.zonesNums = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
  ];
};

app.component('editPlantComponent', {
  controller : editPlantController,
  template : `

  <div class="flex">
    <form name="regForm" id="regForm">
      <input type="text" name="commonName" ng-model="plant.commonName" placeholder="Common Name" value="{{plant.name}}" REQUIRED>
      <input type="text" name="botanicalName" ng-model="plant.botanicalName" placeholder="Botanical Name" REQUIRED>
      <input type="text" name="variety" ng-model="plant.variety" placeholder="Variety (ex: color, size)"> <br>
      <input type="textarea" name="sowingMethod" ng-model="plant.sowingMethod" placeholder="Sowing instructions"> <br>
       <label for="weeksBeforeLastFrostId">How many weeks before the frost date should it be planted indoors?</label><br>
      <input type="number" id="weeksBeforeLastFrostId" name="weeksBeforeLastFrost" ng-model="plant.weeksBeforeLastFrost" min="0" max="52" REQUIRED> <br>

      Type: <select name="type" ng-model="plant.type">
        <option value="fruit">Fruit</option>
        <option value="grain">Grain</option>
        <option value="grass">Grass</option>
        <option value="herb">Herb</option>
        <option value="orn">Ornamental</option>
        <option value="shrub">Shrub</option>
        <option value="tree">Tree</option>
        <option value="veg">Vegetable</option>
        <option value="vine">Vine</option>
      </select> <br>

      Life Cycle: <select name="life" ng-model="plant.life" >
        <option value="a">Annual</option>
        <option value="p">Perennial</option>
        <option value="b">Biennial</option>
      </select> <br>

      Germination time in weeks (ex: 2 - 4)<br>
      <input type="number" name="startGerm" ng-model="plant.startGerm" placeholder="Start germ" min="0" max="52"> --
      <input type="number" name="endGerm" ng-model="plant.endGerm" placeholder="End germ" min="0" max="52"> <br>
      <input type="number" name="depth" ng-model="plant.depth" placeholder="Sowing depth (inches)" min="1"> <br>
      <input type="number" name="space" ng-model="plant.space" placeholder="Plant spacing (inches)" min="1"> <br>
      If fruit-bearing: <input type="number" name="timeToHarvest" ng-model="plant.timeToHarvest" placeholder="Weeks until harvest (once sprouted)"> <br>

      Required Sunlight: <select name="transplant" ng-model="plant.transplant" REQUIRED>
        <option value="fsun">Full Sun</option>
        <option value="psun">Partial Sun</option>
        <option value="fsha">Full Shade</option>
        <option value="psha">Partial Shade</option>
      </select> <br>

	  Able to grow in zones (Ctrl + click):
      <div id="data">
	      <select class="zoneSelect" name="zones" ng-model="plant.zones" multiple>
	      	<option class="zoneOptions" ng-repeat="zone in zonesNums" value={{zone}}>{{zone}}</option>
	      </select> <br>
      </div>

      <input type="textarea" rows="4" cols="30" name="comment" ng-model="plant.comment" placeholder="Comments..."> <br>

      <input type="submit" class="btn btn-default action-button logout-button" value="Add Plant" ng-click="$ctrl.createPlant(plant)">
    </form>
  </div>
  `
});
