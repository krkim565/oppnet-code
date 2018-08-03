// let allbuttons = document.querySelectorAll(".button")


// allbuttons.forEach( button =>{
//     button.addEventListener("click", e => {
//     console.log("pop button clicked!")
//     button.classList.toggle('active')
//     })
// })

var popbutton = document.querySelector("#popbutton")
var target = document.querySelector("#target")
var bigbutton = document.querySelector("#bigbutton")
var fancybutton = document.querySelector("#fancybutton")
var negativebutton = document.querySelector("#negativebutton")
var DIYbutton = document.querySelector("#DIYbutton")
var result = document.querySelector("#result")

popbutton.addEventListener("click", e=>{
    console.log("Pop button clicked!")
    target.classList.toggle('pop')
    
})

target.addEventListener("click", e=>{
    console.log("Radical button clicked!")
    
})
bigbutton.addEventListener("click", e=>{
    console.log("Big button clicked!")
    target.classList.toggle('big')
    
})
fancybutton.addEventListener("click", e=>{
    console.log("Fancy button clicked!")
    target.classList.toggle('fancy')
})
negativebutton.addEventListener("click", e=>{
    console.log("Negative button clicked!")
    target.classList.toggle('negative')
})
DIYbutton.addEventListener("click", e=>{
    console.log("DIY button clicked!")
    result.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGeeia2Wdv9naC7O-1zZb0MyFZ4hyaaDVrN6YJ7nMuv9XCBJK"/>'
    
})

