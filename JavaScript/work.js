// Footer //
const yearElement = document.getElementById("current-year");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
yearElement.textContent = currentYear;

// Date on footer//
console.log("Today's Date:", currentDate.toDateString());

// Alert Button //
const alertButton = document.getElementById("btn-alert");

// Alert on click //
alertButton.addEventListener("click", () => {
    alert("Why won't you follow simple instructions?");
});

// Change of text //
alertButton.onmouseover = function () {
    alertButton.innerText = "I said DON'T!";
};
alertButton.onmouseout = function () {
    alertButton.innerText = "Don't Click Me";
};
