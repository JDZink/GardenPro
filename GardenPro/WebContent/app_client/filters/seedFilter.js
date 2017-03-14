var app = angular.module('ngGarden');

/**********Filter**************/
app.filter('seedFilter', function(){
  return function(garden,showSeeds){
    var results = [];
    console.log(typeof garden);
    if(typeof garden === "object") {
      garden.forEach(function(planting){
        if(parseInt(planting.stage) <= 3 && showSeeds){
          results.push(planting);
        }
      });
    }
    return results;
  };
});
