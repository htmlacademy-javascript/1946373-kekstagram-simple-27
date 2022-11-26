// import {getRandomNumber} from './utils.js';
// import {DESCRIPTION_LENDHT, DESCRIPTION} from './constants.js';
// // import {usersGallery} from './miniatures.js';

// //начинаем генерировать карточки
// const photoDescr = function (currentIndex) {
//   return {
//     id: currentIndex + 1, //(это для себя)Почему начальное значение переменной цикла задано как currentIndex + 1? Это нужно, чтобы искать минимальное значение после элемента с позицией currentIndex.
//     url: `photos/${currentIndex + 1}.jpg`,
//     description: DESCRIPTION[currentIndex],
//     likes: getRandomNumber(15,200),
//     comments: getRandomNumber(0,200)
//   };
// };


// //генерируем сами объекты
// const keksPhotos = Array.from({ length:DESCRIPTION_LENDHT }, (value, ind) => photoDescr(ind));
// // usersGallery(keksPhotos);
// export {keksPhotos};
