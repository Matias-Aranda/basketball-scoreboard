let home = document.getElementById("home-points")
let guest = document.getElementById("guest-points")

function addPoints(team, num){
    let count = Number(team.textContent) 
    count += num 
    team.textContent = count    
}

function reset() {
    home.textContent = 0
    guest.textContent = 0
}

function checkLeader() {
    if (Number(home.textContent) > Number(guest.textContent)) {
        document.getElementById("home-crown").textContent = "👑"
        document.getElementById("guest-crown").textContent = ""
    } else if (Number(home.textContent) < Number(guest.textContent)) {
        document.getElementById("home-crown").textContent = ""
        document.getElementById("guest-crown").textContent = "👑"
    } else {
        document.getElementById("home-crown").textContent = ""
        document.getElementById("guest-crown").textContent = ""
    }
}