const params = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_type_disabled',
    inputErrorClass: 'form__input-error_active',
    errorClass: 'form__input_type_error'
  };

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputErrorClass);
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
    })
  }
  
  const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass)
    } else {
      buttonElement.classList.remove(inactiveButtonClass)
    }
  }
  
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  };
  
  const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
    const buttonElement=formElement.querySelector(params.submitButtonSelector);
    toggleButtonState(inputList,buttonElement,params.inactiveButtonClass);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, params.inputErrorClass, params.errorClass);
        toggleButtonState(inputList,buttonElement,params.inactiveButtonClass);
      });
    });
  };
  
  const enableValidation = (params) => {
    const formList = Array.from(document.querySelectorAll(params.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList=formElement.querySelectorAll('.form__group');
      fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
      })
    });
  };
  
  enableValidation(params);