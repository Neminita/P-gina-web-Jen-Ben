console.log('👾');

document.addEventListener('DOMContentLoaded', () => {
const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const iconOutput = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('#locationInput'); 
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
const cities = document.querySelectorAll('.city'); 

let cityInput = "Valparaiso";

cities.forEach((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        app.style.opacity = "0";
    });
});

form.addEventListener('submit', (e) => {
    if (search.value.length === 0) { 
        alert('Por favor, ingrese un nombre de ciudad');
    } else {
        search.value = ""; 
        fetchWeatherData();
        app.style.opacity = "0";
    }
    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles", 
        "Jueves",
        "Viernes",
        "Sábado" 
    ];
    return weekday[new Date(`${year}-${month}-${day}`).getDay()]; 
}

function fetchWeatherData() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2001c89d876e4893bef71836241305&q=${cityInput}`) 
        .then(response => response.json())
        .then(data => {
            console.log(data);
            temp.innerHTML = data.current.temp_c + "&#176;";
            conditionOutput.innerHTML = data.current.condition.text;
            const date = data.location.localtime.split(' ')[0]; 
            const [year, month, day] = date.split('-'); 
            const time = data.location.localtime.split(' ')[1]; 
            dateOutput.innerHTML = `${dayOfTheWeek(day, month, year)} ${day}, ${month}, ${year}`; 
            timeOutput.innerHTML = time;
            nameOutput.innerHTML = data.location.name;
            const iconId = data.current.condition.icon.split('/').pop(); 
            iconOutput.src = `./icons/${iconId}`;
            cloudOutput.innerHTML = data.current.cloud + "%";
            humidityOutput.innerHTML = data.current.humidity + "%";
            windOutput.innerHTML = data.current.wind_kph + "km/h"; 
            let timeOfDay = "day";
            const code = data.current.condition.code;
            if (!data.current.is_day) {
                timeOfDay = "night";
            }
            if (code == 1000) {
                app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
                btn.style.background = "#e5ba92";
                if (timeOfDay == "night") {
                    btn.style.background = "#181e27";
                }
            } else if (
                [1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282].includes(code)
            ) {
                app.style.backgroundImage = `url(./images/${timeOfDay}/cloudy.jpg)`;
                btn.style.background = "#fa6d1b";
                if (timeOfDay == "night") {
                    btn.style.background = "#181e27";
                }
            } else if (
                [1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1240, 1243, 1246, 1249, 1252].includes(code)
            ) {
                app.style.backgroundImage = `url(./images/${timeOfDay}/rainy.jpg)`;
                btn.style.background = "#647d75";
                if (timeOfDay == "night") {
                    btn.style.background = "#325c80";
                }
            } else {
                app.style.backgroundImage = `url(./images/${timeOfDay}/snowy.jpg)`;
                btn.style.background = "#4d72aa";
                if (timeOfDay == "night") {
                    btn.style.background = "#1b1b1b";
                }
            }
            app.style.opacity = "1";
        })
        .catch(() => {
            alert('Ciudad no encontrada, intente de nuevo');
            app.style.opacity = "1";
        });
}

fetchWeatherData(); 
app.style.opacity = "1"; });