var app = angular.module("ngGarden");

app.factory('reminderService', function($http, authenticationService){
  service = {};

  service.getReminders = function() {
    return $http({
      method : 'GET',
      url : 'api/reminders',
      headers : {
        'x-access-token' : authenticationService.getToken()
      }
    });
  };

  service.updateRemider = function(reminder){
    return $http({
      method : 'PUT',
      url : 'api/reminders/'+reminder.id,
      headers : {
        'Content-Type' : 'application/json',
        'x-access-token' : authenticationService.getToken()
      },
      data : reminder
    });
  };

  return service;
});
