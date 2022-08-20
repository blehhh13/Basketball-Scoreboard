let scoreHome = document.getElementById("score_home");
let scoreGuest = document.getElementById("score_guest");

let basketsHome = 0;
let basketsGuest = 0;

function plusOneHome() {
  basketsHome += 1;
  scoreHome.textContent = basketsHome;
}

function plusTwoHome() {
  basketsHome += 2;
  scoreHome.textContent = basketsHome;
}

function plusThreeHome() {
  basketsHome += 3;
  scoreHome.textContent = basketsHome;
}

function plusOneGuest() {
  basketsGuest += 1;
  scoreGuest.textContent = basketsGuest;
}

function plusTwoGuest() {
  basketsGuest += 2;
  scoreGuest.textContent = basketsGuest;
}

function plusThreeGuest() {
  basketsGuest += 3;
  scoreGuest.textContent = basketsGuest;
}
