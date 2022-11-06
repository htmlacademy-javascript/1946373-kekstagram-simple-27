import {isEscapeKey} from './utils.js';
import {addScaleListener, removeScaleListener} from './scale.js';
import {uploadForm, onUploadFormSubmit} from './form-validator.js';


const body = document.querySelector('body');
const uploadFile = body.querySelector('#upload-file');
const uploadModal = body.querySelector('.img-upload__overlay');
const uploadFileClose = uploadModal.querySelector('.img-upload__cancel');

const modalEffectLevel = uploadModal.querySelector('.effect-level__value');
const modalEffectRadio = uploadModal.querySelectorAll('.effects__radio');
const modalComment = uploadModal.querySelectorAll('.text__description');
uploadFile.addEventListener ('change', () => openUploadField());//событие меняющее в разметке
uploadFileClose.addEventListener ('click', () => closeUploadField());
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
  document.removeEventListener('keydown', onModalEcsKeydown);//при нажатии на клавишу срабатывает onModalEcsKeydown
  removeScaleListener();
  // effectList.removeEventListener('change', onEffectChange);
  uploadFile.value = '';
  modalEffectLevel.value = '';
  modalEffectRadio.forEach((input) => {
    input.value = '';
  });
  modalComment.value = '';
  document.removeEventListener('keydown', onModalEcsKeydown);
  uploadForm.removeEventListener('submit', onUploadFormSubmit);
  uploadForm.reset();
}


//функция добавляющая эти состояния
function openUploadField () {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEcsKeydown);

  addScaleListener();
}

uploadFile.addEventListener('change', openUploadField);

