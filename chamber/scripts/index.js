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
        let randomTwo = getRandomMembers(data.members, 2)
        memberCards(randomTwo)
}

// Stack OverFlow and ChatGPT helped lead me to Fisher-Yates algorithm, whiched helped in the randomization process.
function getRandomMembers(array, count) {
    let shuffle = arrayShuffle([...array]);
    return shuffle.slice(0, count);
}

// Fisher-Yates shuffle algorithm
function arrayShuffle(array) {
    // create a for loop -- for (let 1 =...) 
    // start from last element and work backwords --> array.length - 1 
    // pick a random index --> let j = Math.floor(Math.random() * (i + 1))
    // Swap array[i] and array[j] --> [array[i], array[j]] = [array[j], array[i]]
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


const memberCards = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("p");
        const image = document.createElement("img");
        const membership = document.createElement("p");
        const info = document.createElement("p");
        
        name.textContent = member.companyName;
        address.innerHTML = `<span class="label">Address: </span>${member.address}`;
        phone.innerHTML = `<span class="label">Phone: </span>${member.phoneNumber}`;
        website.innerHTML = `<a href=${member.websiteURL} target="_blank">${member.companyName} Website</a>`;
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.companyName} Logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "150px");
        membership.innerHTML = `<span class= label">Membership: </span>${member.membership}`;
        info.innerHTML = member.info;

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(info);

        document.querySelector("#cards").appendChild(card);

    });
}

getMemberData()

// --------------- FOOTER ----------------
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;