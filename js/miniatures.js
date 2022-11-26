const picturesWrapper = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

const usersGallery = (galleryValues) => {//функция создающая фотографии
  const pictureFragment = document.createDocumentFragment(); //создание нового элемента через document.createDocumentFragment

  galleryValues.forEach(({ url, likes, comments}) => { //.forEach - запускает перебор значений массива
    const picture = pictureTemplate.content.cloneNode(true);
    picture.querySelector('.picture__img').src = url; //адрес изображений
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments;

    pictureFragment.appendChild(picture);//добавляем ребенка
  });

  picturesWrapper.appendChild(pictureFragment);
};

export {usersGallery};
