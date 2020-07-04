const closeModal = document.querySelector('.modal__close-button'),
      modal = document.querySelector('.modal'),
      profileEdit = document.querySelector('.profile__edit-button'),
      profileName = document.querySelector('.profile__name'),
      profileJob = document.querySelector('.profile__job'),
      formNameEdit = document.querySelector('.form__input_type_name'),
      formJobEdit = document.querySelector('.form__input_type_job'),
      form = document.querySelector('.form');


function ToggleModal() {
   modal.classList.toggle('modal_type_open');
   formNameEdit.value=profileName.textContent;
   formJobEdit.value=profileJob.textContent;
}

closeModal.addEventListener('click', ToggleModal);
profileEdit.addEventListener('click', ToggleModal);

form.addEventListener('submit', function(event) {
   event.preventDefault();
   profileName.textContent=formNameEdit.value;
   profileJob.textContent=formJobEdit.value;
   ToggleModal();
}
);