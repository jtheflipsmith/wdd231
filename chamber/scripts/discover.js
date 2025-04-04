// --------- NAV ---------

// Create variable to target button that will be pressed to open menu links
const hamButton = document.querySelector("#hamButton");
// Create variable to target menu links for manipulation.
const navElement = document.querySelector("#animateMe");

// create an event listener for the button that will open and close menu links
hamButton.addEventListener('click', () => {
    navElement.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// isolate data file into a variable
const file = 'data/places.json';
// pull div class="cards" into a variable to manipulate in javascript
const cards = document.querySelector(".cards");
// fetch data using an async function
async function getPlaceData() {
    // fetch file and await response
    const response = await fetch(file);
    const data = await response.json();
    //check data transfer using console once checked you can comment out or get rid of it
    //console.table(data.places);
    placeCards(data.places);
}


// create cards of each place
const placeCards = (places) => 
    places.forEach(place => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("address");
        const about = document.createElement("p");
        const image = document.createElement("figure");
        const button = document.createElement("button");
        
        name.textContent = place.name;
        address.innerHTML = `${place.address}`;
        about.innerHTML = place.description;
        image.innerHTML = `<img src="${place.image}" alt="image of ${place.name}" loading="lazy">`
        button.textContent = "Learn More"

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(about);
        card.appendChild(button);



        cards.appendChild(card);

    });

// Always reference the function or else it won't do anything.
getPlaceData();



//  Getting footer data for current date and recent modified

const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
