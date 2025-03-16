// ------ HAMBURGER BUTTON AND NAVIGATION ------
// Storing navigation components (li and button)
const mainNav = document.querySelector("#animateMe");
const dropButton = document.querySelector("#dropbtn");
const cseClasses = document.querySelector("#cse")

// Drop button animation 
function hamburgerButton(x) {
    x.classList.toggle("change");
}

// Adding click event listener to toggle show
dropButton.addEventListener("click", () => {
    mainNav.classList.toggle("open")
});



// ------ WEB AND COMPUTERE PROGRAMMING CARDS ------

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

cseClasses.addEventListener("click", () => {
    let cseButton = courses.filter(course => !course.subject("WDD"));
    courseCards(cseButton);
})

courseCards(courses);

function courseCards(filteredClasses) {
    document.querySelector(".cards").innerHTML = "";
    filteredClasses.forEach(course => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let title = document.createElement("p");
        let credit = document.createElement("p");
        let certificate = document.createElement("p")
        let description = document.createElement("p")
        let technology = document.createElement("p")

        name.textContent = `${course.subject} ${course.number}`;
        title.textContent = `${course.title}`
        credit.textContent = `Credits: ${course.credits}`
        certificate.textContent = `${course.certificate}`

        let complete = course.completed;
        let subject = course.subject;

        if (complete === true) {
            card.classList.add("highlight");
        }

        card.appendChild(name);
        card.appendChild(title);
        card.appendChild(credit)

        document.querySelector(".cards").appendChild(card);

    });
}





// ------ FOOTER --------

const year = new Date().getFullYear();
document.querySelector("#currentyear").textContent = year;

const modified = new Date().getDate();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`