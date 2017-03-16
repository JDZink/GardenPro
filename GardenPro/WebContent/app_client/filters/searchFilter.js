var app = angular.module('ngGarden');

app.filter('searchFilter', function() {
    return function(plants, searchStr) {
        var results = [];

        if (!searchStr) {
            return plants;
        } else {
          var reg = new RegExp(".*" + searchStr.toLowerCase() + ".*");

            plants.forEach(function(p) {
                if (reg.test(p.commonName.toLowerCase())) {
                    results.push(p);
                } else {
                    console.log("No String found");
                }
            });
            return results;
        }
    };
});
