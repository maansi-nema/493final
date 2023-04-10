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

function createModifyListener(medCard) {
    return function (event) {
        event.preventDefault();
        updateMedCard(medCard);
        medForm.removeEventListener("submit", modifySubmit);
        medForm.addEventListener("submit", submitMedForm);
    };
}

medForm.addEventListener("submit", function submitMedForm(event) {
    event.preventDefault();
    const medCard = document.createElement("div");
<<<<<<< HEAD
    medCard.innerHTML = `
        <h2>${medName}</h2>
        <p>Type: ${medType}</p>
        <p>Time: ${medTime}</p>
        <p>Frequency: ${medFrequency}</p>
        <button class="delete-button">Delete</button>
    `;
=======

    updateMedCard(medCard);
    
    medCard.querySelector(".delete-btn").addEventListener("click", () => {
        medCard.remove();
    });

    const modifySubmit = createModifyListener(medCard);
    medCard.querySelector(".modify-btn").addEventListener("click", () => {
        document.getElementById("med-name").value = medCard.querySelector("h2").textContent;

        medTypeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === medCard.querySelector("p:nth-child(2)").textContent.split(": ")[1]) {
                button.classList.add("selected");
            }
        });

        medTimeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === medCard.querySelector("p:nth-child(3)").textContent.split(": ")[1]) {
                button.classList.add("selected");
            }
        });

        medCard.querySelector("p:nth-child(4)").textContent.split(": ")[1].split(", ").forEach(day => {
            medFrequencyButtons.forEach((button) => {
                if (button.textContent === day) {
                    button.classList.add("selected");
                }
            });
        });

        addMedForm.style.display = "block";
        medForm.removeEventListener("submit", submitMedForm);
        medForm.addEventListener("submit", modifySubmit);
    });
>>>>>>> bd6b4bab0352a78cc088ae0da9c7c31c7ef2fc43

    medCard.querySelector(".delete-button").addEventListener("click", () => {
        medCard.remove();
    });

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
<<<<<<< HEAD
=======

function updateMedCard(medCard) {
    const medName = document.getElementById("med-name").value;
    const medType = document.querySelector("#med-type .selected").textContent;
    const medTime = document.querySelector("#med-time .selected").textContent;
    const medFrequency = Array.from(document.querySelectorAll("#med-frequency .selected")).map(btn => btn.textContent).join(', ');

    medCard.innerHTML = `
        <h2>${medName}</h2>
        <p>Type: ${medType}</p>
        <p>Time: ${medTime}</p>
        <p>Frequency: ${medFrequency}</p>
        <button class="delete-btn">Delete</button>
        <button class="modify-btn">Modify</button>
    `;

    medCard.querySelector(".delete-btn").addEventListener("click", () => {
        medCard.remove();
    });

    medCard.querySelector(".modify-btn").addEventListener("click", () => {
        document.getElementById("med-name").value = medName;

        medTypeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === medType) {
                button.classList.add("selected");
            }
        });

        medTimeButtons.forEach((button) => {
            button.classList.remove("selected");
            if (button.textContent === medTime) {
                button.classList.add("selected");
            }
        });

        medFrequency.split(', ').forEach(day => {
            medFrequencyButtons.forEach((button) => {
                if (button.textContent === day) {
                    button.classList.add("selected");
                }
            });
        });

        addMedForm.style.display = "block";
        medForm.removeEventListener("submit", submitMedForm);

        medForm.addEventListener("submit", function updateSubmit(e) {
            e.preventDefault();
            updateMedCard(medCard);
            medForm.removeEventListener("submit", updateSubmit); 
            medForm.addEventListener("submit", submitMedForm); 
        });
    });

    addMedForm.style.display = "none";
}
>>>>>>> bd6b4bab0352a78cc088ae0da9c7c31c7ef2fc43
