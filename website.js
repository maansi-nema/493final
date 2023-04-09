document.addEventListener('DOMContentLoaded', function () {
  const addMedicationButton = document.getElementById('add-medication');
  const addMedForm = document.getElementById('add-med-form');
  const medForm = document.getElementById('med-form');

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
      // Add your logic to handle the form submission here

      // Close the modal after submitting the form
      addMedForm.style.display = 'none';
  });
});
