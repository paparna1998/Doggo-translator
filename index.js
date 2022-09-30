let input = document.querySelector("#input");
let output = document.querySelector("#output");
let button = document.querySelector("#btn-translate");
let url = "https://api.funtranslations.com/translate/doge.json";
console.log(input.value);
let convertedUrl = (text) => {
  return url + "?" + "text=" + text;
};

let clickHandler = () => {
  let userInput = input.value;
  fetch(convertedUrl(userInput))
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let interpretedData = data.contents.translated;
      output.innerText = interpretedData;
    })
    .catch(errorHandler);
};
function errorHandler(error) {
  console.log("Error occured - ", error);
  alert("Server Error, Please try again after sometime ^.^");
}

button.addEventListener("click", clickHandler);
