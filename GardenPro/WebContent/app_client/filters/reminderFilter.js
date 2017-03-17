var app = angular.module('ngGarden');

/**********Filter**************/
app.filter('reminderFilter', function(){
  return function(reminders,showComplete,reminderTime){
    var results = [];
    var today = getTodayDays();
    var reminderDiff = getReminderDiff(reminderTime);
    reminders.forEach(function(reminder){
      var reminderDay = getReminderDay(reminder.date);
      var diff = (reminderDay - today);
      if (diff < 0){ diff *= -1; }
      if(((reminder.complete === false || showComplete === true) &&
        ((diff) <= reminderDiff)) ||
        (reminder.complete === false && reminderDay < today)) {
        results.push(reminder);
      }

    });
    return results;
  };
});

var getTodayDays = function(){
  var today = new Date();
  var year = today.getFullYear() * 365;
  var month = getDaysFromMonth(today.getMonth()+1);
  var day = year + month + today.getDate();
  return day;
};

var getReminderDay = function(reminderDate) {
  var year = reminderDate[0] * 365;
  var month = getDaysFromMonth(reminderDate[1]);
  var day = year + month + reminderDate[2];
  return day;
};

var getReminderDiff = function(reminderTime) {
  switch(reminderTime) {
    case "day": return 1;
    case "week": return 7;
    case "month": return 31;
    case "year": return 365;
  }
};

var getDaysFromMonth = function(month) {
  switch (month) {
    case 12: return 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 31 + 28;
    case 11: return 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31 + 31 + 28;
    case 10: return 30 + 31 + 31 + 30 + 31 + 30 + 31 + 31 + 28;
    case 9: return 31 + 31 + 30 + 31 + 30 + 31 + 31 + 28;
    case 8: return 31 + 30 + 31 + 30 + 31 + 31 + 28;
    case 7: return 30 + 31 + 30 + 31 + 31 + 28;
    case 6: return 31 + 30 + 31 + 31 + 28;
    case 5: return 30 + 31 + 31 + 28;
    case 4: return 31 + 31 + 28;
    case 3: return 31 + 28;
    case 2: return 31;
    case 1: return 0;
  }
};
