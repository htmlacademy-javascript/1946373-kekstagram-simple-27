import { showIfError } from './utils.js';

const URL_SERVER = 'https://27.javascript.pages.academy/kekstagram-simple';
const URL_PHOTO = `${URL_SERVER}/data`;

const getData = (onSuccess) => {
  fetch(
    URL_PHOTO,
  )
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showIfError('Ошибка загрузки');
    });
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      URL_SERVER,
      {
        method: 'POST',
        body,
      },
    );
    if(!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }
    onSuccess();
  }
  catch(error) {
    onFail(error.message);
  }
};

export {getData, sendData};
