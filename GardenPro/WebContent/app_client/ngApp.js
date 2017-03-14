angular.module('ngGarden',['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/login', {
      template : `<registration-component>loading registration-component...</registration-component>`
    })
    .when('/register', {
      template : `<signup-component>loading signup-component...</signup-component>`
    })
    .when('/garden', {
      template : `<garden-component>loading garden-component...</garden-component>`
    })
    .when('/garden/:id', {
      template : `<planting-detail planting="$resolve.planting">loading planting-detail...</planting-detail>`,
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
    .when('/addPlants', {
      template : `<addplants-component>loading addplants-component...</addplants-component>`
    })
    .when('/about', {
      template : `<about-component>loading about-component...</about-component>`
    })
    .when('/contact', {
      template : `<contact-component>loading contact-component...</contact-component>`
    })
    .otherwise({
      template : `<not-found>loading not-found...</not-found>`
    });
});
