!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class n{constructor(e,t,r){this._name=e.name,this._link=e.link,this._cardTemplate=document.querySelector(t),this._handleImageClick=r}_getTemplate(){return this._cardElement=this._cardTemplate.content.querySelector(".element").cloneNode(!0),this._cardElement}_setEventListeners(e){this._cardElement.querySelector(".element__button-like").addEventListener("click",()=>this._likeCard()),this._cardElement.querySelector(".element__trash").addEventListener("click",()=>this._removeCard()),e.addEventListener("click",()=>{const e=document.querySelector(".popup_type_image-card"),t=e.querySelector(".popup__description"),r=e.querySelector(".popup__image");this._handleImageClick(e),r.src=this._link,t.textContent=this._name,r.alt=this._name})}_removeCard(){this._cardElement.remove(),this._cardElement=null}_likeCard(){this._cardElement.querySelector(".element__button-like").classList.toggle("button__like_type_liked")}getView(){this._getTemplate();const e=this._cardElement.querySelector(".element__image");return this._setEventListeners(e),this._cardElement.querySelector(".element__title").textContent=this._name,e.src=this._link,e.alt=this._name,this._cardElement}}class o{constructor(e,t){this._formElement=t,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._inactiveButtonClass=e.inactiveButtonClass,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector}_showInputError(e,t){const r=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._errorClass),r.textContent=t,r.classList.add(this._inputErrorClass)}_hasInvalidInput(e){return e.some(e=>!e.validity.valid)}_toggleButtonState(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._inactiveButtonClass),t.disabled=!1)}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass),t.textContent=""}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}_setEventListeners(){const e=Array.from(this._formElement.querySelectorAll(this._inputSelector)),t=this._formElement.querySelector(this._submitButtonSelector);this._toggleButtonState(e,t),e.forEach(r=>{r.addEventListener("input",()=>{this._checkInputValidity(r),this._toggleButtonState(e,t)})})}enableValidation(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}const i={formSelector:".form",editFormSelector:document.querySelector(".form_type_edit-profile"),cardFormSelector:document.querySelector(".form_type_add-card"),inputSelector:".form__input",formGroup:".form__group",submitButtonSelector:".form__submit-button",inactiveButtonClass:"form__submit-button_type_disabled",inputErrorClass:"form__input-error_active",errorClass:"form__input_type_error"},s=document.querySelector(".popup_type_edit-profile"),l=document.querySelector(".popup_type_add-card"),c=document.querySelector(".popup_type_image-card"),a=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),_=document.querySelector(".profile__name"),d=document.querySelector(".profile__job"),p=s.querySelector(".form_type_edit-profile"),m=l.querySelector(".form_type_add-card"),y=document.querySelector(".form__input_type_name"),f=document.querySelector(".form__input_type_job"),h=m.querySelector(".form__input_type_name"),v=m.querySelector(".form__input_type_job"),S=(c.querySelector(".popup__description"),c.querySelector(".popup__image"),s.querySelector(".popup__close-button")),b=l.querySelector(".popup__close-button"),E=c.querySelector(".popup__close-button"),k=document.querySelector(".elements"),q=l.querySelector(".form__submit-button"),g=s.querySelector(".form__submit-button"),L=Array.from(document.querySelectorAll(".popup"));L.forEach(e=>{e.addEventListener("click",t=>{t.target.classList.contains("popup_type_open")&&j(e)})});const C=e=>e.classList.contains("popup_type_open"),x=e=>{if(e.preventDefault(),"Escape"==e.key){const e=L.find(e=>C(e));e&&j(e)}};function j(e){C(e)?document.removeEventListener("keyup",x):document.addEventListener("keyup",x),e.classList.toggle("popup_type_open")}function B(){s.classList.contains("popup_type_open")||(y.value=_.textContent,f.value=d.textContent),j(s)}function I(){j(c)}function w(e){const t=new n(e,".template-card",I);k.prepend(t.getView())}a.addEventListener("click",()=>{B(),g.classList.remove("form__submit-button_type_disabled")}),u.addEventListener("click",()=>{j(l),h.value="",v.value=""}),S.addEventListener("click",()=>{B()}),b.addEventListener("click",()=>{j(l)}),E.addEventListener("click",()=>{j(c)}),p.addEventListener("submit",(function(e){e.preventDefault(),_.textContent=y.value,d.textContent=f.value,j(s)})),m.addEventListener("submit",(function(e){e.preventDefault();w({name:h.value,link:v.value}),j(l),m.reset(),q.classList.add("form__submit-button_type_disabled")})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach(e=>{w(e)});const O=new o(i,i.editFormSelector),V=new o(i,i.cardFormSelector);O.enableValidation(),V.enableValidation()}]);