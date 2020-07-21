const 
      // Popup's
      editProfileModal = document.querySelector('.popup_type_edit-profile'),
      addCardModal = document.querySelector('.popup_type_add-card'),

      //Open Popup's
      profileEdit = document.querySelector('.profile__edit-button'),
      createNewCard = document.querySelector('.profile__add-button'),

      profileName = document.querySelector('.profile__name'),
      profileJob = document.querySelector('.profile__job'),

      //Form
      formNameEdit = document.querySelector('.form__input_type_name'),
      formJobEdit = document.querySelector('.form__input_type_job'),
      editProfileForm = document.querySelector('.form_type_edit-profile'),
      addCardForm = document.querySelector('.form_type_add-card'),

      formPlaceEdit = addCardForm.querySelector('.form__input_type_name'),
      formLinkEdit = addCardForm.querySelector('.form__input_type_job'),
      
      // Close Button Popup's
      editProfileModalCloseButton = editProfileModal.querySelector('.popup__close-button'),
      addCardModalCloseButton = addCardModal.querySelector('.popup__close-button'),

      elements = document.querySelector('.elements');


function ToggleModal(ModalWindow) {
   ModalWindow.classList.toggle('popup_type_open');
   formNameEdit.value=profileName.textContent;
   formJobEdit.value=profileJob.textContent;
}

profileEdit.addEventListener('click', () => {
   ToggleModal(editProfileModal)
});

createNewCard.addEventListener('click', () =>{
   ToggleModal(addCardModal);
   formPlaceEdit.value="";
   formLinkEdit.value="";
})

//Close popup's
editProfileModalCloseButton.addEventListener('click', () => {
   ToggleModal(editProfileModal);
})

addCardModalCloseButton.addEventListener('click', () => {
   ToggleModal(addCardModal);
   
})



function toggleModalWindow(modalWindow) {
   if (!modalWindow.classList.contains('popup_type_open')) {
      formNameEdit.value=profileName.textContent;
      formJobEdit.value=profileJob.textContent;
   }
}

function createCard(item) {
   const cardTemplate = document.querySelector('.newCard').content;
   const cardElement = cardTemplate.cloneNode(true);
   cardElement.querySelector('.element__title').textContent=item.name;
   cardElement.querySelector('.element__image').src=item.link;
}

function renderCard (initialCards) {
   initialCards.forEach(card => elements.prepend(createCard(card)));
}

editProfileForm.addEventListener('submit', function(event) {
   event.preventDefault();
   profileName.textContent=formNameEdit.value;
   profileJob.textContent=formJobEdit.value;
   ToggleModal(event.target.parentElement.parentElement);
}
);

addCardForm.addEventListener('submit', function(event) {
   event.preventDefault();
   const newCardData = {
      name: formPlaceEdit.value,
      link: formLinkEdit.value,
   }
   elements.prepend(createCard(newCardData));
   ToggleModal(addCardModal);
})



const initialCards = [
   {
       name: 'Архыз',
       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
       name: 'Челябинская область',
       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
       name: 'Иваново',
       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
       name: 'Камчатка',
       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
       name: 'Холмогорский район',
       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
       name: 'Байкал',
       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

// function renderCard(card) {
//    prepend()
// }

// function createCard(title, src) {

// }