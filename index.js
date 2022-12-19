// let homeScoreBtnOne = document.getElementById("home-score-btn1")
// let homeScoreBtnTwo = document.getElementById("home-score-btn2")
// let homeScoreBtnThree = document.getElementById("home-score-btn3")
// let guestScoreBtnOne = document.getElementById("guest-score-btn1")
// let guestScoreBtnTwo = document.getElementById("guest-score-btn2")
// let guestScoreBtnThree = document.getElementById("guest-score-btn3")

let guestScoreEl = document.getElementById("guest-score")
let homeScoreEl = document.getElementById("home-score")

let guestScore = 0
let homeScore = 0


function addHome1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHome2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHome3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addGuest1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuest2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuest3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}






// function addOne() {
//     countEl.textContent = count
//     console.log(countEl.textContent)
// }
// addOne()