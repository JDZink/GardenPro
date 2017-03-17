var app = angular.module('ngGarden');

var registrationController = function($location, authenticationService){
  var vm = this;

  vm.createPlant = function(plant) {
    plantService.createPlant(plant)
    .then(function(res){
      $location.path('/addPlants');
    });
    regForm.reset();
  };
};

app.component('registrationComponent', {
  controller : registrationController,
  template : `
  <style>
  </style>

  <div style="margin-left:5%;">
    <form name="regForm">
      <input type="text" name="commonName" ng-model="plant.commonName" placeholder="Common Name" REQUIRED> <br>
      <input type="text" name="botanicalName" ng-model="plant.botanicalName" placeholder="Botanical Name" REQUIRED> <br>
      <input type="text" name="variety" ng-model="plant.variety" placeholder="Variety (ex: color, size)" REQUIRED> <br>
      <input type="text" name="sowingMethod" ng-model="plant.sowingMethod" placeholder="Sowing instructions" REQUIRED> <br>
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
      If fruit-bearing: <input type="number" name="endGerm" ng-model="plant.endGerm" placeholder="Weeks until harvest (once sprouted)" REQUIRED> <br>

      Required Sunlight: <select name="transplant" ng-model="plant.transplant" REQUIRED>
        <option value="fsun">Full Sun</option>
        <option value="psun">Partial Sun</option>
        <option value="fsha">Full Shade</option>
        <option value="psha">Partial Shade</option>
      </select> <br>

      Able to grow in zones: <br>
      <input type="checkbox" ng-model="plant.zones" name="zones" value="1">1
      <input type="checkbox" ng-model="plant.zones" name="zones" value="2">2
      <input type="checkbox" ng-model="plant.zones" name="zones" value="3">3
      <input type="checkbox" ng-model="plant.zones" name="zones" value="4">4
      <input type="checkbox" ng-model="plant.zones" name="zones" value="5">5
      <input type="checkbox" ng-model="plant.zones" name="zones" value="6">6
      <input type="checkbox" ng-model="plant.zones" name="zones" value="7">7
      <input type="checkbox" ng-model="plant.zones" name="zones" value="8">8
      <input type="checkbox" ng-model="plant.zones" name="zones" value="9">9
      <input type="checkbox" ng-model="plant.zones" name="zones" value="10">10
      <input type="checkbox" ng-model="plant.zones" name="zones" value="11">11 <br>

      <input type="textarea" rows="4" cols="30" name="comment" ng-model="plant.comment" placeholder="Comments..." REQUIRED> <br>
      <input type="submit" value="Add Plant" ng-click="$ctrl.createPlant(plant)">
    </form>
  </div>
  `
});
