var app = angular.module('ngGarden');

var outlineController = function(){}

app.component('outlineComponent', {
  template : `
  <div id="wrapper">
      <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
<!--******************************************** Reminders *******************************************************-->
              <li class="sidebar-brand"> <a href="#">Home </a></li>
              <li> <a href="#">Dashboard </a></li>
              <li> <a href="#">Dashboard </a></li>
              <li> <a href="#">Dashboard </a></li>
          </ul>
<!--**********************************************************************************************************************-->
      </div>
      <div class="page-content-wrapper">
          <div class="container-fluid"><a class="btn btn-link reminders" role="button" href="#menu-toggle" id="menu-toggle"><i class="fa fa-bars"></i></a>
              <div class="row">
                  <div class="col-md-12">
<!--******************************************** Page Content Here *******************************************************-->
                          <ng-view></ng-view>
<!--**********************************************************************************************************************-->
                  </div>
              </div>
          </div>
      </div>
  </div>
  `,
  controller : outlineController
});
