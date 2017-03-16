var app = angular.module('ngGarden');

/*****************APP COMPONENT*******************/
var appController = function(authenticationService, reminderService, $rootScope){
  var vm = this;
  vm.noUser = function() {
    authenticationService.noUser();
  };
  vm.noUser();

  vm.showComplete = false;

  vm.reminders = [];

  vm.loadReminders = function() {
    if(authenticationService.isLoggedIn()){
      reminderService.getReminders()
      .then(function(res){
        vm.reminders = res.data;
      });
    }
  };
  vm.loadReminders();
  $rootScope.$on('reminderUpdateEvent', function(event) {
    vm.loadReminders();
  });



  vm.show_reminder_detail = function(reminder){
    $('#rDetail'+reminder.id).slideToggle("slow");
  };

  vm.updateReminder = function(reminder){
    reminderService.updateReminder(reminder)
    .then(vm.loadReminders);
  };
};

app.component('appComponent', {
  template : `
  <div id="wrapper">
      <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
<!--******************************************** Reminders ******************************-->
              <h3 id="remindersHead">Reminders
                <br><span id="showComplete">
                <input id="completeCheck" type='checkbox' ng-model='$ctrl.showComplete'></input> Show Complete?
              </span></h3>
              <hr class="reminderHeadDivider">
              <div class="reminder" ng-repeat="reminder in $ctrl.reminders | completeFilter:$ctrl.showComplete | orderBy:['date[0]', 'date[1]', 'date[2]']">
                <h4 class="reminderTitle">
                  <span class="detailClick" ng-click="$ctrl.show_reminder_detail(reminder)">{{reminder.title}}
                   {{reminder.date[1]}}/{{reminder.date[2]}}</span>
                  <input type='checkbox' ng-model='reminder.complete' ng-change='$ctrl.updateReminder(reminder)'></input>
                </h4>
                <h5 class="reminderDetail" id="rDetail{{reminder.id}}">
                  {{reminder.description}}
                </h5>
                <hr class="reminderDivider">
              </div>
          </ul>
<!--*************************************************************************************-->
      </div>
      <div class="page-content-wrapper">
          <div class="container-fluid"><a class="btn btn-link reminders" role="button"
            href="#menu-toggle" id="menu-toggle"><i class="fa fa-bell-o" aria-hidden="true"></i></a>
              <div class="row">
                  <div class="col-md-12">
<!--******************************************** Page Content Here **********************-->
                    <ng-view></ng-view>
<!--*************************************************************************************-->
                  </div>
              </div>
          </div>
      </div>
  </div>
  {{$ctrl.noUser()}}
  <script src="assets/js/Sidebar-Menu.js"></script>
  `,
  controller : appController
});
/*************************************************/
