let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeStartScore = 0
let guestStartScore = 0

function reset(){
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

