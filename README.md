# DigIt
## Skill Distillery Final Project

### Colaborators
- Josh Zink
- Robert Helmick
- Nicholas Marchese

### Description
  This web application is designed to help gardeners keep track of each plant in their garden from the seed phase to the harvest phase. Using region-specific data, DigIt provides users with customized information and reminders for when to plant their seeds, water, and otherwise care for each plant.

### Getting Started
Upon user registration, users must input their hardiness zone which they can look up if they do not know. This is key to DigIt's functionality, as DigIt uses their location as the crux of its customized reminders. Users are then encouraged to use DigIt's database of plants to add plants to their Garden. Users may also add plants if the plant does not already exist in the database. As soon as a seed is added to the user's garden, they will receive notifications exactly when the particular seed needs to be planted, and as the plant moves through its stages of maturity, the user will receive custom reminders of how best to care for their plant during this stage of life. 

### Technologies Used

- Spring MVC
- Java
- JavaScript
- HTML
- CSS
- REST
- MySQL
- AngularJS
- BootStrap
- AWS
- Eclipse/Spring Tool Suite

#### Premise
The concept of DigIt comes from our own personal frustrations as novice home gardeners. With so many responsibilities in our day-to-day lives, paying close attention to your houseplants can be difficult. We decided to build an app that will remind us when it is time to get out the watering bucket and gardening gloves. How you care for a plant has many factors. Apple trees must be treated very differently than an orchid. An apple tree sproutling must be watered much more frequently than a mature apple tree. Apple trees grow very differently in a cold climate than a temperate one. There are countless variables to consider when planting your garden, and DigIt is there to help. DigIt will send custom reminders for when to sow, water, transplant and harvest based on the user's location, plant type, and its maturity.

#### How it Works
DigIt's core functionality is centered around the Reminders feature. This feature encompasses adjusting DigIt's algorithms to provide the user with relevant gardening information that is specific to the user's region as well as the type of plant that the user is growing. This allows DigIt to notify the user on the exact day that a seed should be started, exactly when it should be moved outdoors, when and how often it should be watered, and even when it should be harvested if it is an edible plant. Using the plant's characteristics such as its germination and maturity rate, DigIt  Crowdsourcing is another fundamental concept behind DigIt, so DigIt users are encouraged to contribute to the extensive SQL database of common plants.

#### Future Features
With additional time, we would have liked to include several more features, including a weather API that would not only display the current weather for the user's location, but also adjusted watering intervals based off of recent weather history. Also we would have liked to implement a calendar API that would send email notifications to the user when they have a reminder that needs their attention.
