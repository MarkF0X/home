// import {saveDefaultCity} from './LocalSaver.js';
// import {getForecast} from "./forecast";

function saveDefaultCity(cityName) {
    localStorage.setItem('defaultCity', cityName);
    const target = document.getElementById('cityName');
    target.setAttribute('value', cityName);
}
async function getMainCityInf(cityName) {
    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '305a0d4b0f32e7ec248cac16dabc5ec8';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    // fetch(url)
    //     .then((response) => {
    //         if (response.ok) {
    //             const json = response.json()
    //                 .then(() => {
    //                     gotNowWeather(cityName, json);
    //                     gotDetails(cityName, json);
    //                 })
    //                 .catch((err) => {
    //                     alert(`Ты инвалид`)
    //                 });
    //         } else {
    //             alert(`${cityName} не нашёлся...`);
    //         }
    //     })
    //     .catch((err) => {
    //         alert(`Ошибка HTTP: ${err.toString()}`);
    //     });
    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            gotNowWeather(cityName, json);
            gotDetails(cityName, json);
            getForecast();
            saveDefaultCity(cityName);
        } else {
            alert(`${cityName} не нашёлся...`);
        }
    } catch (err) {
        alert(`Ошибка HTTP: ${err.toString()}`);
    }
}


function gotNowWeather(cityName, json) {
    const Temperature = document.getElementById('nowTemperature');
    Temperature.innerHTML = `<h1>${temperatureConverter(json.main.temp)}°</h1>`;

    const Weather = document.getElementById('nowWeather');
    const picCode = json.weather[0].icon;
    Weather.innerHTML = `<img src=https://openweathermap.org/img/wn/${picCode}@4x.png>`;
    // Weather.innerHTML = `${json.weather[0].main}`;

    const city = document.getElementById('nowCity');
    city.innerHTML = `${cityName}`;
}

function gotDetails(cityName, json) {
   const target = document.getElementById('Details');
   const sunriseTime = new Date(json.sys.sunrise * 1000);
   const sunsetTime = new Date(json.sys.sunset * 1000);
   target.innerHTML = `
        <h3>${cityName}</h3>
        <p>Temperature: ${temperatureConverter(json.main.temp)}°</p>
        <p>Fells like: ${temperatureConverter(json.main.feels_like)}°</p>
        <p>Weather: ${json.weather[0].main}</p>
        <p>Sunrise: ${sunriseTime.getHours()}:${sunriseTime.getMinutes()}</p>
        <p>Sunset: ${sunsetTime.getHours()}:${sunsetTime.getMinutes()}</p>`
}

function temperatureConverter(celvinTemperature) {
    const actualTemperature = celvinTemperature - 273;
    return actualTemperature.toFixed(0);
}

const defaultSaveCity = localStorage.getItem('defaultCity');
if (!defaultSaveCity) {
    localStorage.setItem('defaultCity', 'Moscow');
}
getMainCityInf(localStorage.getItem('defaultCity'));

async function getForecast() {
    const cityName = document.getElementById('nowCity').innerText;
    const serverUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const apiKey = '305a0d4b0f32e7ec248cac16dabc5ec8';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const json = await response.json();
            console.log(json);
            createForecastList(json);
        } else {
            alert(`${cityName} не нашёлся...`);
        }
    } catch (err) {
        alert(`Ошибка HTTP: ${err.toString()}`);
    }
}

function createForecastList(json) {
    const mother = document.getElementById('Forecast');
    mother.innerHTML = `<h3>${document.getElementById('cityName').value}</h3>`;
    const forecastList = json.list.map(elem => {
        const date = new Date(elem.dt * 1000);
        const picCode = elem.weather[0].icon;
        const forecastTab = document.createElement('div');
        forecastTab.insertAdjacentHTML('afterbegin', `
            <div class="wrap justify-between">
                <div class="max-available" >
                    <div>${date.getDate()} ${mounth[date.getMonth()]}</div>
                    <div>Temperature: ${temperatureConverter(elem.main.temp)}°</div>
                    <div>Feels like: ${temperatureConverter(elem.main.feels_like)}°</div>
                </div>
                <img style="width: 50%; height" src=https://openweathermap.org/img/wn/${picCode}@4x.png>
                <div>
                    <div>${date.getHours()}:${date.getMinutes().toString().padStart(2,'0')}</div>
                </div>
            </div>
        `);

        return forecastTab;
    })
    forecastList.forEach(elem => {
        const target = document.getElementById('Forecast');
        target.insertAdjacentElement('beforeend', elem);
    })

}

const mounth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']