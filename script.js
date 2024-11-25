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
let card = gallery.querySelector('.card');
let cardPhoto = card.querySelector('.card__photo');
let cardInfo = card.querySelector('.card__info-container');
let cardTitle = cardInfo.querySelector('.card__title');
let buttonLike = cardInfo.querySelector('.card__like-button');

function takeLike() {
  buttonLike.classList.toggle('card__like-button_active');
}

buttonLike.addEventListener('click', takeLike)

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

// ф-я отправки формы user-info
function handleFormSubmitUserInfo(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;

  popupUserInfo.classList.remove('popup_active');
}

// слушатель на кнопку submit
formUserInfo.addEventListener('submit', handleFormSubmitUserInfo);
