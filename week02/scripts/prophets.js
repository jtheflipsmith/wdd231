const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error(error.message);
    }
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img")

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", 200)
        portrait.setAttribute("height", "auto")

        card.appendChild(fullName);
        card.appendChild(portrait)

        document.querySelector("#cards").appendChild(card)
    })
}

getProphetData()