/* store variables */
/* note: i don't understand the btn code control f "btn" */
const dashboard = document.getElementById("the-pill-dashboard");
const addMedicationButton = document.getElementById("add-medication");
const addMedicationCard = document.getElementById("add-a-medication-form");
const theMedicationCard = document.getElementById("the-medication-form");

/* add event listeners */

/* when medication button is clicked, the medication form is displayed */
addMedicationButton.addEventListener("click", () => {
    addMedicationCard.style.display = "block";
});

/* when medication button is not clicked, the medication form is not displayed */
window.addEventListener("click", (event) => {
    if (event.target === addMedicationCard) {
        addMedicationCard.style.display = "none";
    }
});

/* when the form is submitted, the medication card is created */
function createModifyListener(medicationCard) {
    return function (event) {
        event.preventDefault();
        updateMedicationCard(medicationCard);
        theMedicationCard.removeEventListener("submit", modifySubmit);
        theMedicationCard.addEventListener("submit", submitMedicationForm);
    };
}

/* new medication card */
theMedicationCard.addEventListener("submit", function submitMedicationForm(event) {
    event.preventDefault();
    const medicationCard = document.createElement("div");

    updateMedicationCard(medicationCard);
    
    /* delete the medication card */
    medicationCard.querySelector(".remove-medications").addEventListener("click", () => {
      medicationCard.remove();
    });
    
    /* modify the medication card */
    const modifySubmit = createModifyListener(medicationCard);
    medicationCard.querySelector(".modify-medications").addEventListener("click", () => {
        document.getElementById("name-of-medication").value = medicationCard.querySelector("h2").textContent;

        medicationTypeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === medicationCard.querySelector("p:nth-child(2)").textContent.split(": ")[1]) {
                button.classList.add("selected");
            }
        });

        medicationTimeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === medicationCard.querySelector("p:nth-child(3)").textContent.split(": ")[1]) {
                button.classList.add("selected");
            }
        });

        medicationCard.querySelector("p:nth-child(4)").textContent.split(": ")[1].split(", ").forEach(day => {
            medicationFrequencyButtons.forEach((button) => {
                if (button.textContent === day) {
                    button.classList.add("selected");
                }
            });
        });
        /* display form */
        addMedicationCard.style.display = "block";
        theMedicationCard.removeEventListener("submit", submitMedicationForm);
        theMedicationCard.addEventListener("submit", modifySubmit);
    });

    /* add medication to dashboard */
    dashboard.appendChild(medicationCard);
    
    /* hide form */
    addMedicationCard.style.display = "none";
});

const medicationTypeButtons = document.querySelectorAll("#type-of-medication .type-option");
const medicationTimeButtons = document.querySelectorAll("#time-to-take-medication .time-option");
const medicationFrequencyButtons = document.querySelectorAll("#day-to-take-medication .day-option");

/* add event listener for selecting type */
medicationTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        medicationTypeButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});
/* add event listener for selecting time */
medicationTimeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        medicationTimeButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});
/* add event listener for selecting freq*/
medicationFrequencyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("selected");
    });
});
/* update medication card with current selections */
function updateMedicationCard(medicationCard) {
    const theMedicationName = document.getElementById("name-of-medication").value;
    const whatTypeOfMedication = document.querySelector("#type-of-medication .selected").textContent;
    const whatTimeToTakeMedication = document.querySelector("#time-to-take-medication .selected").textContent;
    const whatDayToTakeMedication = Array.from(document.querySelectorAll("#day-to-take-medication .selected")).map(btn => btn.textContent).join(', ');
    // vandan's changes 
    const pillPurpose = document.getElementById("pill-purpose").value;
    const pillSideEffects = document.getElementById("pill-side-effects").value;
    const pillPrecautions = document.getElementById("pill-precautions").value;
    medicationCard.innerHTML = `
        <h2>${theMedicationName}</h2>
        <p>Type: ${whatTypeOfMedication}</p>
        <p>Time: ${whatTimeToTakeMedication}</p>
        <p>Frequency: ${whatDayToTakeMedication}</p>
        <p>Purpose: ${pillPurpose}</p>
        <p>Side Effects: ${pillSideEffects}</p>
        <p>Precautions: ${pillPrecautions}</p>
        <button class="remove-medications">Delete</button>
        <button class="modify-medications">Modify</button>
    `;

    medicationCard.querySelector(".remove-medications").addEventListener("click", () => {
      medicationCard.remove();
    });

    /* add event listener for delete and modify buttons */
    medicationCard.querySelector(".modify-medications").addEventListener("click", () => {
        document.getElementById("name-of-medication").value = theMedicationName;

        medicationTypeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === whatTypeOfMedication) {
                button.classList.add("selected");
            }
        });

        medicationTimeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === whatTimeToTakeMedication) {
                button.classList.add("selected");
            }
        });

        whatDayToTakeMedication.split(', ').forEach(day => {
            medicationFrequencyButtons.forEach((button) => {
                if (button.textContent === day) {
                    button.classList.add("selected");
                }
            });
        });

        addMedicationCard.style.display = "block";
        theMedicationCard.removeEventListener("submit", submitMedicationForm);

        theMedicationCard.addEventListener("submit", function updateSubmit(e) {
            e.preventDefault();
            updateMedicationCard(medicationCard);
            theMedicationCard.removeEventListener("submit", updateSubmit); 
            theMedicationCard.addEventListener("submit", submitMedicationForm); 
        });
    });

    addMedicationCard.style.display = "none";
}