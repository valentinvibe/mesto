const closeModal = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const profileEdit = document.querySelector('.profile__edit-button');


function ToggleModal() {
   modal.classList.toggle('modal_type_open');
}

closeModal.addEventListener('click', ToggleModal);
profileEdit.addEventListener('click', ToggleModal);
