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

function changeInput() {
    inputtext.value = "Thank you!";
}

//Video mute/unmute funktion
function toggleMute() {

let video = document.getElementById("videosound")

if(video.muted){
	video.muted = false;
} else {
	video.muted = true;
}

}

//API for program (Fredag)
function getFriday() {
    fetch('json/friday.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `
<h1 class="display mb-4">PROGRAM</h1>
<h2 class="display mb-4">FRIDAY: 19:00 - 05:00</h2>`
            data.forEach(function (friday) {
                output += `
<ul class="list-group mb-3">
<li class="list-group-item">Time: ${friday.Time}</li>
<li class="list-group-item">Name: ${friday.Name}</li>
<li class="list-group-item">Act: ${friday.Act}</li>
</ul>`
            })
            document.getElementById("output1").innerHTML = output;
        })
}

//API for program (Lørdag)
function getSaturday() {
    fetch('json/saturday.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `
<h2 class="display mb-4">SATURDAY: 14:00 - 05:00</h2>
<h3 class="display mb-4" id="emilkankode">Dagsprogram (Free until 20:00)</h3>`
            data.forEach(function (saturday) {
                output += `
<ul class="list-group mb-3">
<li class="list-group-item">Time: ${saturday.Time}</li>
<li class="list-group-item">Name: ${saturday.Name}</li>
<li class="list-group-item">Act: ${saturday.Act}</li>
</ul>`
            })
            document.getElementById("output2").innerHTML = output;
        })
}

//API forside content billeder/information
function getImages() {
    fetch('json/images.json')
        .then((res) => res.json())
        .then((data) => {
            let output = ``
            data.forEach(function (images) {
                output += `
                    <div id="section2">
                        <h2>HEADLINERS</h2>
                        <div id="flex4">
                            <img src="images/music1.png" class="tabletthings" id="banner1" alt="music">
                            <div class="marginimages">
                                <img src=${images.Music1IMG} alt="Jan Brandi">
                                <div class="headlinerText">
                                    <h3>${images.MusicName1}</h3>
                                    <h4>${images.MusicDate1}</h4>
                                </div>
                            </div>
                            <div class="tabletthings marginimages">
                                <img src=${images.Music2IMG} alt="Casper Christensen">
                                <div class="headlinerText">
                                    <h3>${images.MusicName2}</h3>
                                    <h4>${images.MusicDate2}</h4>
                                </div>
                            </div>
                            <div class="pcthings marginimages">
                                <img src=${images.Music3IMG} alt="Kool K Stolze">
                                <div class="headlinerText">
                                    <h3>${images.MusicName3}</h3>
                                    <h4>${images.MusicDate3}</h4>
                                </div>
                            </div>
                            <img src="images/music2.png" class="tabletthings" id="banner2" alt="music">
                        </div>
                    </div>
                <section id="section3">
                    <div id="flex5">
                        <img src="images/art1.png" class="tabletthings" id="banner3" alt="art">
                        <div class="marginimages">
                            <img src=${images.Art1IMG} alt="Discosmos">
                            <div class="headlinerText">
                                <h3>${images.ArtName1}</h3>
                                <h4>${images.ArtDate1}</h4>
                            </div>
                        </div>
                        <div class="tabletthings marginimages">
                            <img src=${images.Art2IMG} alt="Hackstage">
                            <div class="headlinerText">
                                <h3>${images.ArtName2}</h3>
                                <h4>${images.ArtDate2}</h4>
                            </div>
                        </div>
                        <div class="pcthings marginimages">
                            <img src=${images.Art3IMG} alt="Panorama light art">
                            <div class="headlinerText">
                                <h3>${images.ArtName3}</h3>
                                <h4>${images.ArtDate3}</h4>
                            </div>
                        </div>
                        <img src="images/art2.png" class="tabletthings" id="banner4" alt="art">
                    </div>
                </section>
                <section id="section4">
                    <div id="flex6">
                        <img src="images/shows1.png" class="tabletthings" id="banner5" alt="shows">
                        <div class="marginimages">
                            <img src=${images.Event1IMG} alt="Mobile Mirrors">
                            <div class="headlinerText">
                                <h3>${images.EventName1}</h3>
                                <h4>${images.EventDate1}</h4>
                            </div>
                        </div>
                        <div class="tabletthings marginimages">
                            <img src=${images.Event2IMG} alt="Skeletonman">
                            <div class="headlinerText">
                                <h3>${images.EventName2}</h3>
                                <h4>${images.EventDate2}</h4>
                            </div>
                        </div>
                        <div class="pcthings marginimages">
                            <img src=${images.Event3IMG} alt="Skeleton">
                            <div class="headlinerText">
                                <h3>${images.EventName3}</h3>
                                <h4>${images.EventDate3}</h4>
                            </div>
                        </div>
                        <img src="images/shows2.png" class="tabletthings" id="banner6" alt="shows">
                    </div>
                </section>`
            })
            document.getElementById("output3").innerHTML = output;
        })
}
