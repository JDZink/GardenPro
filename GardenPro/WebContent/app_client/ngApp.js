angular.module('ngGarden',['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      template : `<registration-component>loading...</registration-component>`
    })
    .when('/garden', {
      template : `<garden-component>loading...</garden-component>`
    })
    .when('/garden/:id', {
      template : `<planting-detail planting="$resolve.planting">loading...</planting-detail>`,
      resolve : {
        planting : function(gardenService, $route, $location){
          return gardenService.getPlantingInfo($route.current.params.id)
            .then(function(res){
              return res.data;
            })
            .catch(function(e){
              $location.path('/not-found')
              console.log('Error');
            });
        }
      }
    })
    .when('/about', {
      templateUrl : `<about-component>loading...</about-component>`
    })
    .when('/contact', {
      template : `<contact-component>loading...</contact-component>`
    })
    .otherwise({
      template : `<not-found>loading...</not-found>`
    });
});
