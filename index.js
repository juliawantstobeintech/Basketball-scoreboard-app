let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
// adding event listeners to the buttons to update or reset the scores
document.getElementById("addOneHome").addEventListener("click", oneHome)
document.getElementById("addTwoHome").addEventListener("click", twoHome)
document.getElementById("addThreeHome").addEventListener("click", threeHome)
document.getElementById("addOneGuest").addEventListener("click", oneGuest)
document.getElementById("addTwoGuest").addEventListener("click", twoGuest)
document.getElementById("addThreeGuest").addEventListener("click", threeGuest)
document.getElementById("newGame").addEventListener("click", reset)

//initializing the scores to 0
let homeStartScore = 0
let guestStartScore = 0

function reset() {
    homeStartScore = 0
    homeScore.textContent = homeStartScore
    
    guestStartScore = 0
    guestScore.textContent = guestStartScore
}

function oneHome() {
    homeStartScore += 1
    homeScore.textContent = homeStartScore
}

function twoHome() {
    homeStartScore += 2
    homeScore.textContent = homeStartScore
    }

function threeHome() {
    homeStartScore += 3
    homeScore.textContent = homeStartScore
    }
    
    
 function oneGuest() {
    guestStartScore += 1
    guestScore.textContent = guestStartScore
    }

function twoGuest() {
    guestStartScore += 2
    guestScore.textContent = guestStartScore
    }

function threeGuest() {
    guestStartScore += 3
    guestScore.textContent = guestStartScore
    }

