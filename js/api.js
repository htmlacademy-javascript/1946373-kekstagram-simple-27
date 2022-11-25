import { showIfError } from './utils.js';
const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const URL_PHOTO = `${URL_SERVER}/data`;
const DEMONSTRATION_IF_ERROR = 'Ошибка Загрузки';
// const SENDING_FORM = 'Не удалось отправить форму. Попробуйте ещё раз';
const getData = (onSuccess) => {
  fetch(
    URL_PHOTO,
  )
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showIfError(DEMONSTRATION_IF_ERROR);
    });
};

export {getData};
