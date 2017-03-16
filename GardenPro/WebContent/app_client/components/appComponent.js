var app = angular.module('ngGarden');

/*****************APP COMPONENT*******************/
var appController = function(authenticationService, reminderService){
  var vm = this;
  vm.userLoggedIn = function() {
    return authenticationService.isLoggedIn();
  };

  vm.showComplete = false;

  vm.reminders = [];

  vm.loadReminders = function() {
    reminderService.getReminders()
    .then(function(res){
      vm.reminders = res.data;
    });
  };
  vm.loadReminders();
  console.log(vm.reminders);

  vm.show_reminder_detail = function(reminder){
    if(document.getElementById("rDetail"+reminder.id).style.display === "none"){
      document.getElementById("rDetail"+reminder.id).style.display = "block";
    } else {
      document.getElementById("rDetail"+reminder.id).style.display = "none";
    }
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
              <li class="reminder" ng-repeat="reminder in $ctrl.reminders | completeFilter:$ctrl.showComplete | orderBy:'date'">
                <h4 class="reminderTitle" ng-click="$ctrl.show_reminder_detail(reminder)">
                  {{reminder.title}}
                  <input type='checkbox' ng-model='reminder.complete'></input>
                </h4>
                <h5 class="reminderDetail" id="rDetail{{reminder.id}}">
                  {{reminder.description}}
                </h5>
              </li>
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
  <script src="assets/js/Sidebar-Menu.js"></script>
  `,
  controller : appController
});
/*************************************************/
