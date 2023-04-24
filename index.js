import {APIkey} from "./key.js";

let cityName = document.getElementsByTagName("input")[0];
cityName.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
    const city = cityName.value;
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
    )
    .then((response) => response.json())
    .then((json) => {
        let weatherCondition=document.querySelector('.popup > img');
        let weatherId=json.weather[0].icon[0]+json.weather[0].icon[1];
        let description=document.querySelector('.description');
        let wind=document.querySelector('.wind>span:last-child');
        let humidity=document.querySelector('.hum>span:last-child');
        let tempMin=document.querySelector('.temp>.min>span:last-child');
        let tempMax=document.querySelector('.temp>.max>span:last-child');
        switch(weatherId){
            case '01':weatherCondition.src="img/clearSky.png"; break;
            case '02': weatherCondition.src='img/clouds.png';break;
            case '03': case '04': weatherCondition.src='img/few-cloud.png';break;
            case '09':case '10': weatherCondition.src='img/rain.png';break;
            case '11': weatherCondition.src='img/thunderstorm.png'; break;
            case '13': weatherCondition.src='img/snow.png'; break;
            case '50': weatherCondition.src='img/mist.png'; break;
            default:break;
        }
        description.innerHTML=`${json.weather[0].description}`;
        wind.innerHTML=`${json.wind.speed}m/s`;
        humidity.innerHTML=`${json.main.humidity}%`;
        tempMin.innerHTML=`${json.main.temp_min}°C`;
        tempMax.innerHTML=`${json.main.temp_max}°C`;
        //document.write(`img : ${json.weather[0].icon} <br>`);
        //document.write(`description : ${json.weather[0].description} <br>`);
        //document.write(`wind speed : ${json.wind.speed}m/s <br>`);
        //document.write(`mintemperature : ${json.main.temp_min}°C, mintemperature : ${json.main.temp_max}°C<br>`);
        //document.write(`humidity : ${json.main.humidity}% <br>`);
    })
    .catch(() => {
        document.write("비상비상비상");
    });
}
});