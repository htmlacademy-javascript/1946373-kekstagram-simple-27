import {keksPhotos} from './generation-photos.js';//генерируем сами объекты
import {usersGallery} from './miniatures.js';//функция создающая фотографии
usersGallery(keksPhotos);
import './form.js'; // closeUserModal
// import { getData } from './api.js';
// import {closeUploadField} from './form.js';

// getData((pictures) => {
//   keksPhotos(pictures);
// });

// usersGallery(closeUploadField);


// import { getPictures } from './picture.js';
// import { setUserFormSubmit} from './validate-form.js';
// import { closeUserModal } from './user-modal.js';
// import { getData } from './api.js';

// getData((pictures) => {
//   getPictures(pictures);
// });

// setUserFormSubmit(closeUserModal);
