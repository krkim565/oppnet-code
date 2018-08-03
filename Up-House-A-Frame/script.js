var thebox = document.querySelector('#box')
var balloons = document.querySelector('#houseBalloons')
//var pos1 = Math.floor(Math.random())


thebox.addEventListener("click", e =>{
    console.log("balloons")
    balloons.innerHTML += `<a-sphere color="pink" id="box" position="6 10 -10"></a-sphere>`
})