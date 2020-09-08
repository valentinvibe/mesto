export const editProfileModal = document.querySelector('.popup_type_edit-profile');
export const addCardModal = document.querySelector('.popup_type_add-card');
export const imageModal = document.querySelector('.popup_type_image-card');

//Open Popup's
export const profileEdit = document.querySelector('.profile__edit-button');
export const createNewCard = document.querySelector('.profile__add-button');

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');

//Form
export const editProfileForm = editProfileModal.querySelector('.form_type_edit-profile');
export const addCardForm = addCardModal.querySelector('.form_type_add-card');

//inputs in forms
export const formNameEdit = document.querySelector('.form__input_type_name');
export const formJobEdit = document.querySelector('.form__input_type_job');
export const formPlaceEdit = addCardForm.querySelector('.form__input_type_name');
export const formLinkEdit = addCardForm.querySelector('.form__input_type_job');

//ImageModal data
export const imageModalDescription = imageModal.querySelector('.popup__description');
export const imageModalImg = imageModal.querySelector('.popup__image');
      
// Close Button Popup's
export const editProfileModalCloseButton = editProfileModal.querySelector('.popup__close-button');
export const addCardModalCloseButton = addCardModal.querySelector('.popup__close-button');
export const imageModalCloseButton = imageModal.querySelector('.popup__close-button');

//Template
export const list = document.querySelector('.elements');

//Buttons
export const cardSubmitButton = addCardModal.querySelector('.form__submit-button');
export const profileSubmitButtom = editProfileModal.querySelector('.form__submit-button');
