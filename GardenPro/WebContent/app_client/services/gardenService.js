var app = angular.module("ngGarden");


app.factory('gardenService', function($http, authenticationService){
  var service = {};

  service.getPlants = function() {
    return $http({
      method : 'GET',
      url : 'api/plants',
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    });
  };

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

  service.createPlanting = function(plant,qty,stage){
    return $http({
      method : 'POST',
      url : 'api/plantings/'+plant.id,
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : {
        "qty" : qty,
        "stage" : stage
      }
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
