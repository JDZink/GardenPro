var app ; angular.module('ngGarden');

var plantsComponentController = function(gardenService, $rootScope){
  var vm = this;

  vm.deletePlant = function(planting) {
    gardenService.deletePlanting(planting)
    .then(function(){
      $rootScope.$broadcast('reminderUpdateEvent');
    })
    .then(vm.loadData);
  };

  vm.noPlants = function(garden) {
    if(garden.length === 0) {
      document.getElementById("noPlants").style.display = "block";
    } else {
      document.getElementById("noPlants").style.display = "none";
    }
  };

  vm.plant_detail_show = function(plant) {
    document.getElementById("detail"+plant.id).style.display = "block";
  };
  vm.plant_detail_hide = function(plant) {
    document.getElementById("detail"+plant.id).style.display = "none";
  };
};

app.component('plantsComponent', {
  template : `
  {{$ctrl.noPlants($ctrl.garden | plantFilter)}}
  <div class="plantings-box" id="plant-box">
    <div class="plant stage{{plant.stage}}" ng-repeat="plant in $ctrl.garden | plantFilter | orderBy:'commonName'">
      <h3><a class="plantDetailClick" ng-click="$ctrl.plant_detail_show(plant)">{{plant.plant.commonName}}</a></h3>
      <h4>Quantity: {{plant.qty}}</h4>
      <h4>Stage: {{$ctrl.showDetail(plant.stage)}}</h4>
      <button class="delete btn btn-danger" ng-click="$ctrl.deletePlant(plant)">Delete</button>

      <div class="popup" id="detail{{plant.id}}">
        <div class="popupAddPlant detailPopup">
        <form>
          <h3 class="popup-label">{{plant.plant.commonName}} Detail</h3>
          <h4>Botanical Name: {{plant.plant.botanicalName}}</h4>
          <h4>Variety: {{plant.plant.variety}}</h4>
          <h4>Sowing Instructions: {{plant.plant.sowingMethod}}</h4>
          <h4>Type: {{$ctrl.showDetail(plant.plant.type)}}</h4>
          <h4>Life Cycle: {{$ctrl.showDetail(plant.plant.life)}}</h4>
          <h4>Germination: Weeks {{plant.plant.startGerm}}-{{plant.plant.endGerm}}</h4>
          <h4>Sowing Depth: {{plant.plant.depth}}in.</h4>
          <h4>Plant Spacing: {{plant.plant.space}}in.</h4>
          <h4>Time to Harvest: {{plant.plant.timeToHarvest}}</h4>
          <h4>Required Sun: {{$ctrl.showDetail(plant.plant.transplant)}}</h4>
          <h4>Zones: {{plant.plant.zones}}</h4>
          <h4>Comments: {{plant.plant.comment}}</h4>
          <p>
            <button class="add btn btn-primary" ng-click="">Edit</button>
            <button class="add btn btn-danger" ng-click="$ctrl.plant_detail_hide(plant)">Cancel</button>
          </p>
        </form>
        </div>
      </div>

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
    loadData: '<',
    showDetail: '<'
  }
});
