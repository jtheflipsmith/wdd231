const file = 'data/members.json';

const cards = document.querySelector('#cards');

async function getMemberData() {

        const response = await fetch(file);
        const data = await response.json();
        //console.table(data.members);
        memberCards(data.members)


}

const memberCards = (members) => {
    members.forEach(member => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("p");
        const image = document.createElement("img");
        //const membership = document.createElement("p");
        //const info = document.createElement("p");
        
        name.textContent = member.companyName;
        address.innerHTML = `<span class="label">Address: </span>${member.address}`;
        phone.innerHTML = `<span class="label">Phone: </span>${member.phoneNumber}`;
        website.innerHTML = `<a href=${member.websiteURL} target="_blank">${member.companyName} Website</a>`
        image.setAttribute("src", member.image);
        image.setAttribute("alt", `${member.companyName} Logo`);
        image.setAttribute("loading", "lazy")
        image.setAttribute("width", "150px")
        //membership.innerHTML = `<span class= label">Membership: </span>${member.membership}`;
        //info.innerHTML = member.info;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website)
        card.appendChild(image);
        //card.appendChild(membership)
        //card.appendChild(info)

        document.querySelector("#cards").appendChild(card);

    });    
}

getMemberData();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listButton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});


const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;