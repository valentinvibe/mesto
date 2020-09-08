export class Card {
    constructor(data,templateSelector,handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = document.querySelector(templateSelector);
        this._handleImageClick = handleImageClick;
        
    }

    _getTemplate() {
        this._cardElement = this._cardTemplate
        .content.querySelector('.element')
        .cloneNode(true);
        
        return this._cardElement
    }

    _setEventListeners(elementImage) {
        this._cardElement.querySelector('.element__button-like').addEventListener('click', this._likeCard);
        this._cardElement.querySelector('.element__trash').addEventListener('click', this._removeCard);
        elementImage.addEventListener('click', () => {
            const imageModal = document.querySelector('.popup_type_image-card');
            const imageModalDescription = imageModal.querySelector('.popup__description');
            const imageModalImg = imageModal.querySelector('.popup__image');
            this._handleImageClick(imageModal);
            imageModalImg.src = this._link;
            imageModalDescription.textContent = this._name;
            imageModalImg.alt = this._name;
        });
    }

    _removeCard() {
        const cardElement = event.target.closest('.element');
        // const cardElement = this._cardTemplate.querySelector('.element');
        cardElement.remove();
        // this._cardElement.closest('.element').remove();
        // this._cardElement = null;
    }
    
    _likeCard(event) {
        event.target.classList.toggle('button__like_type_liked');
    }
    
    getView() {
        this._getTemplate();
        const elementImage = this._cardElement.querySelector('.element__image');
        this._setEventListeners(elementImage);
        this._cardElement.querySelector('.element__title').textContent = this._name;
        elementImage.src = this._link;
        elementImage.alt = this._name;

        return this._cardElement;
    }

}