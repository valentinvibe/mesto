import Popup from './popup.js';
import {params} from './utils/params.js';

const formSelector = ".popup__container";
const formSubmitButtonSelector = ".form__submit-button";
const formInputSelector = ".form__input";
const fieldOneSelector = ".form__input_type_name";
const fieldTwoSelector = ".form__input_type_job";


export default class PopupWithForm extends Popup {
    constructor(popupSelector, callbackSubmitForm) {
        super(popupSelector);
        this._callbackSubmitForm = callbackSubmitForm;

        this.formElement = this._popupElement.querySelector(formSelector);
        this.formButton - this._popupElement.querySelector(formSubmitButtonSelector);
        this._fieldOneElement = this._popupElement.querySelector(fieldOneSelector);
        this._fieldTwoElement = this._popupElement.querySelector(fieldTwoSelector);
    }


    _getInputValues() {
        this._inputList = array.from(this._formSelector.querySelectorAll(formInputSelector));
        this._inputValues = {};
        this._inputList.forEach((item)=> {
            this._inputValues[item] = item.value;
        })
        
        return this._inputValues
    }

    setEventListeners() {
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            const data = this._getInputValues();

            this.close(evt);
        })
        super.setEventListeners();
    }

    close(evt) {
        this.formElement.reset();
        super.close(evt);
    }
}