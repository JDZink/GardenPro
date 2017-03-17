var app = angular.module('ngGarden');

app.filter('searchFilter', function() {
    return function(plants, searchStr, trans, zone, harvestable) {
        var results = [];

        if (searchStr) {
        	var reg = new RegExp(".*" + searchStr.toLowerCase() + ".*");

            plants.forEach(function(p) {
                if (reg.test(p.commonName.toLowerCase())) {
                  results.push(p);
                }
            });
        } else {
        	results = plants;
        	}
        
        function matchTrans(val){
        	return val.transplant === trans;
        	}
        
        if(trans){
        	results = results.filter(matchTrans);
        	}
        
        function matchTrans(val){
        	return val.transplant === trans;
        	}
        
        if(trans){
        	results = results.filter(matchTrans);
        	}
        
        function matchHarv(val){
        	return val.harvestable;
        	}
        
        if(harvestable){
        	results = results.filter(matchHarv);
        	}
        
        function matchZone(val){
        	if (val.zones && val.zones.indexOf(zone) > -1){
        		return true;
        		}
        		return false;
        	}
        
        if(zone > 0){
        	results = results.filter(matchZone);
        	}
        
        return results;
    };
});
