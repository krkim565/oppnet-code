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