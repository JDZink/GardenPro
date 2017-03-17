var app = angular.module('ngGarden');

var newPlantController = function($location, $scope, plantService){
  var vm = this;

  vm.createPlant = function(plant) {
	  plantService.createPlant(plant)
    .then(function(res){
      $location.path('/addPlants');
    });
    regForm.reset();
  };

  $scope.zones = [
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

app.component('newPlantComponent', {
  controller : newPlantController,
  template : `
 
  <div class="flex">
    <form name="regForm" id="regForm">
      <input type="text" name="commonName" ng-model="plant.commonName" placeholder="Common Name" REQUIRED> <br>
      <input type="text" name="botanicalName" ng-model="plant.botanicalName" placeholder="Botanical Name" REQUIRED> <br>
      <input type="text" name="variety" ng-model="plant.variety" placeholder="Variety (ex: color, size)" REQUIRED> <br>
      <input type="textarea" name="sowingMethod" ng-model="plant.sowingMethod" placeholder="Sowing instructions" REQUIRED> <br>
       <label for="weeksBeforeLastFrostId">How many weeks before the frost date should it be planted indoors?</label><br>
      <input type="number" id="weeksBeforeLastFrostId" name="weeksBeforeLastFrost" ng-model="plant.weeksBeforeLastFrost" REQUIRED> <br>

      Type: <select name="type" ng-model="plant.type" REQUIRED>
        <option value="fruit">Fruit</option>
        <option value="grain">Grain</option>
        <option value="grass">Grass</option>
        <option value="herb">Herb</option>
        <option value="orn">Ornamental</option>
        <option value="shrub">Shrub</option>
        <option value="tree">Tree</option>
        <option value="vege">Vegetable</option>
        <option value="vine">Vine</option>
      </select> <br>

      Life Cycle: <select name="life" ng-model="plant.life" REQUIRED>
        <option value="a">Annual</option>
        <option value="p">Perennial</option>
        <option value="b">Biennial</option>
      </select> <br>

      <input type="number" name="endGerm" ng-model="plant.endGerm" placeholder="Germination rate (weeks)" REQUIRED> <br>
      <input type="number" name="depth" ng-model="plant.depth" placeholder="Sowing depth (inches)" REQUIRED> <br>
      <input type="number" name="space" ng-model="plant.space" placeholder="Plant spacing (inches)" REQUIRED> <br>
      If fruit-bearing: <input type="number" name="timeToHarvest" ng-model="plant.timeToHarvest" placeholder="Weeks until harvest (once sprouted)" REQUIRED> <br>

      Required Sunlight: <select name="transplant" ng-model="plant.transplant" REQUIRED>
        <option value="fsun">Full Sun</option>
        <option value="psun">Partial Sun</option>
        <option value="fsha">Full Shade</option>
        <option value="psha">Partial Shade</option>
      </select> <br>

	  Able to grow in zones (Ctrl + click):
      <div id="data">
	      <select class="zoneSelect" ng-model="zoneSel"multiple>
	      	<option class="zoneOptions" ng-repeat="zone in zones" value={{zone}}>{{zone}}</option>
	      </select> <br>
      </div>

      <input type="textarea" rows="4" cols="30" name="comment" ng-model="plant.comment" placeholder="Comments..." REQUIRED> <br>

      <input type="submit" value="Add Plant" ng-click="$ctrl.createPlant(regForm)">
    </form>
  </div>
  `
});
