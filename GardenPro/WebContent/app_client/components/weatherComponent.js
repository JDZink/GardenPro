var app = angular.module('ngGarden');

var weatherComponentController = function(){
  var vm = this;

  vm.getWeather = function(){
	  weatherService.getWeather(zipCode);
  }
  
  vm.noZip = function(){
	  
  }
  		
};

app.component('weatherComponent', {
  template : `
  <div name="zipCodeForm">
	<div>
	  <form name="regForm">
		  <input type="text" name="zipCode" placeholder="Zip code" required ng-minlength="5" ng-maxlength="5"/><br>
		  <input type="submit" value="Submit" ng-click="$ctrl.getWeather(zipCode.val())">
	  </form>
	<div>

	  <div>
	    <ul>
	      <li ng-show="regForm.zipCode.$dirty && regForm.zipCode.$invalid">
	        Zip code must be exactly 5 characters
	      </li>
	      <li ng-show="regForm.zipCode.$dirty && regForm.zipCode.$error.required">
	        Zip code is required
	      </li>
	    </ul>
	  </div>
   <div>
   
   <div name="viewWeather">
   
   </div>
  `,

  controller : weatherComponentController,

  bindings : {
    garden: '='
  }
});
