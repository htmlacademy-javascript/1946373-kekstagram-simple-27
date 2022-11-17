import {isEscapeKey} from './utils.js';
import {addScaleListener, removeScaleListener} from './scale.js';//, onEffectsRadio
import {onUploadFormSubmit, resetForm} from './form-validator.js';
import {onEffectChange} from './form-filters.js';

const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const uploadModal = body.querySelector('.img-upload__overlay');
const uploadFileClose = uploadModal.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
// const uploadPreviewElement = document.querySelector('.img-upload__preview img');
const effectLevelElement = document.querySelector('.effect-level');

// const modalEffectLevel = uploadModal.querySelector('.effect-level__value');
// const modalEffectRadio = uploadModal.querySelectorAll('.effects__radio');
// const modalComment = uploadModal.querySelectorAll('.text__description');
const effectsListElement = document.querySelector('.effects__list');
// uploadFile.addEventListener ('change', () => openUploadField());//событие меняющее в разметке
// uploadFileClose.addEventListener ('click', () => closeUploadField());
//функция заменяющая состояния
function onModalEcsKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault(); //preventDefault - замена состояния на противоположное
    closeUploadField();
  }

}

function closeUploadField () {
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
  removeScaleListener();
  // uploadFile.value = '';
  // modalEffectLevel.value = '';
  // modalEffectRadio.forEach((input) => {
  //   input.value = '';
  // });
  // modalComment.value = '';
  document.removeEventListener('keydown', onModalEcsKeydown);//при нажатии на клавишу срабатывает onModalEcsKeydown
  effectsListElement.removeEventListener('change', onEffectChange);
  resetForm ();
  uploadForm.removeEventListener('submit', onUploadFormSubmit);
}


//функция добавляющая эти состояния
function openUploadField () {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.querySelector('.scale__control--value').value = '100%';
  document.addEventListener('keydown', onModalEcsKeydown);
  effectLevelElement.classList.add('hidden');
  addScaleListener();
}
// uploadFile.addEventListener ('change', () => openUploadField());//событие меняющее в разметке
uploadFileClose.addEventListener ('click', () => closeUploadField());
uploadFile.addEventListener('change', openUploadField);

