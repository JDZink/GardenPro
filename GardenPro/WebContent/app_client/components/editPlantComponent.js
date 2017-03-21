var app = angular.module('ngGarden');

var newPlantController = function($location, $scope, plantService){
  var vm = this;

  vm.createPlant = function(plant) {

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
	  plantService.createPlant(plant)
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
  
  typeOptions = [{
	   name: 'fruit',
	   value: 'fruit'
	}, {
	   name: 'grain',
	   value: 'grain'
	}, {
	   name: 'grass',
	   value: 'grass'	
	}, {
	   name: 'herb',
	   value: 'herb'
	}, {
	   name: 'orn',
	   value: 'orn'
	}, {
	   name: 'shrub',
	   value: 'shrub'
	}, {
	   name: 'tree',
	   value: 'tree'
	}, {
	   name: 'veg',
	   value: 'veg'
	}, {
	   name: 'vine',
	   value: 'vine'
	}];
};

app.component('newPlantComponent', {
  controller : newPlantController,
  template : `

  <div class="flex login-clean form-group newPlantIllustration">
  <div class="illustration"><strong>Create New Plant</strong> <i class="fa fa-leaf" aria-hidden="true"></i></div>
    <form name="regForm" id="regForm">
      Common Name:
      <input type="text" name="commonName" ng-model="plant.commonName" value="{{plant.commonName}}" REQUIRED>
      Botanical Name:
      <input type="text" name="botanicalName" ng-model="plant.botanicalName" value="{{plant.botanicalName}}" REQUIRED>
      Variety:
      <input type="text" name="variety" ng-model="plant.variety" value="{{plant.variety}}" > <br>
      Sowing Instructions:
      <input type="textarea" name="sowingMethod" ng-model="plant.sowingMethod" value="{{plant.sowingMethod}}"> <br>
      How many weeks before the frost date must it be planted indoors?
      <input type="number" id="weeksBeforeLastFrostId" name="weeksBeforeLastFrost" ng-model="plant.weeksBeforeLastFrost" value="{{plant.weeksBeforeLastFrost}}" min="0" max="52" REQUIRED> <br>

	  <select ng-model="model.typeOptions" ng-options="to.value for to in typeOption" ng-init="model.typeOption=typeOptions[0]"></select>

      Type:
      <select name="type" ng-model="plant.type">
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

      Life Cycle:
      <select name="life" ng-model="plant.life" >
        <option value="a">Annual</option>
        <option value="p">Perennial</option>
        <option value="b">Biennial</option>
      </select> <br>

      Germination time in weeks (ex: 2 - 4):
      <input type="number" name="startGerm" ng-class="germTime" ng-model="plant.startGerm"  value="{{plant.startGerm}}" min="0" max="52"> --
      <input type="number" name="endGerm" ng-class="germTime" ng-model="plant.endGerm"  value="{{plant.endGerm}}" min="0" max="52"> <br>
      Sowing Depth (in inches)
      <input type="number" name="depth" ng-model="plant.depth" value="{{plant.depth}}" min="1"> <br>
      Plant spacing (in inches)
      <input type="number" name="space" ng-model="plant.space" value="{{plant.space}}" min="1"> <br>
      If fruit-bearing, how many weeks until harvest (from sprout date):
      <input type="number" name="timeToHarvest" ng-model="plant.timeToHarvest" value="{{plant.timeToHarvest}}"<br>

      Required Sunlight:
      <select name="transplant" ng-model="plant.transplant" REQUIRED>
        <option value="fsun">Full Sun</option>
        <option value="psun">Partial Sun</option>
        <option value="fsha">Full Shade</option>
        <option value="psha">Partial Shade</option>
      </select> <br>

	  Able to grow in zones (Ctrl + click):
      <div id="data">
	      <select class="zoneSelect" name="zones" ng-model="plant.zones" multiple>
	      	<option class="zoneOptions" ng-repeat="zone in zonesNums" value={{zone}}>{{zone}}</option>
	      </select> <br><br>
      </div>

      <input type="textarea" rows="4" cols="30" name="comment" ng-model="plant.comment" value="{{plant.comment}}"> <br>

      <input type="submit" class="btn btn-default action-button logout-button" value="Add Plant" ng-click="$ctrl.createPlant(plant)">
    </form>
  </div>
  `
});
