var app = angular.module('ngGarden');

app.filter('searchFilter', function(){
  return function(plants, searchStr){
    var results = [];
    var reg = new RegExp(".*" + searchStr + ".*/i");
    
    console.log("In Search Filter...")
    plants.forEach(function(p){
	    if (reg.test(p.commonName)) {
	        results.push(p);
	    } else {
	        console.log("No String found");
	    }
    });
    return results;
  };
});
