var app = angular.module('ngGarden');

/**********Filter**************/
app.filter('seedFilter', function(){
  return function(garden,showSeeds){
    var results = [];
    // console.log(typeof garden);
    if(typeof garden === "object") {
      garden.forEach(function(planting){
        if((parseInt(planting.stage) <= 3 && parseInt(planting.stage) >= 1) ||
                                  showSeeds && parseInt(planting.stage) <= 3){
          results.push(planting);
        }
      });
    }
    return results;
  };
});
