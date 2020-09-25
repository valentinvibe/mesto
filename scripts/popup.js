export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._popupCloseButton = this._popupElement.querySelector('.popup__close-button');
        this._escListener = this._handleEscClose.bind(this);
    }

    _togglePopupClass() {
        this._popupElement.classList.toggle('popup_type_open');
    }

    open() {
        this._togglePopupClass();
    }

    close() {
        this._togglePopupClass();
    }

    _handleEscClose(evt) {
        evt.preventDefault();
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popupCloseButton.addEventListeners('click', (evt) => this.close(evt));
    }
}