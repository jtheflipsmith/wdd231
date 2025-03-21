// ------------ WEATHER ------------
const currentTemp = document.querySelector("#current-temp");
const wIcon = document.querySelector("#weather-icon")
const caption = document.querySelector("figcaption")
const myLat = 53.54329413574091
const myLon = -113.49774208116924
const myAPI = "1daaaf53a95cb97560ba5be78bb03651"
// API
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLon}&units=metric&appid=${myAPI}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myAPI}`

// CURRENT WEATHER

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data)
        } else {
           throw Error(await response.text());
        }
        
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    wIcon.setAttribute('SRC', iconURL)
    wIcon.setAttribute('alt', desc);
    caption.textContent = desc;
}

// FORECAST

async function forecastFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok){
            const forecastdata = await response.json();
            console.log(forecastdata);
            displayForecast(forecastdata)
        } else {
           throw Error(await response.text());
        }
        
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(forecastdata){
    const card = document.createElement("section");

}

apiFetch();
forecastFetch();

// ------------ HIGHLIGHTS ---------------
const file = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {

        const response = await fetch(file);
        const data = await response.json();
        //console.table(data.members);
        memberCards(data.members)
}

const memberCards = (members => {
    
})

// --------------- FOOTER ----------------
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;