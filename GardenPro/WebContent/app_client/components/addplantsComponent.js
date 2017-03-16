var app = angular.module('ngGarden');


var addplantsController = function(gardenService, $scope, $filter) {
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
      .then(vm.addplant_form_hide(plant))
      .then(vm.loadData)
      .then(vm.loadReminders);
  };

  vm.addplant_form_show = function(plant) {
    document.getElementById("plant"+plant.id).style.display = "block";
  };
  vm.addplant_form_hide= function(plant) {
    document.getElementById("plant"+plant.id).style.display = "none";
  };

  vm.searchTerm = "";

  vm.search= function(){
    console.log("Search String in vm.search: " + $('#searchString').val());

	    vm.searchTerm = $('#searchString').val();
  };
};

app.component('addplantsComponent',{
  template : `
    <div class="content-div">
      <h1>Plants</h1>
	  <form>
	  	<input id="searchString" type="text" placeholder="Search..." ng-change="$ctrl.search(value)" ng-model="value" ng-model-options="{debounce: 500}" name="searchStr">
	  </form>
        <div class="plants-box">
          <div class="plant" ng-repeat="plant in $ctrl.plants | searchFilter:$ctrl.searchTerm | orderBy:'commonName'">
            <h4>{{plant.commonName}}</h4>
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
                  <input class="qtyInput" type="number" value="1" id="qty{{plant.id}}" name="qty"></span></h4>
                </p>
                <p>
                  <button class="add btn btn-primary" ng-click="$ctrl.addPlanting(plant)">Add</button>
                  <button class="add btn btn-primary" ng-click="$ctrl.addplant_form_hide(plant)">Cancel</button>
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
    reminders: '=',
    loadReminders: '<'
  }
});
