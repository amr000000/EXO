let span = document.querySelector("span")
let nav = document.querySelector("nav")
let closeNav = document.getElementById("close")
span.addEventListener("click" , function(){
    nav.style.display = "block"
})
closeNav.onclick = function(){
    nav.style.display = "none"
}
let title = document.querySelector(".title")
let squares = []
let turn = "X"
function game(id){
    let element = document.getElementById(id)
    if(turn === "X" && element.innerHTML == ""){
        element.innerHTML = "X";
        turn = "O";
        title.innerHTML = "O TURN"
    } else {
        element.innerHTML = "O";
        turn = "X";
        title.innerHTML = "X TURN"
    }
    winner()
}
function end( n1 , n2 , n3){
    title.innerHTML = `${squares[n1]} WON`
    document.getElementById("it" + n1).style.backgroundColor = "darkgrey";
    document.getElementById("it" + n2).style.backgroundColor = "darkgrey";
    document.getElementById("it" + n3).style.backgroundColor = "darkgrey";
    setInterval(() =>{
        title.innerHTML += "(:"
    }, 1000);
    setTimeout(() => {
        window.location.reload()
    }, 3000);
}
function winner(){
    for(let i = 1 ; i < 10 ; i++){
        squares[i] = document.getElementById("it" + i).innerHTML
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ""){
        end(1,2,3)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[6] != ""){
        end(4,5,6)
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[9] != ""){
        end(7,8,9)
    }
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[7] != ""){
        end(1,4,7)
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[8] != ""){
        end(2,5,8)
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[9] != ""){
        end(3,6,9)
    }
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[9] != ""){
        end(1,5,9)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] != ""){
        end(3,5,7)
    }
    else if(!squares.includes("")){
        title.innerHTML="GAME OVER"
        setInterval(() =>{
            title.innerHTML += "(:"
        }, 1000);
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }
}