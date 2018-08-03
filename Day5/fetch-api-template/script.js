// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
var button = document.querySelector("#mainButton");
var wrapper = document.querySelector("#wrapper");
var input = document.querySelector("#input");


button.addEventListener("click", e => {
  var search = input.value
  sendApiRequest(search);
})



// --------------Defining functions ------------------
// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
function sendApiRequest(value) {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=W7xf8ritoSTQRmt89KKUWgC5x43LZzyW&q="+value)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      console.log(json);
      // Pass the JSON on to the next function.
      var myURL = getImageURLfrom(json);
      addImageToScreen(myURL);
    });
};

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getImageURLfrom(myJSON) {
  var randomNumber = Math.floor(Math.random()*25)
  var URL = myJSON.data[randomNumber].images.original.url
  
  return URL
};

// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  wrapper.innerHTML = `<img src="${myURL}">`
};

// Playtime challenges:
// Find something / someone else (rewrite the endpoint so that we aren't searching for Ryan Gosling)
// Instead of getting the first image, get a random image from the JSON results
// REPLACE the contents of the wrapper instead of adding onto them
// Make all your images the same height so that they line up nicely
