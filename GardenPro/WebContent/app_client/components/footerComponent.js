var app = angular.module('ngGarden');

var footerController = function(){}

app.component('footerComponent', {
  template : `
  <div class="footer-basic">
      <footer>
          <ul class="list-inline">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
          <p class="copyright">DigIt © 2017</p>
      </footer>
  </div>
  `,
  controller : footerController
});
