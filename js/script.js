// Set the date we're counting down to
let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TICKETS ARE ON SALE!";
  }
}, 1000);


// BURGERMENU
let burgerBar = document.getElementById("burgerbar");
let menuBar = document.getElementById("burgermenu");
let closeMenu = document.getElementById("closemenu");

burgerBar.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuBar.style.display = "block";
    burgerBar.style.display = "none";
    closeMenu.style.display = "block";
};

closeMenu.addEventListener("click", noToggleMenu);

function noToggleMenu (){
    menuBar.style.display = "none";
    burgerBar.style.display = "block";
    closeMenu.style.display = "none";
}






