
function getRandomNumber (min, max) {
  if (min <= max && min >= 0) {
    return Math.floor (Math.random() * (max - min + 1) ) + min; }

  return NaN;
}

getRandomNumber (1, 18);


function getLenghtRange (stringChecked, maxLenght) {
  if (stringChecked.lenght <= maxLenght) {
    return true;
  }
  return false;
}
getLenghtRange ('Привет!', 20);
