import {MINLENGT,MAXLENGT} from './constants.js';
import {sendData} from './api.js';
import {isEscapeKey} from './utils.js';

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
const BLOCK_SUBMIT = 'Сохраняю...';
const UNBLOCK_SUBMIT = 'Сохранить';

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
};


const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

const onRandomArea = () => {
  hideMessage();
};

const onSuccessButtonClick = () => {
  hideMessage();
};

const onErrorButtonClick = () => {
  hideMessage();
};

const getSuccessMessage = () => {
  const elementSuccessMessage = successMessageElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onRandomArea);
  successButton.addEventListener('click', onSuccessButtonClick);
  bodyElement.append(elementSuccessMessage);
  bodyElement.style.overflow = 'hidden';
};

const getErrorMessage = () => {
  const elementErrorMessage = errorMessageElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onRandomArea);
  errorButton.addEventListener('click', onErrorButtonClick);
  bodyElement.append(elementErrorMessage);
  bodyElement.style.overflow = 'hidden';
};

function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onRandomArea);
  successButton.removeEventListener('click', onSuccessButtonClick);
  errorButton.removeEventListener('click', onErrorButtonClick);
  bodyElement.style.overflow = 'auto';
}

const blockSubmitButton = () => {
  uploadSubmitElement.disabled = true;
  elementDescription.readOnly = true;
  uploadSubmitElement.textContent = BLOCK_SUBMIT;
};

const unblockSubmitButton = () => {
  uploadSubmitElement.disabled = false;
  elementDescription.readOnly = false;
  uploadSubmitElement.textContent = UNBLOCK_SUBMIT;
};

const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', onSubmitButton);
  function onSubmitButton (evt) {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessMessage();
        },
        () => {
          getErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  }
};

export { onMessageEscKeydown, resetForm, setUserFormSubmit};
