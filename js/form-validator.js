import {MINLENGT,MAXLENGT} from './constants.js';
const uploadPreviewElement = document.querySelector('.img-upload__preview img');
const uploadForm = document.querySelector('.img-upload__form');
// const effectLevelElement = document.querySelector('.effect-level');
// const formElement = document.querySelector('.img-upload__form');
// const uploadStartElement = document.querySelector('.img-upload__start');
// const uploadOverlayElement = document.querySelector('.img-upload__overlay');
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

const onUploadFormSubmit = (evt) => {
  const isValid = pristine.validate();

  if(!isValid) {
    evt.preventDefault();
  }
};

const resetForm = () => {
  // uploadStartElement.classList.remove('hidden');
  // uploadOverlayElement.classList.add('hidden');
  // formElement.reset();
  uploadPreviewElement.className = '';
  uploadPreviewElement.style.transform = 'scale(1)';
  uploadPreviewElement.style.filter = '';
  // effectLevelElement.classList.add('hidden');
  // uploadPreviewElement.classList.remove('effects__preview--');
};
// fullPhotoElement.classList.add(`effects__preview--${target}`);


export { onUploadFormSubmit, resetForm};
