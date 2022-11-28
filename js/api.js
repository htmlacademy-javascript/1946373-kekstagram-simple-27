import { showIfError } from './utils.js';
import { getErrorMessage } from './form-validator.js';

const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const URL_PHOTO = `${URL_SERVER}/data`;
const DEMONSTRATION_IF_ERROR = 'Ошибка Загрузки';

const getData = (data) => {
  fetch(URL_PHOTO)
    .then((response) =>
      response.json())

    .then((photos) => data(photos))
    .catch(() => showIfError(DEMONSTRATION_IF_ERROR));
};

const sendData = (body, success, unblock) => {
  fetch(URL_SERVER, {
    method: 'POST',
    body,
  },)

    .then((response) => {
      if (response.ok) {
        success();
        unblock();

      } else {
        getErrorMessage(unblock);
      }

    })
    .catch(() => getErrorMessage(unblock));
};

export {getData, sendData};
