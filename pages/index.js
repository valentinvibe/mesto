import './index.css'; // добавьте импорт главного файла стилей

import { Card } from '../components/card.js';
import { cards } from '../utils/initial-cards.js';
import { 
    editFormButton,
    addFormButton,
    cardsContainer,
    profileTitle,
    profileSubtitle,
    validationParams,
    nameInput,
    infoInput,
    nameInputNewPlace,
    lincInputNewPlace,
} from '../utils/constants.js';

import { FormValidator } from '../components/formValidator.js';
import Section from '../components/section.js';
import PopupWithImage from '../components/popupWithImage.js';
import PopupWithForm from '../components/popupWithForm.js';
import UserInfo from '../components/userInfo.js';

import Api from '../components/api.js';

const popupImgSelector = ".popup_img";
const popupBioSelector = ".popup";
const popupNewPlaceSelector = ".popup_new_place";
const nameSelector = ".profile__title";
const jobSelector = ".profile__subtitle";
const photoSelector = ".profile__avatar"

const aUserInfo = new UserInfo({ nameSelector, jobSelector, photoSelector});

const aPopupImage = new PopupWithImage(popupImgSelector);

function bioFormSubmitHandler(data) {
    const name = data["name-input"];
    const job = data["job-input"];
    aUserInfo.setUserInfo({ name, job });
}

const cardClickCallback = (name, link) => aPopupImage.open(name, link);

let formValidators = {};

const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));

    formList.forEach((formElement) => {
        const formValidator = new FormValidator(params, formElement);
        formValidator.enableValidation();
        formValidators[formElement.id] = formValidator;
    });
};

function cardRenderer(cardData, cardSelector) {
    const aCard = new Card(cardData, "#card-template", cardClickCallback);
    aSection.addItem(aCard.getHtmlNode());
}


enableValidation(validationParams);

// Edit bio popup
const bioInitialValues = () => {
    const { name, job } = aUserInfo.getUserInfo();

    nameInput.value = name;
    infoInput.value = job;
};
const aBioPopup = new PopupWithForm(popupBioSelector, bioFormSubmitHandler, bioInitialValues);
aBioPopup.setEventListeners();
editFormButton.addEventListener('click', () => {
    aBioPopup.open();
    formValidators[aBioPopup.formElement.id].toggleButtonStateWithForm(aBioPopup.formElement, aBioPopup.formButton);
    formValidators[aBioPopup.formElement.id].resetValidationErrors(aBioPopup.formElement, validationParams);
});

// Add new place popup
const newPlaceInitialValues = () => {
    nameInputNewPlace.value = "";
    lincInputNewPlace.value = "";
};

const aSection = new Section({items: cards, renderer: cardRenderer}, '.card-container');
aSection.renderAll();

function newPlaceFormSubmitHandler(data) {
    const newCardData = {
        name: data["title-input"],
        link: data["link-input"],
    };
    const aCard = new Card(newCardData, "#card-template", cardClickCallback);
    aSection.addItem(aCard.getHtmlNode());
    //cardsContainer.prepend(aCard.getHtmlNode());
}

const aNewPlacePopup = new PopupWithForm(popupNewPlaceSelector, newPlaceFormSubmitHandler, newPlaceInitialValues);
aNewPlacePopup.setEventListeners();
addFormButton.addEventListener('click', () => {
    aNewPlacePopup.open();
    formValidators[aNewPlacePopup.formElement.id].toggleButtonStateWithForm(aNewPlacePopup.formElement, aNewPlacePopup.formButton);
    formValidators[aNewPlacePopup.formElement.id].resetValidationErrors(aNewPlacePopup.formElement, validationParams);
});

// Image popup
aPopupImage.setEventListeners();

export {
    aPopupImage,
    formValidators,
};



fetch('https://mesto.nomoreparties.co/v1/cohort-16/cards', {
  headers: {
    authorization: '9be5e6d6-4f94-471f-af70-49718e331d2d'
  }
})
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); 

  const serverUrl = 'https://mesto.nomoreparties.co/v1/cohort-16';

  const api = new Api({
    baseUrl: serverUrl,
    headers: {
      authorization: '9be5e6d6-4f94-471f-af70-49718e331d2d',
      'Content-Type': 'application/json'
    }
  });

  console.log(api.getUserData());