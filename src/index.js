import '../pages/index.css'; //импорт главного файла стилей

import { Card } from '../scripts/card.js';
import {FormValidator} from '../scripts/formValidator.js';
import {params} from './utils/params.js';
import {initialCards} from './utils/initial-cards.js';
import {
    editProfileModal,
    addCardModal,
    imageModal,
    profileEdit,
    createNewCard,
    profileName,
    profileJob,
    editProfileForm,
    addCardForm,
    formNameEdit,
    formJobEdit,
    formPlaceEdit,
    formLinkEdit,
    editProfileModalCloseButton,
    addCardModalCloseButton,
    imageModalCloseButton,
    cardSubmitButton,
    profileSubmitButtom,
    list
} from './utils/constants.js';

import '../scripts/popupWithForm.js';
import '../scripts/popupWithImage.js';
import '../scripts/userInfo.js';


const popupList = Array.from(document.querySelectorAll('.popup'));
popupList.forEach((element) => {
    element.addEventListener('mousedown', (evt) =>{
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
    list.prepend(newCard.getView());

}

const editFormValidator = new FormValidator(params, params.editFormSelector);
const cardFormValidator = new FormValidator(params, params.cardFormSelector);

editFormValidator.enableValidation();
cardFormValidator.enableValidation();