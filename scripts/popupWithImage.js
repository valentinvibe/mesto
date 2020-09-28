import Popup from "./popup";

import Popup from './popup.js';

export default class popupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

        this._popupImage = this._popupElement.querySelector('.popup_image');
        this._figureCaption = this._popupElement.querySelector('.popup__description');
    }

    open(cardName, cardLink) {
        this._popupImage.src = cardLink;
        this._popupImage.alt = cardName;
        this._figureCaption.textContent = cardName;
        super.open();
    }
}