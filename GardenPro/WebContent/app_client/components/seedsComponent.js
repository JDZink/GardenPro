var app = angular.module('ngGarden');

var seedsComponentController = function(gardenService){
  var vm = this;

  vm.plantSeed = function(planting) {
    var qty = parseInt($('#seedqty'+planting.id).val());
    if(planting.qty === qty) {
      planting.stage = 1;
      gardenService.updatePlanting(planting)
      .then(vm.plant_form_hide(planting))
      .then(vm.loadData)
      .then(vm.loadReminders);
    } else {
      planting.qty = (planting.qty - qty);
      gardenService.updatePlanting(planting)
      .then(vm.loadData)
      .then(vm.loadReminders);
      gardenService.createPlanting(planting.plant,qty,1)
      .then(vm.plant_form_hide(planting))
      .then(vm.loadData)
      .then(vm.loadReminders);
    }
  };

  vm.transplantSeed = function(planting) {
    var qty = parseInt($('#transplantqty'+planting.id).val());
    if(planting.qty === qty) {
      planting.stage = 4;
      gardenService.updatePlanting(planting)
      .then(vm.transplant_form_hide(planting))
      .then(vm.loadData)
      .then(vm.loadReminders);
    } else {
      planting.qty = (planting.qty - qty);
      gardenService.updatePlanting(planting)
      .then(vm.loadData)
      .then(vm.loadReminders);
      gardenService.createPlanting(planting.plant,qty,4)
      .then(vm.transplant_form_hide(planting))
      .then(vm.loadData)
      .then(vm.loadReminders);
    }
  };

  vm.deleteSeed = function(planting) {
    gardenService.deletePlanting(planting)
    .then(vm.loadData)
    .then(vm.loadReminders);
  };

  vm.isSeed = function(seed) {
    if (seed.stage === 0) {
      return true;
    } else {
      return false;
    }
  };

  vm.plant_form_show = function(seed) {
    document.getElementById("seed"+seed.id).style.display = "block";
  };
  vm.plant_form_hide = function(seed) {
    document.getElementById("seed"+seed.id).style.display = "none";
  };

  vm.transplant_form_show = function(seed) {
    document.getElementById("transplant"+seed.id).style.display = "block";
  };
  vm.transplant_form_hide = function(seed) {
    document.getElementById("transplant"+seed.id).style.display = "none";
  };

  vm.noSeeds = function(garden){
    if(garden.length === 0) {
      document.getElementById("noSeeds").style.display = "block";
    } else {
      document.getElementById("noSeeds").style.display = "none";
    }
  };
};

app.component('seedsComponent', {
  template : `
  {{$ctrl.noSeeds($ctrl.garden | seedFilter:true)}}
  <div class="plantings-box">
    <div class="seed" ng-repeat="seed in $ctrl.garden | seedFilter:$ctrl.showSeeds | orderBy:'commonName'">
      <h3>{{seed.plant.commonName}}</h3>
      <h4>Quantity: {{seed.qty}}<h4>
      <h4>Stage: {{seed.stage}}<h4>
      <button class="plant-button btn btn-primary" ng-click="$ctrl.plant_form_show(seed)" ng-show="$ctrl.isSeed(seed)">Plant</button>
      <button class="transplant-button btn btn-primary" ng-click="$ctrl.transplant_form_show(seed)" ng-hide="$ctrl.isSeed(seed)">Transplant</button>
      <button class="delete btn btn-danger" ng-click="$ctrl.deleteSeed(seed)">Delete</button>

      <div class="popup" id="seed{{seed.id}}">
        <div class="popupAddPlant">
        <form>
          <h3 class="popup-label">Planting {{seed.plant.commonName}} Seeds</h3>
          <p>
            <h4 class="popup-label">How Many?: <span class="black-text">
            <input class="qtyInput" type="number" value="{{seed.qty}}" id="seedqty{{seed.id}}" name="qty"></span></h4>
          </p>
          <p>
            <button class="add btn btn-primary" ng-click="$ctrl.plantSeed(seed)">Plant</button>
            <button class="add btn btn-primary" ng-click="$ctrl.plant_form_hide(seed)">Cancel</button>
          </p>
        </form>
        </div>
      </div>

      <div class="popup" id="transplant{{seed.id}}">
        <div class="popupAddPlant">
        <form>
          <h3 class="popup-label">Transplanting <br> {{seed.plant.commonName}} Plants</h3>
          <p>
            <h4 class="popup-label">How Many?: <span class="black-text">
            <input class="qtyInput" type="number" value="{{seed.qty}}" id="transplantqty{{seed.id}}" name="qty"></span></h4>
          </p>
          <p>
            <button class="add btn btn-primary" ng-click="$ctrl.transplantSeed(seed)">Plant</button>
            <button class="add btn btn-primary" ng-click="$ctrl.transplant_form_hide(seed)">Cancel</button>
          </p>
        </form>
        </div>
      </div>

    </div>

    <div id="noSeeds">
      <h2>You don't have any Seeds yet.</h2>
      <h3>To add Seeds, either click the "Add New Seeds" button, or click the
      "Add Plants" button and select the Seeds you would like to add.</h3>
    </div>

  </div>
  `,

  controller : seedsComponentController,

  bindings : {
    garden: '=',
    showSeeds: '<',
    loadData: '<',
    reminders: '=',
    loadReminders: '<'
  }
});
