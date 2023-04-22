import {APIkey} from "./key.js";

let cityName = document.getElementsByTagName("input")[0];
cityName.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
    console.log(cityName.value);
    const city = cityName.value;
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    )
    .then((response) => response.json())
    .then((json) => {
        document.write(`img : ${json.weather[0].main} <br>`);
        document.write(`description : ${json.weather[0].description} <br>`);
        document.write(`wind speed : ${json.wind.speed}m/s <br>`);
        document.write(`mintemperature : ${json.main.temp_min}°C, mintemperature : ${json.main.temp_max}°C<br>`);
        document.write(`humidity : ${json.main.humidity}% <br>`);
    })
    .catch(() => {
        document.write("비상비상비상");
    });
}
});