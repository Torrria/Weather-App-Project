function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  //let precipiationElement = document.querySelector("#precipiation");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  //precipiationElement.innerHTML
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "7e52f346f8643505a8a4ef23b47645a8";
let apiUrl = `api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
