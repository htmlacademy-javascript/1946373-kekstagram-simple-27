
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


//module4

const DESCRIPTION_LENDHT = 25; //массив из 25 объектов
const DESCRIPTION = [
  'разработка ',
  'закат',
  'котики',
  'путешествие',
  'природа',
  'кофе',
  'завтрак',
  'свадьба',
  'пляж',
  'море',
  'солнце',
  'машины',
  'ресторан',
  'фитнес зал',
  'животные',
  'знакомства',
  'девайсы',
  'ремонт',
  'квартиры',
  'английский',
  'обучение',
  'продажи',
  'индивидуальные предприниматели',
  'самозанятые',
  'курс валют'
]; // создаем сами объекты массива

const photoDescr = function (currentIndex) {
  return {
    id: currentIndex + 1, //(это для себя)Почему начальное значение переменной цикла задано как currentIndex + 1? Это нужно, чтобы искать минимальное значение после элемента с позицией currentIndex.
    url: `photos/${currentIndex + 1}.jpg`,
    description: DESCRIPTION[currentIndex],
    likes: getLenghtRange(15,200),
    comments: getLenghtRange(0,200)
  };
};

const keksPhotos = Array.from({ length:DESCRIPTION_LENDHT }, (value, ind) => photoDescr(ind));
console.log(keksPhotos); //ВОПРОС: почему все равно подчеркивает консоль лог?
