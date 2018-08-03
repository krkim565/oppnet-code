// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
var button = document.querySelector("#mainButton");
var wrapper = document.querySelector("#wrapper");
var input = document.querySelector("#input");
var brand_select = document.querySelector("#brand")
var product_type = document.querySelector("#product_type")
var display = document.querySelector('#display')

button.addEventListener("click", e => {
 // var search = input.value
 var search = brand_select.value
 var search2 = product_type.value
  sendApiRequest(search, search2);
})

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
function sendApiRequest(value, value2) {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand="+value+"&product_type="+value2)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      // Pass the JSON on to the next function.
      displayContent(json)
    });
};

function displayContent(json){
    display.innerHTML = ''
    json.forEach( product => {
        var name = product.name
        var price = product.price
        var image = product.api_featured_image
        
        var html = `
            <div class="product">
                <h1>${name}</h1>
                <img src="${image}"> 
                <h3>${price}</h3>
            </div>
        `
        
        display.innerHTML+=html
    })
}

