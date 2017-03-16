var app = angular.module('ngGarden');

/**********Filter**************/
app.filter('completeFilter', function(){
  return function(reminders,showComplete){
    var results = [];
    reminders.forEach(function(reminder){
      if(reminder.complete === false || showComplete === true){
        results.push(reminder);
      }
    });
    return results;
  };
});
