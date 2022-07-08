var displayDate = function(){
    var todayDate = moment().format('dddd, MMMM Do YYYY')
    var dayEl = document.getElementById(currentDay)
    dayEl.append(todayDate)
}

// shows current date
window.addEventListener('load', displayDate)

// function that saves tasks
$("button").on("click", function(){
    var task = $(this).siblings("textarea").val()
    console.log(task)

    var taskTime = $(this).siblings(".time-block").attr("id")
    console.log(taskTime)

    localStorage.setItem(taskTime, task)

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