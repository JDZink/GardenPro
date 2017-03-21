var app = angular.module('ngGarden');


var addplantsController = function(gardenService, $location, $rootScope, $filter) {
  var vm = this;

  vm.plants = [];

  vm.loadPlants = function(){
    gardenService.getPlants()
    .then(function(res){
      vm.plants = res.data;
    });
  };
  vm.loadPlants();

  vm.addPlanting = function(plant){
    var stage = $('#stage'+plant.id).val();
    var qty = $('#qty'+plant.id).val();
    gardenService.createPlanting(plant,qty,stage)
      .then(function(){
        vm.addplant_form_hide(plant);
        $rootScope.$broadcast('reminderUpdateEvent');
      })
      .then(vm.loadData);
  };

  vm.addplant_form_show = function(plant) {
    document.getElementById("plant"+plant.id).style.display = "block";
  };
  vm.addplant_form_hide= function(plant) {
    document.getElementById("plant"+plant.id).style.display = "none";
  };

  vm.searchTerm = "";
  vm.searchTransplant = "";
  vm.searchZone = "";
  vm.searchHarvestable = "";

  vm.search= function(){
	  vm.searchTerm = $('#searchString').val();
  };

  vm.trans= function(){
	  vm.searchTransplant = $('#searchTransplant').val();
  };
  vm.zone= function(){
	  vm.searchZone = $('#searchZone').val();
  };
  vm.harv= function(){
	  vm.searchHarvestable = $('#searchHarvestable').val();
  };

  vm.createPlant = function(){
    console.log("In create plant func");
    $location.path('/newPlant');

  };

  vm.showDetail = function(key) {
    switch (key) {
      case 0: return "Seed";
      case 1: return "Started";
      case 2: return "Germinated";
      case 3: return "Sprout";
      case 4: return "Young Plant";
      case 5: return "Mature Plant";
      case "p": return "Perennial";
      case "a": return "Annual";
      case "b": return "Biennial";
      case "orn": return "Ornamental";
      case "veg": return "Vegtable";
      case "herb": return "Herb";
      case "vine": return "Vine";
      case "tree": return "Tree";
      case "shrub": return "Shrub";
      case "grass": return "Grass";
      case "fruit": return "Fruit";
      case "grain": return "Grain";
      case "fsun": return "Full Sun";
      case "psun": return "Partial Sun";
      case "psha": return "Partial Shade";
      case "fsha": return "Full Shade";
      case "dsha": return "Deep Shade";
    }
  };
  vm.plant_detail_show = function(plant) {
    document.getElementById("detail"+plant.id).style.display = "block";
  };
  vm.plant_detail_hide = function(plant) {
    document.getElementById("detail"+plant.id).style.display = "none";
  };
};

app.component('addplantsComponent',{
  template : `
    <div class="content-div">
      <h1>Plants</h1>
      <form>
      <button class="btn btn-danger" ng-click="$ctrl.createPlant()">Create new plant</button>
      </form>
      <br>
	  <form>
	  	Search<input id="searchString" type="text" placeholder="Search..." ng-change="$ctrl.search(value1)" ng-model="value1" ng-model-options="{debounce: 500}" name="searchStr">
	  	Sun<select id="searchTransplant"  placeholder="Plant Locaton" ng-change="$ctrl.trans(value2)" ng-model="value2" ng-model-options="{debounce: 500}" name="searchTran">
	  		<option value = ""></option>
	  		<option value="fsun">Full Sun</option>
	  		<option value="psun">Partial Sun</option>
	  		<option value="fsha">Full Shade</option>
	  		<option value="psha">Partial Shade</option>
	  		<option></option>

	  	</select>
	  	Zone<input id="searchZone" type="number" min="0" max="11" step="1" ng-change="$ctrl.zone(value3)" ng-model="value3" ng-model-options="{debounce: 500}" name="searchZon">
	  	Food Producing<select id="searchHarvestable" placeholder="Search..." ng-change="$ctrl.harv(value4)" ng-model="value4" name="searchHarv">
	  		<option value = ""></option>
	  		<option value="Yes">Yes</option>
	  		<option value="No">No</option>
	  	</select>
	  </form>
        <div class="plants-box" id="get-plants-box">
          <div class="plant" ng-repeat="plant in $ctrl.plants | searchFilter:$ctrl.searchTerm:$ctrl.searchTransplant:$ctrl.searchZone:$ctrl.searchHarvestable | orderBy:'commonName'">
            <h4><a class="plantDetailClick" ng-click="$ctrl.plant_detail_show(plant)">{{plant.commonName}}</a></h4>
            <h5>Variety: {{plant.variety}}</h5>
            <button class="add btn btn-primary" ng-click="$ctrl.addplant_form_show(plant)">Add Plant</button>

            <div class="popup" id="plant{{plant.id}}">
              <div class="popupAddPlant">
              <form>
                <h3 class="popup-label">Add {{plant.commonName}} <br> to Your Garden</h3>
                <p>
                  <h4 class="popup-label">Stage of Plant: </h4>
                  <h4><select id="stage{{plant.id}}" name="stage">
                    <option value=0 selected>Seed</option>
                    <option value=4>Young Plant</option>
                    <option value=5>Mature Plant</option>
                  </select></h4>
                </p>
                <p>
                  <h4 class="popup-label">Quantity: <span class="black-text">
                  <input class="qtyInput" type="number" min="0" step="1" required value="1" id="qty{{plant.id}}" name="qty"></span></h4>
                </p>
                <p>
                  <button class="add btn btn-primary" ng-click="$ctrl.addPlanting(plant)">Add</button>
                  <button class="add btn btn-danger" ng-click="$ctrl.addplant_form_hide(plant)">Cancel</button>
                </p>
              </form>
              </div>
            </div>

            <div class="popup" id="detail{{plant.id}}">
              <div class="popupAddPlant detailPopup">
              <form>
                <h3 class="popup-label">{{plant.commonName}} Detail</h3>
                <h4>Botanical Name: {{plant.botanicalName}}</h4>
                <h4>Variety: {{plant.variety}}</h4>
                <h4>Sowing Instructions: {{plant.sowingMethod}}</h4>
                <h4>Type: {{$ctrl.showDetail(plant.type)}}</h4>
                <h4>Life Cycle: {{$ctrl.showDetail(plant.life)}}</h4>
                <h4>Germination: Weeks {{plant.startGerm}}-{{plant.plant.endGerm}}</h4>
                <h4>Sowing Depth: {{plant.depth}}in.</h4>
                <h4>Plant Spacing: {{plant.space}}in.</h4>
                <h4>Time to Harvest: {{plant.timeToHarvest}}</h4>
                <h4>Required Sun: {{$ctrl.showDetail(plant.transplant)}}</h4>
                <h4>Zones: {{plant.zones}}</h4>
                <h4>Comments: {{plant.comment}}</h4>
                <p>
                  <button class="add btn btn-danger" ng-click="$ctrl.plant_detail_hide(plant)">Cancel</button>
                </p>
              </form>
              </div>
            </div>

          </div>

        </div>

    </div>
  `,
  controller : addplantsController,
  bindings : {
    loadReminders: '&'
  }
});
