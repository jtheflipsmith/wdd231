// isolate data file into a variable
const file = 'data/workout-list.json';
// pull div class="cards" into a variable to manipulate in javascript
const cards = document.querySelector(".cards");
// fetch data using an async function
async function getWorkoutData() {
    // fetch file and await response
    const response = await fetch(file);
    const data = await response.json();
    //check data transfer using console once checked you can comment out or get rid of it
    console.table(data.workouts);
    workoutCards(data.workouts);
}

const workoutCards = (workouts) => {
    workouts.forEach(workout => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const type = document.createElement("p");
        const subtype = document.createElement("p");
        const focus = document.createElement("p");
        const sets = document.createElement("p");
        const reps = document.createElement("p");
        const details = document.createElement("p");
        const weight = document.createElement("p");
        
        name.textContent = workout.name;
        type.innerHTML = `Type: ${workout.type}`;
        subtype.innerHTML = `Subtype: ${workout.subtype}`;
        focus.innerHTML = `Focus: ${workout.focus}`;
        sets.innerHTML = `Sets: ${workout.sets}`;
        reps.innerHTML = `Reps: ${workout.reps}`;
        details.innerHTML = `Details: ${workout.details}`;
        weight.innerHTML = `Weight: ${workout.weight}`;

        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(subtype);
        card.appendChild(focus);
        card.appendChild(sets);
        card.appendChild(reps);
        card.appendChild(details);
        card.appendChild(weight);
        
        cards.appendChild(card);
    });
}



// Always reference the function or else it won't do anything.
getWorkoutData();
