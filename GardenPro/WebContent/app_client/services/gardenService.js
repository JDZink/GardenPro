var app = angular.module("ngGarden");


app.factory('gardenService', function($http, authenticationService){
  var service = {};

  service.getGarden = function(){
    return $http({
      method : 'GET',
      url : 'api/plantings',
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    });
  };

  service.getPlantingInfo = function(id){
    return $http({
      method : 'GET',
      url : 'api/plantings/'+id,
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    });
  };

  service.createPlanting = function(planting){
    return $http({
      method : 'POST',
      url : 'api/plantings',
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : planting
    });
  };

  service.deletePlanting = function(planting){
    return $http({
      method : 'DELETE',
      url : 'api/plantings/'+planting.id,
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    });
  };

  service.updatePlanting = function(planting){
    return $http({
      method : 'PUT',
      url : 'api/plantings/'+planting.id,
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : planting
    });
  };

  return service;
});
