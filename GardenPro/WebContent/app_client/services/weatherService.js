var app = angular.module("ngGarden");


app.factory('weatherService', function($http, authenticationService){
  var service = {};

  service.getWeather = function(zipCode) {
    return $http({
      method : 'GET',
      url : "api.openweathermap.org/data/2.5/forecast/daily?zip=" + zipCode 
      		+ ",us&APPID=b2882be4c16d7ba32911c91348556b67",
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    });
  };
  return service;
});