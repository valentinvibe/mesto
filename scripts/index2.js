import { Card } from '../scripts/card.js';

// Popup's
const editProfileModal = document.querySelector('.popup_type_edit-profile');
const addCardModal = document.querySelector('.popup_type_add-card');
const imageModal = document.querySelector('.popup_type_image-card');

//Open Popup's
const profileEdit = document.querySelector('.profile__edit-button');
const createNewCard = document.querySelector('.profile__add-button');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

//Form
const editProfileForm = editProfileModal.querySelector('.form_type_edit-profile');
const addCardForm = addCardModal.querySelector('.form_type_add-card');

//inputs in forms
const formNameEdit = document.querySelector('.form__input_type_name');
const formJobEdit = document.querySelector('.form__input_type_job');
const formPlaceEdit = addCardForm.querySelector('.form__input_type_name');
const formLinkEdit = addCardForm.querySelector('.form__input_type_job');

//ImageModal data
const imageModalDescription = imageModal.querySelector('.popup__description');
const imageModalImg = imageModal.querySelector('.popup__image');
      
// Close Button Popup's
const editProfileModalCloseButton = editProfileModal.querySelector('.popup__close-button');
const addCardModalCloseButton = addCardModal.querySelector('.popup__close-button');
const imageModalCloseButton = imageModal.querySelector('.popup__close-button');

//Template
const list = document.querySelector('.elements');

//Buttons
const cardSubmitButton = addCardModal.querySelector('.form__submit-button');
const profileSubmitButtom = editProfileModal.querySelector('.form__submit-button');

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

const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((element) => {
    element.addEventListener('click', (evt) =>{
        if (evt.target.classList.contains('popup_type_open')) {toggleModalWindow(element)}
    })
});

const popupIsOpened = (popupElement) => {
    return popupElement.classList.contains('popup_type_open');
};


const closePopupEscHandler = (evt) => {
    evt.preventDefault();
    if (evt.key == "Escape") {
        const popupElement = popupList.find(popupElement => popupIsOpened(popupElement));
        if (popupElement) {
            toggleModalWindow(popupElement);
        };
    };
};


function addEscListener() {
    document.addEventListener('keyup', closePopupEscHandler);
}

function removeEscListener() {
    document.removeEventListener('keyup',closePopupEscHandler)
}


function toggleModalWindow(modalWindow) {
    if (popupIsOpened(modalWindow)) {
        removeEscListener();
    } else {
        addEscListener();
    }
    modalWindow.classList.toggle('popup_type_open')
 }

 function toggleEditProfileModal() {
    if (!editProfileModal.classList.contains('popup_type_open')) {
        formNameEdit.value=profileName.textContent;
        formJobEdit.value=profileJob.textContent;
     }
     toggleModalWindow(editProfileModal);
 }
 
//Open popup's
profileEdit.addEventListener('click', () => {
    toggleEditProfileModal();
    profileSubmitButtom.classList.remove('form__submit-button_type_disabled');
});
createNewCard.addEventListener('click', () =>{
    toggleModalWindow(addCardModal);
    formPlaceEdit.value="";
    formLinkEdit.value="";
})

//Close popup's
editProfileModalCloseButton.addEventListener('click', () => {
    toggleEditProfileModal(editProfileModal);
    
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
   };
   rendererCard(newCardData);
   toggleModalWindow(addCardModal);
   addCardForm.reset();
   cardSubmitButton.classList.add('form__submit-button_type_disabled');
});


//Load cards js
function handleImageClick() {
    toggleModalWindow(imageModal);
}

//Отрисовка карточек в HTML
initialCards.forEach((data) => {
    rendererCard(data);
});

function rendererCard(data) {
    const newCard = new Card(data, ".template-card", handleImageClick);
    list.prepend(newCard.generateCard());

}