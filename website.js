const dashboard = document.getElementById("dashboard");
const addMedicationButton = document.getElementById("add-medication");
const addMedForm = document.getElementById("add-med-form");
const medForm = document.getElementById("med-form");

addMedicationButton.addEventListener("click", () => {
    addMedForm.style.display = "block";
});

window.addEventListener("click", (event) => {
    if (event.target === addMedForm) {
        addMedForm.style.display = "none";
    }
});

medForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const medName = document.getElementById("med-name").value;
    const medType = document.querySelector("#med-type .selected").textContent;
    const medTime = document.querySelector("#med-time .selected").textContent;
    const medFrequency = Array.from(document.querySelectorAll("#med-frequency .selected")).map(btn => btn.textContent).join(', ');

    const medCard = document.createElement("div");
    medCard.innerHTML = `
        <h2>${medName}</h2>
        <p>Type: ${medType}</p>
        <p>Time: ${medTime}</p>
        <p>Frequency: ${medFrequency}</p>
    `;

    dashboard.appendChild(medCard);

    addMedForm.style.display = "none";
});

const medTypeButtons = document.querySelectorAll("#med-type .type-option");
const medTimeButtons = document.querySelectorAll("#med-time .time-option");
const medFrequencyButtons = document.querySelectorAll("#med-frequency .freq-option");

medTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        medTypeButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});

medTimeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        medTimeButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});

medFrequencyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
});