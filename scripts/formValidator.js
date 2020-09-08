import { params } from '../src/utils/params.js';

class FormValidator {
  constructor(params,formElement) {
    this._formElement = formElement;
    this._inputErrorClass = params.inputErrorClass;
    this._errorClass = params.errorClass;
    this._inactiveButtonClass = params.inactiveButtonClass;
    this._inputSelector = params.inputSelector;
    this._submitButtonSelector = params.submitButtonSelector;
  }

_showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorClass);
  };
  
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
       return !inputElement.validity.valid;
    })
  }
  
   _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._errorClass);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    const buttonElement=this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList,buttonElement);
    
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList,buttonElement);
      });
    });
  };
  
  enableValidation() {
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners();
  };
}

export {FormValidator}