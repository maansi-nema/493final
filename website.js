const addMedicationButton = document.querySelector('.add-medication-button');
const addMedicationModal = document.querySelector('.add-medication-modal');
const closeMedicationModalButton = document.querySelector('.close-modal-button');
const tagsContainer = document.querySelector('.tags-container');

addMedicationButton.addEventListener('click', () => {
  addMedicationModal.style.display = 'block';
});

closeMedicationModalButton.addEventListener('click', () => {
  addMedicationModal.style.display = 'none';
});

tagsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('tag')) {
    event.target.classList.toggle('tag-selected');
  }
});

