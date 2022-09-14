
let apiKey=" aa93cf045af7ef6b96d7f0bf356e88c3"

let apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=New york&appid=$a{apiKey}"


let now = new date ();
let h1 =document.querySelector("h1");
let hours= now.getHours();
let minutes = now.get.Minutes();
let days=[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

let days = days[now.getDay()];
h1.innerHTML= '${day}, ${hours}: ${minutes}';


function citySearch(event) {
  event.preventDefault();
  let apiKey = "aa93cf045af7ef6b96d7f0bf356e88c3";
  let units = "metric";
  let city = document.querySelector("#input-form").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather); 
}


function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#email");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", signUp);



let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);
function displayFahrenheitTemperature(event) {
  event.preventDefault();
  celciusTemp.classList.remove("active");
  fahreneitTemp.classList.add("active");
  let fahrenheitTemperature = (celciusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  celciusTemperature = response.data.main.temp;
}
let fahreneitTemp = document.querySelector("#fahrenheit-temp");
fahreneitTemp.addEventListener("click", displayFahrenheitTemperature);
function displayCelciusTemperature(event) {
  event.preventDefault();
  celciusTemp.classList.remove("active");
  fahreneitTemp.classList.add("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celciusTemperature);
}
let celciusTemperature = null;
let celciusTemp = document.querySelector("#celcius-temp");
celciusTemp.addEventListener("click", displayCelciusTemperature);



