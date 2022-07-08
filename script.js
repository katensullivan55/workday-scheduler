var displayDate = function(){
    var todayDate = moment().format('dddd, MMMM Do YYYY')
    var dayEl = document.getElementById(currentDay)
    dayEl.append(todayDate)
}

// shows current date
window.addEventListener('load', displayDate)

// function that saves tasks
$("button").on("click", function(){
    var toDo = $(this).siblings("textarea").val()
    var dueTime = $(this).siblings(".time-block").attr("id")
    localStorage.setItem(dueTime, toDo)
    window.alert("Your Task is SAVED to your Scheduler!")
})

// function that stores data from user input onto page
$("#nine").siblings("textarea").val(localStorage.getItem("nine"))
$("#ten").siblings("textarea").val(localStorage.getItem("ten"))
$("#eleven").siblings("textarea").val(localStorage.getItem("eleven"))
$("#twelve").siblings("textarea").val(localStorage.getItem("twelve"))
$("#one").siblings("textarea").val(localStorage.getItem("one"))
$("#two").siblings("textarea").val(localStorage.getItem("two"))
$("#three").siblings("textarea").val(localStorage.getItem("three"))
$("#four").siblings("textarea").val(localStorage.getItem("four"))
$("#five").siblings("textarea").val(localStorage.getItem("five"))

// variable and function to check time with moment and color code blocks
var currentHour = moment().hour();

$(".description").each(function(){
    hourCheck = $(this).siblings(".time-block").attr("id")
        if(hourCheck == currentHour){
            $(this).css("background-color","red")
        }
        else if(hourCheck < currentHour){
            $(this).css("background-color","lightgray")
        }
        else if(hourCheck > currentHour){
            $(this).css("background-color","green")
        }
});