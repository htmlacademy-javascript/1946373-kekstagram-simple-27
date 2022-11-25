import {MINLENGT,MAXLENGT} from './constants.js';

const uploadForm = document.querySelector('.img-upload__form');
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

export {uploadForm, onUploadFormSubmit};
