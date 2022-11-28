import { isEscapeKey } from './utils.js';
import { addScaleListener, removeScaleListener } from './scale.js';
import { onErrorClickEsc, resetForm } from './form-validator.js';
import { onEffectChange } from './form-filters.js';

const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const uploadModal = body.querySelector('.img-upload__overlay');
const uploadFileClose = uploadModal.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const effectLevelElement = document.querySelector('.effect-level');
const effectsListElement = document.querySelector('.effects__list');

const onUserModalWindow = () => {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  removeScaleListener();
  resetForm();
};

// функция заменяющая состояния
const onModalEcsKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault(); //preventDefault - замена состояния на противоположное
    onUserModalWindow();
  }
};

const onOpenUploadField = () => {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEcsKeydown);
  effectLevelElement.classList.add('hidden');
  document.querySelector('.scale__control--value').value = '100%';
  addScaleListener();
};

const onСloseUploadField = () => {
  effectsListElement.removeEventListener('change', onEffectChange);
  uploadForm.removeEventListener('submit', onErrorClickEsc);
  uploadFileClose.removeEventListener('click', onUserModalWindow);
  document.removeEventListener('keydown', onModalEcsKeydown);
  onUserModalWindow();
};

uploadFileClose.addEventListener('click',onСloseUploadField);
uploadFile.addEventListener('change', onOpenUploadField);

export {onСloseUploadField, onModalEcsKeydown};
