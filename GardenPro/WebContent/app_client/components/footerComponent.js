var app = angular.module('ngGarden');

var footerController = function(){}

app.component('footerComponent', {
  template : `
  <div class="footer-basic">
      <footer>
          <ul class="list-inline">
              <li><a href="#/home">Home</a></li>
              <li><a href="https://github.com/nmarchese/GardenPro">GitHub</a></li>
              <li><a href="#/login">Login / Register</a></li>
          </ul>
          <p class="copyright">DigIt © 2017</p>
      </footer>
  </div>
  `,
  controller : footerController
});
