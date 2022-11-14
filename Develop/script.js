// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    console.log( 'ready!');

$("#currentDay").text(dayjs().format('dddd MMMM D, YYYY'));

var hour = dayjs().format("HH");
var saveBtn = $(".saveBtn");
var clearBtn = $(".clearBtn");
var timeBlock = $(".time-block");
var currentHour = hour;
      // Button function to clear local storage and clear contents
      
    clearBtn.click(function(event) {
        event.preventDefault;
        $(".description").val("");
        localStorage.clear();
    });


    timeBlock.each(function () {
        var timeBlock = $(this).attr("id").split("-")[1];
        
        if (currentHour == timeBlock) {
          $(this).addClass("present");
          $(this).children(".description").addClass("white-text");
        } else if (currentHour < timeBlock) {
          $(this).removeClass("present");
          $(this).addClass("future");
        } else if (currentHour > timeBlock) {
          $(this).removeClass("future");
          $(this).addClass("past");
        }
      });
      
      saveBtn.click(function(event) {
        event.preventDefault();
        var time = $(this).siblings('.hour').text();
        var plan = $(this).siblings('.description').val();
        localStorage.setItem(time, plan);
    });




      $("#nine .time-block").val(localStorage.getItem("09"));
      $("#ten .time-block").val(localStorage.getItem("10"));
      $("#eleven .time-block").val(localStorage.getItem("11"));
      $("#twelve .time-block").val(localStorage.getItem("12"));
      $("#thirteen .time-block").val(localStorage.getItem("13"));
      $("#fourteen .time-block").val(localStorage.getItem("14"));
      $("#fifteen .time-block").val(localStorage.getItem("15"));
      $("#sixteen .time-block").val(localStorage.getItem("16"));
      $("#seventeen .time-block").val(localStorage.getItem("17"));
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});