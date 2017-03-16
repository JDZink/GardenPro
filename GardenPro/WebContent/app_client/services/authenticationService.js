var app = angular.module('ngGarden');

app.factory('authenticationService', function($window, $http){
  //place JWT (JSON Web Token)
  var saveToken = function(token){
    $window.localStorage['garden-token'] = token;
  };

  //retrieve JWT from local storage
  var getToken = function(){
    return $window.localStorage['garden-token'];
  };

  var register = function(user){
    return $http({
      method : "POST",
      url : "api/register",
      headers : {
        "Content-Type" : "application/json"
      },
      data : user
    })
    .then(function(res){
      saveToken(res.data.jwt);
    });
  };

  //contact the server, authenticate user credentials
  var login = function(user){
    return $http({
      method : "POST",
      url : "api/login",
      headers : {
        "Content-Type" : "application/json"
      },
      data : user
    })
    .then(function(res){
      saveToken(res.data.jwt);
    });
  };

  //remove JWT from local storage
  var logout = function() {
    $window.localStorage.removeItem('garden-token');
  };

  //check that a user's login is valid (present AND not expired)
  var isLoggedIn = function() {
    var token = getToken();

    if (token) {
      // $window.atob decodes the encoded string
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  };

  //get current user from JWT
  var currentUser = function() {
    if (isLoggedIn()) {
      var token = getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return {
        name : payload.username,
        id : payload.user_id
      };
    }
  };

  var noUser = function() {
    if(!isLoggedIn()){
      $('#wrapper').addClass('toggled');
      $('#sidebar-wrapper').hide();
      $('#menu-toggle').hide();
      $('#logout').hide();
      $('#login').show();
      $('#signup').show();
      $('#nav-links').hide();
    } else {
      $('#sidebar-wrapper').show();
      $('#menu-toggle').show();
      $('#logout').show();
      $('#login').hide();
      $('#signup').hide();
      $('#nav-links').show();
    }
  };

  return {
    login : login,
    register : register,
    logout : logout,
    isLoggedIn : isLoggedIn,
    currentUser : currentUser,
    getToken : getToken,
    noUser : noUser
  };
});
