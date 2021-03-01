let countDownDate = new Date("Sep 12, 2021 16:37:52").getTime();
// Run myfunc every second
let myfunc = setInterval(function() {
  let now = new Date().getTime();
  let timeleft = countDownDate - now;
        
  // Calculating the days, hours, minutes and seconds left
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) /(1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  // Result is output to the specific element
  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("mins").innerHTML = minutes
  document.getElementById("secs").innerHTML = seconds 
}, 1000);