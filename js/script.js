//sætter datoen vi tæller til
let countDownDate = new Date("Feb 5, 2021 16:00:00").getTime();


// opdaterer countdown hvert sekund
let x = setInterval(function () {


    //Få idags dato og tid
    let now = new Date().getTime();


    //Finder tidsintervallet imellem nu og vores dato vi tæller ned til
    let distance = countDownDate - now;


    //Tids udregning for dage, timer, minutter og sekunder
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    //Display vores resultat i elementet med id="demo"
    document.querySelector(".demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";


    // Hvis vores countdown er slut, skriv lidt tekst
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".demo").innerHTML = "TICKETS ARE ON SALE!";
    }
}, 1000);

//countdown ends //
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

function noToggleMenu() {
    menuBar.style.display = "none";
    burgerBar.style.display = "block";
    closeMenu.style.display = "none";
}
//burgermenu ends //
//logo fade in //

let mobilLogo = document.getElementById("mobillogo");

burgerBar.addEventListener("click", fadeIn);

function fadeIn() {
    mobilLogo.classList.add("fade-in");
}

//logo fade in ends //
// Buy me button //
let buyMeButton = document.getElementById("buyme");

buyMeButton.addEventListener("click", referTo);

function referTo() {
    window.location.href = "tickets.html";
}
// Buy me button ends //

// notification button //
let submitb = document.getElementById("submitbutton");
let inputtext = document.getElementById("email");

submitb.addEventListener("click", changeInput);

function changeInput(){
    inputtext.value = "Thank you!";
}


//API









