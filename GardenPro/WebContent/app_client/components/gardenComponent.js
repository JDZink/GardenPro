var app = angular.module('ngGarden');


var gardenController = function(gardenService) {
  var vm = this;

  vm.garden = [];

  vm.loadData = function(){
    gardenService.getGarden()
      .then(function(res){
        vm.garden = res.data;
      });
  };

  vm.showSeeds = false;

  vm.loadData();

  vm.addPlanting = function(planting){
    gardenService.createPlanting(planting)
      .then(vm.loadData);
  };
};

app.component('gardenComponent',{
  template : `
    <div class="content-div">
      <h1>Plants in Seed Stages <a href="#/addPlants"<button class="btn btn-primary">Add New Seeds</button></a></h1>

      <seeds-component garden="$ctrl.garden" show-seeds="$ctrl.showSeeds" load-data="$ctrl.loadData"></seeds-component>

      <label ng-click="$ctrl.showComplete=($ctrl.showSeeds)?false:true;">Show Unplanted Seeds?</label>
      <input type='checkbox' ng-model='$ctrl.showSeeds'></input>
      <h1>Plants</h1>
      
      <plants-component garden="$ctrl.garden" load-data="$ctrl.loadData"></plants-component>

    </div>
  `,
  controller : gardenController
});
