var app = angular.module('ngGarden');

var homeController = function($scope) {
    var vm = this;
    vm.hideReminders = function() {
        $('#wrapper').addClass('toggled');
    };
    vm.hideReminders();
};

app.component('homeComponent', {
    template: `
<div>
        <div class="header-dark">
            <h1 class="text-left"><strong> DigIt </strong><i class="fa fa-leaf"></i></h1></div>
    </div><img src="assets/img/sproutStages.jpg" id="sproutStages">
    <section class="features">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h2>GETTING STARTED</h2>
                    <p class="text-justify">Lots of thought goes into planning your garden. When should I start my green beans? When am I supposed to water my aloe plant? Will a mango tree survive in Minnesota? This is where DigIt steps in. Follow these steps and DigIt will
                        give you easy-to-use, personalized gardening information and reminders.</p>
                </div>
                <div class="col-md-6">
                    <div class="row icon-features">
                        <a href="#/register"><div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-user"></i>
                            <p>Create New Account</p></a>
                        </div>
                        <a href="#/addPlants"><div class="col-xs-4 icon-feature"><i class="fa fa-leaf"></i>
                            <p>Add Plants to your Garden</p></a>
                        </div>
                        <div class="col-xs-4 icon-feature"><i class="glyphicon glyphicon-bell"></i>
                            <p>DigIt reminds you when it's time to break out the gardening gloves!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="projects-horizontal">
        <div class="container featuresContainer">
            <div class="intro">
                <h2 class="text-center">Can you DigIt?</h2></div>
            <div class="row projects">
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-5">
                            <img class="img-responsive" src="assets/img/icons/gardening-tools.svg">
                        </div>
                        <div class="col-md-7 transBG">
                            <h3 class="name">By gardeners for gardeners </h3>
                            <p class="text-justify description">DigIt was created for novice and professional gardeners alike who struggle to keep their plants strong and healthy. In short, DigIt saves lives.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item odd">
                    <div class="row">
                        <div class="col-md-5">
                            <img class="img-responsive" src="assets/img/icons/aloe.svg">
                        </div>
                        <div class="col-md-7 transBG">
                            <h3 class="name">Region-Specific Gardening Tips</h3>
                            <p class="text-justify description">Some plants grow better in certain climates. Just plug in your hardiness zone upon registration, and DigIt will give you tips that are specific to your location.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-5">
                            <img class="img-responsive" src="assets/img/icons/watering-can.svg">
                        </div>
                        <div class="col-md-7 transBG">
                            <h3 class="name">Never let your plants die</h3>
                            <p class="text-justify description">DigIt Reminders notify you when you should plant your seeds, when you should move your plants outdoors, and even when you should water them!</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 item odd">
                    <div class="row">
                        <div class="col-md-5">
                            <img class="img-responsive" src="assets/img/icons/ecology.svg">
                        </div>
                        <div class="col-md-7 transBG">
                            <h3 class="name">Crowdsourcing </h3>
                            <p class="text-justify description">DigIt's database is created with the help of all of DigIt's users. This allows users to get detailed information for any plant in the world!<br><br></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="carouselContainer">
                      <div id="myCarousel" class="carousel slide" data-ride="carousel">
                      <ul class="sliderItem nav nav-pills nav-justified">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"><a href="">Terminology<small>Learn
                              what we're talking about<br><br></a></small></li>
                          <li data-target="#myCarousel" data-slide-to="1"><a href="">Tips & Tricks<small>Cool videos to step up
                          your gardening game</a></small></li>
                          <li data-target="#myCarousel" data-slide-to="2"><a href="">Hardiness Zone Lookup<small>Find your hardiness zone
                              so you know how, when and what to plant</a></small></li>
                      </ul>
                          <!-- Wrapper for slides -->
                          <div class="carousel-inner">
                              <div class="item active" style="background-color:#86942a;">
                                  <div class="carousel-caption">
                                  <h1>TERMINOLOGY</h1>
                                  <div class="justifiedParagraph">
                                    <h4>Hardiness Zone</h4>
                                      <p>First developed by the United States Department of Agriculture (USDA), a hardiness zone is a geographically defined area in which a specific category of plant life is capable of growing, as defined by climatic conditions, including its ability to withstand the minimum temperatures of the zone. For example, a plant that is described as "hardy to zone 10" means that the plant can withstand a minimum temperature of −1 °C (30 °F). A more resilient plant that is "hardy to zone 9" can tolerate a minimum temperature of −7 °C (19 °F).</p>
                                  </div>
                                  <div class="justifiedParagraph">
                                    <h4>Sun Schedule</h4>
                                      <p>
                                      <ul>
                                      <li><u>Full Sun:</u> 6 full hours of direct sunlight.</li>
                                      <li><u>Partial Sun:</u> 3-6 hours of direct sunlight each day.</li>
                                      <li><u>Full Shade:</u>  Less than 3 hours of direct sunlight each day, ideally from morning sunlight. In the absence of direct sunlight, a bright light could count as "full shade".</li>
                                      <li><u>Partial Shade:</u> 3-6 hours of morning or early afternoon sun. Relief from the intense late afternoon sun is needed.</li>
                                      </ul>
                                      </p>
                                  </div>
                                  <div class="justifiedParagraph">
                                    <h4>Hardiness Zone</h4>
                                      <p>First developed by the United States Department of Agriculture (USDA), a hardiness zone is a geographically defined area in which a specific category of plant life is capable of growing, as defined by climatic conditions, including its ability to withstand the minimum temperatures of the zone. For example, a plant that is described as "hardy to zone 10" means that the plant can withstand a minimum temperature of −1 °C (30 °F). A more resilient plant that is "hardy to zone 9" can tolerate a minimum temperature of −7 °C (19 °F).</p>
                                  </div>
                                  <div class="justifiedParagraph">
                                    <h4>Hardiness Zone</h4>
                                      <p>First developed by the United States Department of Agriculture (USDA), a hardiness zone is a geographically defined area in which a specific category of plant life is capable of growing, as defined by climatic conditions, including its ability to withstand the minimum temperatures of the zone. For example, a plant that is described as "hardy to zone 10" means that the plant can withstand a minimum temperature of −1 °C (30 °F). A more resilient plant that is "hardy to zone 9" can tolerate a minimum temperature of −7 °C (19 °F).</p>
                                  </div>
                                  </div>
                              </div>
                              <!-- End ITEM -->
                              <div class="item" style="background-color:#a37b45;">
                                  <div class="carousel-caption">
                                    <h1>TIPS & TRICKS</h1>
                                      <div class="videoPlayerBox">
                                        <h4>Plan your garden</h4>
                                        <iframe width="300" height="250"
                                        src="https://www.youtube.com/embed/CANhaqM_SaY">
                                        </iframe>
                                      </div>
                                      <div class="videoPlayerBox">
                                        <h4>Supercharge your soil</h4>
                                        <iframe width="300" height="250"
                                        src="https://www.youtube.com/embed/I5LuH2vEShY">
                                        </iframe>
                                      </div>
                                      <div class="videoPlayerBox">
                                        <h4>Seed sowing success</h4>
                                        <iframe width="300" height="250"
                                        src="https://www.youtube.com/embed/L0TbKSPgyKE">
                                        </iframe>
                                      </div>
                                      <div class="videoPlayerBox">
                                        <h4>Start your seedlings indoors</h4>
                                        <iframe width="300" height="250"
                                        src="https://youtube.com/embed/RWCIaydwM_w">
                                        </iframe>
                                      </div>
                                      <div class="videoPlayerBox">
                                        <h4>Grow your garden in containers</h4>
                                        <iframe width="300" height="250"
                                        src="https://www.youtube.com/embed/zn6IWlvMuJE">
                                        </iframe>
                                      </div>
								      <div class="videoPlayerBox">
								    	<h4>Protect your crop from the weather</h4>
								    	<iframe width="300" height="250"
								    	src="https://www.youtube.com/embed/_ekgAtEekJk">
								    	</iframe>
								      </div>
								      <div class="videoPlayerBox">
								    	<h4>Protect your crop from pests</h4>
								    	<iframe width="300" height="250"
								    	src="https://www.youtube.com/embed/zPsW9lZr71s">
								    	</iframe>
								      </div>
                                      <div class="videoPlayerBox">
                                      <h4>Maximize your harvest</h4>
                                      <iframe width="300" height="250"
                                      src="https://www.youtube.com/embed/mbAMYBouo6I">
                                      </iframe>
                                    </div>
							    	<div class="videoPlayerBox">
								    	<h4>DIY self-watering pot</h4>
								    	<iframe width="300" height="250"
								    	src="https://www.youtube.com/embed/3qlKw70-1XQ">
								    	</iframe>
							    	</div>
							    	<div class="videoPlayerBox">
								    	<h4>Infinitely propagate your herbs</h4>
								    	<iframe width="300" height="250"
								    	src="https://www.youtube.com/embed/LO6J4cFro6E">
								    	</iframe>
							    	</div>

                                  </div>
                              </div>
                              <!-- End Item -->






                              <div class="item" style="background-color:#507642;">
                                  <div class="carousel-caption">
                                  <h1>HARDINESS ZONE</h1>
    								                   <iframe name="zonelookup" src="https://www.arborday.org/webtools/hortzones/ziplookup.cfm?RegID=4563" height="300" width="300" scrolling="No" frameborder="0" marginheight="0" marginwidth="0">[Your browser doesn't support IFrames. <a href="https://www.arborday.org/TreeInfo/ZoneLookup.cfm" target="_blank">Click here</a> to look up your arborday.org hardiness zone.]</iframe>
                                  </div>
                              </div>
                              <!-- End Item -->
                          </div>
                          <!-- End Carousel Inner -->
                      </div>
                      <!-- End Carousel -->
                  </div>

                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/script.min.js"></script>
	  <link rel="stylesheet" href="assets/css/styles.min.css">  `,
    controller: homeController
});
