const fullPhotoElement = document.querySelector('.img-upload__preview img');
const effectLevelElement = document.querySelector('.effect-level');
const effectsListElement = document.querySelector('.effects__list');

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

export {onEffectChange};
