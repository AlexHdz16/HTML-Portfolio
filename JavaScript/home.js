// Greeting before header with time of day//
const greetingDiv = document.getElementById("greeting");
const currentHour = new Date().getHours();

let greetingMessage;
let greetingClass;

if (currentHour < 12) {
    greetingMessage = "Good morning!";
    greetingClass = "morning";
} else if (currentHour < 17) {
    greetingMessage = "Good afternoon!";
    greetingClass = "afternoon";
} else {
    greetingMessage = "Good evening!";
    greetingClass = "evening";
}

greetingDiv.innerText = greetingMessage;
greetingDiv.classList.add(greetingClass);

// Footer //
const yearElement = document.getElementById("current-year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearElement.textContent = currentYear;

// Date on footer//
console.log("Today's Date:", currentDate.toDateString());
