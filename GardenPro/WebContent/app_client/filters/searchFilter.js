var app = angular.module('ngGarden');

app.filter('searchFilter', function() {
    return function(plants, searchStr) {
        var results = [];

        console.log("In Search Filter..." + searchStr);

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
