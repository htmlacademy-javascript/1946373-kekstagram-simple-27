//для функций


//Функция возвращающая целое число
function getRandomNumber (min, max) {
  if (min <= max && min >= 0) {
    return Math.floor (Math.random() * (max - min + 1) ) + min; }

//  return NaN;
}


//Функция для проверки максимальной длины строки
function getLenghtRange (stringChecked, maxLenght) {
  return stringChecked.lenght <= maxLenght;
}

export {getRandomNumber, getLenghtRange};
