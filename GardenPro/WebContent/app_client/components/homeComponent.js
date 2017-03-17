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
        <div class="container">
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
                <div class="col-sm-6 item">
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
                <div class="col-sm-6 item">
                    <div class="row">
                        <div class="col-md-5">
                            <img class="img-responsive" src="assets/img/icons/ecology.svg">
                        </div>
                        <div class="col-md-7 transBG">
                            <h3 class="name">Crowdsourcing </h3>
                            <p class="text-justify description">DigIt's database is created with the help of all of DigIt's users. This allows users to get detailed information for any plant in the world!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="carouselContainer">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <div class="item active">
                <div class="carousel-caption">
//TERMINOLOGY
                    <p>

                    TERMINOLOGY
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem
                        ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </div>
            <!-- End Item -->
            <div class="item" background-color="#a37b45">
                <div class="carousel-caption">
// HARDINESS ZONES
<iframe name="zonelookup" src="https://www.arborday.org/webtools/hortzones/ziplookup.cfm?RegID=4559" height="150" width="300" scrolling="No" frameborder="0" marginheight="0" marginwidth="0">[Your browser doesn't support IFrames. <a href="https://www.arborday.org/TreeInfo/ZoneLookup.cfm" target="_blank">Click here</a> to look up your arborday.org hardiness zone.]</iframe>
                </div>
            </div>
            <!-- End Item -->
            <div class="item">
                <div class="carousel-caption">
//TIPS & TRICKS
                    <p>
                    TIPS & TRICKS
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem
                        ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </div>
            <!-- End Item -->
        </div>
        <!-- End Carousel Inner -->
        <ul class="sliderItem nav nav-pills nav-justified">
            <li data-target="#myCarousel" data-slide-to="0" class="active"><a href="">Terminology<small>Learn
                what we're talking about<br><br></a></small></li>
            <li data-target="#myCarousel" data-slide-to="1"><a href="">Hardiness Zone<small>Find your hardiness zone
                so you know how and when to plant</a></small></li>
            <li data-target="#myCarousel" data-slide-to="2"><a href="">Tips & Tricks<small>Cool videos to step up
                your gardening game</a></small></li>
        </ul>
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
