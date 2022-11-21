//МАСШТАБ
const Scale = {
  STEP: 25,
  MIN: 25,
  MAX: 100
};

const buttonSmall = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const buttonValue = document.querySelector('.scale__control--value');
const uploadPreviewElement = document.querySelector('.img-upload__preview img');


const onPictureSmaller = () => {
  const {STEP, MIN, MAX} = Scale;
  let currentScale = buttonValue.value;//переменная передающая значения к строке
  currentScale = parseInt(currentScale, 10);
  if (currentScale > MIN) {
    currentScale = currentScale - STEP;
    buttonValue.value = `${currentScale}%`;
    uploadPreviewElement.style.transform = `scale( ${currentScale / MAX})`;
  } else {
    buttonValue.value = `${MIN}%`;
  }
};

const onPictureBigger = () => {
  const {STEP, MAX} = Scale;
  let currentScale = buttonValue.value;
  currentScale = parseInt(currentScale, 10);
  if (currentScale < MAX) {
    currentScale = currentScale + STEP;
    buttonValue.value = `${currentScale}%`;
    uploadPreviewElement.style.transform = `scale(${currentScale / MAX})`;
  } else {
    buttonValue.value = `${MAX}%`;
  }
};

const addScaleListener = () => {
  buttonSmall.addEventListener('click', onPictureSmaller);
  buttonBigger.addEventListener('click', onPictureBigger);
};

const removeScaleListener = () => {
  buttonSmall.removeEventListener('click', onPictureSmaller);
  buttonBigger.removeEventListener('click', onPictureBigger);
};

export {addScaleListener, removeScaleListener};


