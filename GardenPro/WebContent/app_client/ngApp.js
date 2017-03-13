angular.module('ngGarden',['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      template : `<home-component>loading...</home-component>`
    })
    .when('/garden', {
      template : `<todos-component>loading...</todos-component>`
    })
    .when('/garden/:id', {
      template : `<todo-detail todo="$resolve.todo">loading...</todo-detail>`,
      resolve : {
        todo : function(gardenService, $route, $location){
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
