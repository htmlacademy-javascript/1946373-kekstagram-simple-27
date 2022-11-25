// import { EFFECTS } from './constants.js';
const fullPhotoElement = document.querySelector('.img-upload__preview img');
const effectLevelElement = document.querySelector('.effect-level');
const effectsListElement = document.querySelector('.effects__list');
// const sliderElement = document.querySelector('.effect-level__slider');
// const valueElement = document.querySelector('.effect-level__value');

const onEffectChange = (evt) => {
  fullPhotoElement.className = 'effects__preview--none';
  const target = evt.target.value;
  effectLevelElement.classList.remove('hidden');
  fullPhotoElement.style.filter = '';
  if (target === 'none') {
    effectLevelElement.classList.add('hidden');
  }
  fullPhotoElement.classList.add(`effects__preview--${target}`);// меняется класс
};
effectsListElement.addEventListener('click', onEffectChange);


// const DEFAULT_EFFECT = EFFECTS[0];
// const chosenEffect = DEFAULT_EFFECT;

// const isDefault = () => chosenEffect === DEFAULT_EFFECT;

// const updateSlider = () => {
//   sliderElement.classList.remove('hidden');
//   sliderElement.noUiSlider.updateOptions({
//     range: {
//       min: chosenEffect.min,
//       max: chosenEffect.max,
//     },
//     step: chosenEffect.step,
//     start: chosenEffect.max,
//   });

//   if (isDefault()) {
//     sliderElement.classList.add('hidden');
//   }
// };

// //Функция работы слайдера
// const onSliderUpdate = () => {
//   fullPhotoElement.style.filter = 'none';
//   fullPhotoElement.className = '';
//   valueElement.value = '';
//   if (isDefault()) {
//     return;
//   }
//   const sliderValue = sliderElement.noUiSlider.get();
//   fullPhotoElement.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
//   fullPhotoElement.classList.add(`effects__previw--${chosenEffect.name}`);
//   valueElement.value = sliderValue;
// };

// //Создание слайдера
// noUiSlider.create(sliderElement, {
//   range: {
//     min: DEFAULT_EFFECT.min,
//     max: DEFAULT_EFFECT.max,
//   },
//   start: DEFAULT_EFFECT.max,
//   step: DEFAULT_EFFECT.step,
//   connect: 'lower',
// });

// updateSlider();

// sliderElement.noUiSlider.on('update', );//onSliderUpdate

export { onEffectChange };
