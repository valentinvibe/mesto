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
const cardTemplate = document.querySelector('.template-card').content.querySelector('.element');
const list = document.querySelector('.elements');

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
        imageModalImg.alt = cardTitle.textContent;
    });

    cardTitle.textContent = data.name;
    cardImage.src = data.link;
    cardImage.alt = data.name;

    return cardElement;
};
