export class Card {
    constructor(data,templateSelector,handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = document.querySelector(templateSelector);
        this._handleImageClick = handleImageClick;
    }

    _createCard() {
        this._cardElement = this._cardTemplate
        .content.querySelector('.element')
        .cloneNode(true);

        this._cardElement.querySelector('.element__title').textContent = this._name;
        const elementImage = this._cardElement.querySelector('.element__image');
        elementImage.src = this._link;
        elementImage.alt = this._name;

        this._cardElement.querySelector('.element__button-like').addEventListener('click', this._likeCard);
        this._cardElement.querySelector('.element__trash').addEventListener('click', this._removeCard);
        elementImage.addEventListener('click', () => {
            this._handleImageClick;
            imageModalImg.src = this._link;
            elementImage.textContent = this._name;
            imageModalImg.alt = this._name;
        });
    }

    _removeCard(event) {
        const cardElement = event.target.closest('.element');
        cardElement.remove();
    }
    
    _likeCard(event) {
        event.target.classList.toggle('button__like_type_liked');
    }
    
    generateCard() {
        if (!this._cardElement) {
            this._createCard();
        }
        return this._cardElement;
    }

}