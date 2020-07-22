const 
      // Popup's
      editProfileModal = document.querySelector('.popup_type_edit-profile'),
      addCardModal = document.querySelector('.popup_type_add-card'),
      imageModal = document.querySelector('.popup_type_image-card'),

      //Open Popup's
      profileEdit = document.querySelector('.profile__edit-button'),
      createNewCard = document.querySelector('.profile__add-button'),

      profileName = document.querySelector('.profile__name'),
      profileJob = document.querySelector('.profile__job'),

      //Form
      editProfileForm = editProfileModal.querySelector('.form_type_edit-profile'),
      addCardForm = addCardModal.querySelector('.form_type_add-card'),
      //inputs in forms
      formNameEdit = document.querySelector('.form__input_type_name'),
      formJobEdit = document.querySelector('.form__input_type_job'),
      formPlaceEdit = addCardForm.querySelector('.form__input_type_name'),
      formLinkEdit = addCardForm.querySelector('.form__input_type_job'),

      //ImageModal data
      imageModalDescription = imageModal.querySelector('.popup__description'),
      imageModalImg = imageModal.querySelector('.popup__image'),
      
      // Close Button Popup's
      editProfileModalCloseButton = editProfileModal.querySelector('.popup__close-button'),
      addCardModalCloseButton = addCardModal.querySelector('.popup__close-button'),
      imageModalCloseButton = imageModal.querySelector('.popup__close-button'),

      //Template
      cardTemplate = document.querySelector('.template-card').content.querySelector('.element'),
      list = document.querySelector('.elements');

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

function toggleModalWindow(modalWindow) {
    if (!modalWindow.classList.contains('popup_type_open')) {
       formNameEdit.value=profileName.textContent;
       formJobEdit.value=profileJob.textContent;
    }
    modalWindow.classList.toggle('popup_type_open')
 }
 
//Open popup's
profileEdit.addEventListener('click', () => {
    toggleModalWindow(editProfileModal)
});
createNewCard.addEventListener('click', () =>{
    toggleModalWindow(addCardModal);
    formPlaceEdit.value="";
    formLinkEdit.value="";
})

//Close popup's
editProfileModalCloseButton.addEventListener('click', () => {
    toggleModalWindow(editProfileModal);
})

addCardModalCloseButton.addEventListener('click', () => {
    toggleModalWindow(addCardModal);
})

imageModalCloseButton.addEventListener('click', () => {
    toggleModalWindow(imageModal);
})

// Submit Form's popup
editProfileForm.addEventListener('submit', function(event) {
   event.preventDefault();
   profileName.textContent=formNameEdit.value;
   profileJob.textContent=formJobEdit.value;
   toggleModalWindow(editProfileModal);
}
);

addCardForm.addEventListener('submit', function(event) {
   event.preventDefault();
   const newCardData = {
      name: formPlaceEdit.value,
      link: formLinkEdit.value,
   }
   renderCard(newCardData);
   toggleModalWindow(addCardModal);
})


//Load cards js
function renderCard(data) {
    list.prepend(createCard(data));
}

function handleDeleteClick(item) {
    item.closest('.element').remove();
}

function handleLikeClick(item) {
    item.classList.toggle('button__like_type_liked');
}

function handleImageClick(item) {
    toggleModalWindow(imageModal);
}

initialCards.forEach((data) => {
    renderCard(data);
});

function createCard(data) {
    const cardElement = cardTemplate.cloneNode(true),
          cardImage = cardElement.querySelector('.element__image'),
          cardTitle = cardElement.querySelector('.element__title'),
          cardLikeButton = cardElement.querySelector('.element__button-like'),
          cardDeleteButton = cardElement.querySelector('.element__trash');

    cardLikeButton.addEventListener('click', (evt) => {
        handleLikeClick(evt.target);
    });
    cardDeleteButton.addEventListener('click', (evt) => {
        handleDeleteClick(evt.target);
    });
    cardImage.addEventListener('click', (evt) => {
        handleImageClick(evt.target);
        imageModalImg.src = cardImage.src;
        imageModalDescription.textContent = cardTitle.textContent;
    });

    cardTitle.textContent = data.name;
    cardImage.src = data.link;

    return cardElement;
};