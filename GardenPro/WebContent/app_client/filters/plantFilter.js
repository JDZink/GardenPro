var app = angular.module('ngGarden');

/**********Filter**************/
app.filter('plantFilter', function(){
  return function(garden){
    var results = [];
    console.log(typeof garden);
    if(typeof garden === "object") {
      garden.forEach(function(planting){
        if(parseInt(planting.stage) > 3){
          results.push(planting);
        }
      });
    }
    return results;
  };
});
