// console.log("I am linked with to the html file")
// var taco1 = document.querySelector("#taco1")
// var taco2 = document.querySelector("#taco2")
// var taco3 = document.querySelector("#taco3")
// var taco4 = document.querySelector("#taco4")
// var taco5 = document.querySelector("#taco5")
// var taco6 = document.querySelector("#taco6")
// var taco7 = document.querySelector("#taco6")

taco1.addEventListener("click", e=>{
    console.log("First Taco is Clicked!")
    if(taco1.classList.contains("active")){
        taco1.classList.remove("active")
    }else{
        taco1.classList.add("active")
    }
})

// taco2.addEventListener("click", e=>{
//     console.log("Second Taco is Clicked!")
//     if(taco2.classList.contains("active")){
//         taco2.classList.remove("active")
//     }else{
//         taco2.classList.add("active")
//     }
// })
// taco3.addEventListener("click", e=>{
//     console.log("Third Taco is Clicked!")
//     if(taco3.classList.contains("active")){
//         taco3.classList.remove("active")
//     }else{
//         taco3.classList.add("active")
//     }
    
// })
var allDaTacos = document.querySelectorAll('.taco')
allDaTacos.forEach( taco =>{
    taco.addEventListener('click', e =>{
        taco.classList.toggle('active')
    })
})
