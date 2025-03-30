// Create variable to target button that will be pressed to open menu links
const hamButton = document.querySelector("#hamButton");
// Create variable to target menu links for manipulation.
const navElement = document.querySelector("#animateMe");

// create an event listener for the button that will open and close menu links
hamButton.addEventListener('click', () => {
    navElement.classList.toggle("open");
    hamButton.classList.toggle("open");
});

//Create dialog boxes for each membership level 
const dialogBox = document.querySelector("#dialogBox");
const openButton1 = document.querySelector("#membershipButton1");
const openButton2 = document.querySelector('#membershipButton2');
const openButton3 = document.querySelector('#membershipButton3');
const openButton4 = document.querySelector('#membershipButton4');
const closeButton = document.querySelector("#closeButton");
const dialogText = document.querySelector("#dialogBox div");

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Non-Profit Membership</h2>
    <p>Perks: Featured in the list and highlighted in a non-profit spotlight once weekly</p>`
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Bronze Membership</h2>
    <p>Perks: Added to directory list</p>`
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Silver Membership</h2>
    <p>Perks: Added to directiory and spotlighted weekly</p>`
});

openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogText.innerHTML = `
    <h2>Gold Membership</h2>
    <p>Perks: Added to directory and spotlighted at least once daily</p>`
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});

//  ------ FOOTER -----
// --------------- FOOTER ----------------
const year = new Date().getFullYear();
document.querySelector("#currentYear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;