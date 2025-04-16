// Create variable to target button that will be pressed to open menu links
const hamButton = document.querySelector("#hamButton");
// Create variable to target menu links for manipulation.
const navElement = document.querySelector("#animateMe");

// create an event listener for the button that will open and close menu links
// Sometimes when there is an error that reads addEventListener as null
// the missing defer can be a culprit.
hamButton.addEventListener('click', () => {
    navElement.classList.toggle("open");
    hamButton.classList.toggle("open");
});
