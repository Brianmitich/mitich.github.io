
function checkweather()
{
 // get user input
 let city = document.getElementById("city1").value;

 // make API call to OpenWeatherMap
 let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=8e7d03864a017d47c032cfdbd100f2dc";
 fetch(url)
  .then(response => response.json())
  .then(data => {
    // display weather information
    document.getElementById("city").innerHTML = data.name;
    document.getElementById("humidity").innerHTML = data.main.humidity + "%";
    document.getElementById("wind1").innerHTML = data.wind.speed + " km/h";
    document.querySelector("#temp1").innerHTML = Math.round(data.main.temp) + "°C";
if(data.weather[0].main=="Clouds"){
  document.querySelector(".weather-icon").src="imag/cloudy2.jfif";
}
else if(data.weather[0].main=="Rain"){
  document.querySelector(".weather-icon").src="imag/rainy.png";
}
else if(data.weather[0].main=="Drizzle"){
  document.querySelector(".weather-icon").src="imag/storm.png";
}
})
}