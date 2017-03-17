var app = angular.module('ngGarden');

app.factory('plantService', function($window, $http){

  var createPlant = function(plant){
    return $http({
      method : "POST",
      url : "api/plants",
      headers : {
        "Content-Type" : "application/json",
        'x-access-token' : authenticationService.getToken()
      },
      data : user
    })
    .then(function(res){
      saveToken(res.data.jwt);
    });
  };

});
