var app = angular.module('ngGarden');

var homeController = function($scope){
  var vm = this;
  vm.hideReminders = function() {
    $('#wrapper').addClass('toggled');
  };
  vm.hideReminders();
};

app.component('homeComponent', {
  template : `
  <div class="basic-bg">
    <h1>Welcome to DigIt <i class="fa fa-leaf" aria-hidden="true"></i></h1>
    <iframe width="420" height="315"
      src="https://www.youtube.com/embed/XGSy3_Czz8k">
    </iframe>
  </div>
  `,
  controller : homeController
});
