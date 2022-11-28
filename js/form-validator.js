import {MINLENGT,MAXLENGT} from './constants.js';
import {sendData} from './api.js';
import {isEscapeKey} from './utils.js';
import {onСloseUploadField, onModalEcsKeydown} from './form.js';

const bodyElement = document.querySelector('body');
const uploadPreviewElement = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');
const uploadSubmitElement = document.querySelector('.img-upload__submit');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const elementDescription = uploadForm.querySelector('.text__description');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');
const effectLevelElement = document.querySelector('.effect-level');

const pristine = new Pristine(uploadForm, {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextClass: 'text__description--error',
  errorClass: 'text__description--invalid',
  successClass: 'text__description--valid',
  errorTextTag: 'div',
});

const validateDescriptionText = (value) => value.length >= MINLENGT && value.length <= (MAXLENGT - 1);

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateDescriptionText,
  'Введите от 20 до 140 символов'
);


const resetForm = () => {
  uploadForm.reset();
  uploadPreviewElement.className = '';
  uploadPreviewElement.style.transform = 'scale(1)';
  uploadPreviewElement.style.filter = '';
  effectLevelElement.classList.add('hidden');
  uploadSubmitElement.disabled = false;
};


const onErrorClickEsc = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    onWindowWarningClose();
  }
};


//Закрытие окна с успешной или ошибочной отправкой.
function onWindowWarningClose () {
  const successSectionElement = document.querySelector('.success');
  const errorSectionElement = document.querySelector('.error');

  if (successSectionElement) {
    successSectionElement.remove();
  }

  if (errorSectionElement) {
    errorSectionElement.remove();
  }
  document.addEventListener('keydown', onModalEcsKeydown);
}

const onAreaWindowClose = (evt) => {
  if (evt.target.closest('section')) {
    onWindowWarningClose();
  }
};

const getSuccessMessage = () => {
  const elementSuccessMessage = successMessageElement.cloneNode(true);
  document.addEventListener('keydown', onErrorClickEsc);
  document.addEventListener('click', onAreaWindowClose);
  successButton.addEventListener('click', onWindowWarningClose);
  bodyElement.append(elementSuccessMessage);
  bodyElement.style.overflow = 'hidden';
};

const getErrorMessage = () => {
  const elementErrorMessage = errorMessageElement.cloneNode(true);
  document.addEventListener('keydown', onWindowWarningClose);
  document.addEventListener('click', onAreaWindowClose);
  errorButton.addEventListener('click', onModalEcsKeydown);
  bodyElement.append(elementErrorMessage);
  bodyElement.style.overflow = 'hidden';
  document.removeEventListener('keydown', onModalEcsKeydown);
};

const blockSubmitButton = () => {
  uploadSubmitElement.disabled = true;
  elementDescription.readOnly = true;
};

const unblockSubmitButton = () => {
  uploadSubmitElement.disabled = false;
  elementDescription.readOnly = false;
};

const setUserFormSubmit = () => {

  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    if (pristine.validate()) {
      blockSubmitButton();
      getSuccessMessage();
      sendData(formData, onСloseUploadField, unblockSubmitButton);

    } else {
      getErrorMessage(unblockSubmitButton);
    }
  });
};

export { onErrorClickEsc, resetForm, setUserFormSubmit, getErrorMessage};
