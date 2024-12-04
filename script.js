// profile
const profile = document.querySelector('.profile');
const userName = profile.querySelector('.profile__title');
const userJob = profile.querySelector('.profile__subtitle');
const buttonEdit = profile.querySelector('.profile__button-edit');
const buttonAdd = profile.querySelector('.profile__button-add');

// popup edit-profile
const popupUserInfo = document.querySelector('#popup-user-info');
const formUserInfo = popupUserInfo.querySelector('#form-user-info');
const nameInput = formUserInfo.querySelector('#name');
const jobInput = formUserInfo.querySelector('#description');
const buttonSbmtUserInfo = formUserInfo.querySelector('#button-submit-user-info');
const buttonClsUserInfo = formUserInfo.querySelector('#button-close-user-info');

// popup add-photo
const popupAddPhoto = document.querySelector('#popup-photo-info');
const formGallery = popupAddPhoto.querySelector('#form-photo-info');
const formNamePhoto = formGallery.querySelector('#name-photo');
const formUrlPhoto = formGallery.querySelector('#url-photo');
const buttonSbmtGallery = formGallery.querySelector('#button-submit-photo-info');
const buttonClsGallery = formGallery.querySelector('#button-close-photo-info');

// Card
const gallery = document.querySelector('.gallery');
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

// ф-я добавить новое фото в галлерею
function addPhoto(nameValue, photoValue) {
  const template = document.querySelector('#template').content; // наши шаблон и его содержимое
  const cardElement = template.querySelector('.card').cloneNode(true); // клонировали содержимое шаблона

  cardElement.querySelector('.card__photo').src = photoValue; // вставили значение из формы в клонированную разметку
  cardElement.querySelector('.card__title').textContent = nameValue; // вставили значение из формы в клонированную разметку
  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) { // слушатель на кнопку лайка в клонированной разметке
    evt.target.classList.toggle('card__like-button_active'); // смена класса у конкретной выбранной иконки лайка
  });

  cardElement.querySelector('.card__delete-button').addEventListener('click', function () { // сдушатель на кнопку удалить с функцией удаления конкретной карты
    const cardItem = cardElement.querySelector('.card__delete-button').closest('.card'); // в создающейся карте нахожу ближайший элемент к кнопке удалить
    cardItem.remove(); // удаляю его по клику на кнопку удалить
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