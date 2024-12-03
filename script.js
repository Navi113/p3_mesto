// profile
let profile = document.querySelector('.profile');
let userName = profile.querySelector('.profile__title');
let userJob = profile.querySelector('.profile__subtitle');
let buttonEdit = profile.querySelector('.profile__button-edit');
let buttonAdd = profile.querySelector('.profile__button-add');

// popup edit-profile
let popupUserInfo = document.querySelector('#popup-user-info');
let formUserInfo = popupUserInfo.querySelector('#form-user-info');
let nameInput = formUserInfo.querySelector('#name');
let jobInput = formUserInfo.querySelector('#description');
let buttonSbmtUserInfo = formUserInfo.querySelector('#button-submit-user-info');
let buttonClsUserInfo = formUserInfo.querySelector('#button-close-user-info');

// popup add-photo
let popupAddPhoto = document.querySelector('#popup-photo-info');
let formGallery = popupAddPhoto.querySelector('#form-photo-info');
let formNamePhoto = formGallery.querySelector('#name-photo');
let formUrlPhoto = formGallery.querySelector('#url-photo');
let buttonSbmtGallery = formGallery.querySelector('#button-submit-photo-info');
let buttonClsGallery = formGallery.querySelector('#button-close-photo-info');

// Card
let gallery = document.querySelector('.gallery');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// цикл перебирающий массив initialCards и вставляющий их в разметку
for (let i = 0; i < initialCards.length; i++) {
  addPhoto(initialCards[i].name, initialCards[i].link)
}

//  слушатель на кнопку edit
buttonEdit.addEventListener('click', function () {
  popupUserInfo.classList.add('popup_active'); // присвоил класс для открытия попапа
  
  nameInput.value = userName.textContent; // содержимое имени профиля передал в форму
  jobInput.value = userJob.textContent; // содержимое описания профиля передал в форму
});

//  слушатель на кнопку add
buttonAdd.addEventListener('click', function () {
  popupAddPhoto.classList.add('popup_active'); // присвоил класс для открытия попапа
});

// слушатель на кнопку close попапа user-info
buttonClsUserInfo.addEventListener('click', function () {
  popupUserInfo.classList.remove('popup_active');
});

// слушатель на кнопку закрыть попап добавления информации о пользователе
buttonClsUserInfo.addEventListener('click', function (evt) {
  evt.preventDefault();

  popupUserInfo.classList.remove('popup_active');
});

// слушатель на кнопку закрыть попап в форме добавления нового фото
buttonClsGallery.addEventListener('click', function () {
  popupAddPhoto.classList.remove('popup_active');
});

// ф-я отправки формы user-info
function handleFormSubmitUserInfo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  popupUserInfo.classList.remove('popup_active');
}

// ф-я поставить лайк
function takeLike() {
  buttonLike.classList.toggle('card__like-button_active');
}

// ф-я добавить новое фото в галлерею
function addPhoto(nameValue, photoValue) {
  const template = document.querySelector('#template').content; // наши шаблон и его содержимое
  const cardElement = template.querySelector('.card').cloneNode(true); // клонировали содержимое шаблона

  cardElement.querySelector('.card__photo').src = photoValue; // вставили значение из формы в клонированную разметку
  cardElement.querySelector('.card__title').textContent = nameValue; // вставили значение из формы в клонированную разметку
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) { // слушатель на кнопку лайка в клонированной разметке
    evt.target.classList.toggle('card__like-button_active'); // смена класса у конкретной выбранной иконки лайка
  });

  nameValue.value = ''; //чистим поля формы
  photoValue.value = '';

  popupAddPhoto.classList.remove('popup_active'); // закрываем попап

  gallery.prepend(cardElement); // добавляем разметку в DOM
}

// слушатель на форму попапа добавления информации о пользователе
formUserInfo.addEventListener('submit', handleFormSubmitUserInfo);

// слушатель форму попапа добаления фото
formGallery.addEventListener('submit', function (evt) {
  evt.preventDefault();

  addPhoto(formNamePhoto.value, formUrlPhoto.value)
});