import {usersGallery} from './miniatures.js';//функция создающая фотографии
import './form.js';
import { getData } from './api.js';
import {setUserFormSubmit} from './form-validator.js';
import {onСloseUploadField} from './form.js';
getData((pictures) => {
  usersGallery(pictures);
});
setUserFormSubmit(onСloseUploadField);

