var app = angular.module('ngGarden');

app.factory('plantService', function(authenticationService, $window, $http){
	var service = this;
	service.createPlant = function(plant){
    return $http({
      method : "POST",
      url : "api/plants",
      headers : {
        "Content-Type" : "application/json",
        'x-access-token' : authenticationService.getToken()
      },
      data : plant
    })
  };

  service.editPlant = function(plant){
	    return $http({
	      method : "POST",
	      url : "api/plants",
	      headers : {
	        "Content-Type" : "application/json",
	        'x-access-token' : authenticationService.getToken()
	      },
	      data : plant
	    })
	  };
	  return service;
});
