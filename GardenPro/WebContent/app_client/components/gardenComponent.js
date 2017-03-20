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

  vm.showStage = function(stage) {
    switch (stage) {
      case 0: return "Seed";
      case 1: return "Started";
      case 2: return "Germinated";
      case 3: return "Sprout";
      case 4: return "Young Plant";
      case 5: return "Mature Plant";
    }
  };

  vm.showSeeds = true;

  vm.loadData();
};

app.component('gardenComponent',{
  template : `
    <div class="content-div">
      <label id="seedToggle" ng-click="$ctrl.showComplete=($ctrl.showSeeds)?false:true;">Show Unplanted Seeds?</label>
      <input type='checkbox' ng-model='$ctrl.showSeeds'></input>
    </div>
    <div class="content-div">
    <h1 class="seedStageHead">Plants in Seed Stages <a href="#/addPlants"<button class="btn btn-primary">Get New Seeds</button></a></h1>

      <seeds-component garden="$ctrl.garden" show-seeds="$ctrl.showSeeds" load-data="$ctrl.loadData"
        show-stage="$ctrl.showStage"></seeds-component>
    </div>
    <div class="content-div">

      <h1 class="seedStageHead">Plants</h1>

      <plants-component garden="$ctrl.garden" load-data="$ctrl.loadData" show-stage="$ctrl.showStage"></plants-component>

    </div>
  `,
  controller : gardenController
});
