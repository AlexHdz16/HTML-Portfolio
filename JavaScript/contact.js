// Footer //
const yearElement = document.getElementById("current-year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearElement.textContent = currentYear;

// Date on footer//
console.log("Today's Date:", currentDate.toDateString());

// List id element//
const numberList = document.getElementById('numbers');

// For Loop//
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = (i % 2 === 0) ? `Even - ${i}` : `Odd - ${i}`;
    numberList.appendChild(listItem);
}
