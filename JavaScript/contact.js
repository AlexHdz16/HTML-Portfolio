// Footer //
const yearElement = document.getElementById("current-year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearElement.textContent = currentYear;

// Date on footer//
console.log("Today's Date:", currentDate.toDateString());
