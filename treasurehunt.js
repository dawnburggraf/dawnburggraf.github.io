var counter = 3
var winningIceCream= Math.ceil(Math.random()*9)
var losingChili= Math.ceil(Math.random()*9)


    if (winningIceCream === losingChili){
        losingChili= Math.ceil(Math.random()*9)
    }

function tableClick(location){


    if (location === winningIceCream){
        document.getElementById("gameOver").innerHTML="🍦YUMMY YUMMY"
        document.getElementById("gameBoard").innerHTML=""
    } else if(location === losingChili){
        document.getElementById("gameOver").innerHTML="🌶YOU LOSE!"
        document.getElementById("gameBoard").innerHTML=""
    } else {
        document.getElementById(location).innerHTML="👅"
        counter -=1
        if (counter > 0) {
            document.getElementById("turns").innerHTML= counter
        }
        else if (counter === 0) {
            document.getElementById("gameBoard").innerHTML=""
            document.getElementById("turns").innerHTML= counter
        }
    }
}
