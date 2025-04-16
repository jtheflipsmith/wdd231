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
const file = 'data/meals.json';
// pull div class="cards" into a variable to manipulate in javascript
const cards = document.querySelector(".cards");
// fetch data using an async function
async function getMealData() {
    // fetch file and await response
    const response = await fetch(file);
    const data = await response.json();
    //check data transfer using console once checked you can comment out or get rid of it
    console.table(data.meals);
    mealCards(data.meals);
}

//Create dialog boxes for each membership level 
const dialogBox = document.querySelector("#dialogBox");
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");
const dialogText = document.querySelector("#dialogBox div");

const mealCards = (meals) => {
    meals.forEach(meal => {
        let ingredientList = '<ul>';
        meal.ingredients.forEach(ingredient => {
            ingredientList += `<li>${ingredient}</li>`;
        });
        ingredientList += '</ul>';

        const card = document.createElement("section");

        const image = document.createElement("figure");

        image.innerHTML = `<img src="${meal.image}" alt="image of ${meal.name}" loading="lazy">`
        image.addEventListener('click', () => {
            dialogBox.showModal();
            dialogText.innerHTML = `
            <h2>${meal.name}</h2>
            <p>Ingredients: ${meal.ingredientList}</p>
            <p>Instructions: ${meal.directions}</p>
            <p>Calories: ${meal.average_calories}</p>
            <p>Cost: ${meal.cost}</p>`
        });
        closeButton.addEventListener('click', () => {
            dialogBox.close();
        })
        card.appendChild(image);
        cards.appendChild(card);
    });
}



// Always reference the function or else it won't do anything.
getMealData();