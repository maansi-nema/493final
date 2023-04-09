document.addEventListener('DOMContentLoaded', function () {
  const addMedicationButton = document.getElementById('add-medication');
  const addMedForm = document.getElementById('add-med-form');
  const medForm = document.getElementById('med-form');
  const dashboard = document.getElementById('dashboard');

  function createMedicationElement(name, time, dosage, frequency) {
      const medElement = document.createElement('div');
      medElement.innerHTML = `
          <h2>${name}</h2>
          <p>Time: ${time}</p>
          <p>Dosage: ${dosage}</p>
          <p>Frequency: ${frequency}</p>
      `;
      medElement.style.border = '1px solid #ccc';
      medElement.style.padding = '1rem';
      medElement.style.borderRadius = '5px';
      return medElement;
  }

  function addMedicationToDashboard(name, time, dosage, frequency) {
      const medElement = createMedicationElement(name, time, dosage, frequency);
      dashboard.appendChild(medElement);
  }

  addMedicationButton.addEventListener('click', function () {
      addMedForm.style.display = 'block';
  });

  addMedForm.addEventListener('click', function (event) {
      if (event.target === addMedForm) {
          addMedForm.style.display = 'none';
      }
  });

  medForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const name = document.getElementById('med-name').value;
      const time = document.getElementById('med-time').value;
      const dosage = document.getElementById('med-dosage').value;
      const frequency = document.getElementById('med-frequency').value;

      addMedicationToDashboard(name, time, dosage, frequency);

      medForm.reset();
      addMedForm.style.display = 'none';
  });
});
