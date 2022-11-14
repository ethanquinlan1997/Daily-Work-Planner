// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    console.log( 'ready!');

    
    var saveBtn = $(".saveBtn");
    // Allows for current day to be displayed at the top of the calendar
    $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
    
    // Time blocks are color coded to indicate past=grey, present=red, future=green
    function timeBlockColor() {
        var hour = moment().hours();
    
        $(".time-block").each(function() {
            var currHour = parseInt($(this).attr("id"));
    
            if (currHour > hour) {
                $(this).addClass("future");
            } else if (currHour === hour) {
                $(this).addClass("present");
            } else {
                $(this).addClass("past");
            }
        })
    };
    
    // WHEN I click the save button for that time block

    // Event listener for Save button
    saveBtn.on("click", function() {
    
        var time = $(this).siblings(".hour").text();
        var plan = $(this).siblings(".plan").val();
    
        // THEN the text for that event is saved in local storage
        // set varibles as key value pairs 
        localStorage.setItem(time, plan);
    });
    
    // WHEN I refresh the page
    // THEN the saved events persist
    function usePlanner() {
    
        $(".hour").each(function() {
            var currHour = $(this).text();
            var currPlan = localStorage.getItem(currHour);
    
             if(currPlan !== null) {
                $(this).siblings(".plan").val(currPlan);
            }
        });
      }

      
    // Call functions so code can run 
    timeBlockColor();
    usePlanner();

  });

      
 
