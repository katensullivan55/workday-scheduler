var dateDisplay = function(){
    var todayDate = moment().format('dddd, MMMM Do YYYY')
    var dayEl = document.getElementById(currentDay)
    dayEl.append(todayDate)
}

window.addEventListener('load', dateDisplay)