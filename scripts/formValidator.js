export const params = {
    formSelector: '.form',
    inputSelector: '.form__input',
    formGroup: '.form__group',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_type_disabled',
    inputErrorClass: 'form__input-error_active',
    errorClass: 'form__input_type_error'
  };


class FormValidator {
  constructor(params,formElement) {
    this._params = params;
    this._formElement = formElement;
  }

_showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputErrorClass);
  };
  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
    })
  }
  
   _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
    }
  }
  
  _hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(errorClass);
    errorElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      this._hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  
  _setEventListeners(formElement, params) {
    const inputList = Array.from(this._formElement.querySelectorAll(params.inputSelector));
    const buttonElement=this._formElement.querySelector(params.submitButtonSelector);
    this._toggleButtonState(inputList,buttonElement,params.inactiveButtonClass);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, params.inputErrorClass, params.errorClass);
        this._toggleButtonState(inputList,buttonElement,params.inactiveButtonClass);
      });
    });
  };
  
  enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(this._formElement, this._params);
  };
}

export {FormValidator}