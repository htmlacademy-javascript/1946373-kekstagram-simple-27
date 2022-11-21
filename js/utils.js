//для функций
const SHOW_TIME = 6000;

//Функция возвращающая целое число
function getRandomNumber (min, max) {
  if (min <= max && min >= 0) {
    return Math.floor (Math.random() * (max - min + 1) ) + min; }

}


//Функция для проверки максимальной длины строки
function getLenghtRange (stringChecked, maxLenght) {
  return stringChecked.lenght <= maxLenght;
}

//Функция для закрытия окна при нажатии Escape
const isEscapeKey = (evt) => evt.key === 'Escape';


//Стили для сообщения при ошибке
const showIfError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_TIME);
};


export {getRandomNumber, getLenghtRange, isEscapeKey, showIfError};
