const currentTemp = document.querySelector("#current-temp");
const wIcon = document.querySelector("#weather-icon")
const caption = document.querySelector("figcaption")

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.748490975230546&lon=6.642583822265244&units=imperial&appid=1daaaf53a95cb97560ba5be78bb03651';

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
    currentTemp.innerHTML = `${data.main.temp}&deg;C`
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    wIcon.setAttribute('SRC', iconURL)
    wIcon.setAttribute('alt', desc);
    caption.textContent = desc;



}

apiFetch();


