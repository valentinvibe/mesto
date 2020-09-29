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

import {PopupWithForm} from '../../scripts/popupWithForm.js';
import {popupWithImage} from '../../scripts/popupWithImage.js';
import {UserInfo} from '../../scripts/userInfo.js';
import {Section} from '../../scripts/section.js';

function cardRenderer(cardData, cardSelector) {
    const aCard = new Card(cardData, ".template-card", cardClickCallback);
    aSection.addItem(aCard.getHtmlNode());
}

const aSection = new Section({items: cards, renderer: cardRenderer}, '.card-container');
aSection.renderAllItems();