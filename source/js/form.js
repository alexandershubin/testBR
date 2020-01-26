'use strict';
window.addEventListener('DOMContentLoaded', function () {

  const link = document.querySelector(".button-desktop");
  const popup = document.querySelector(".modal");
  const close = popup.querySelector(".modal__close");
  const login = popup.querySelector("[name=login]");
  const phone = popup.querySelector("[name=phone]");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");


  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("login", "name");
  } catch (err) {
    isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("overlay-modal");
    body.style.overflow = `hidden`;
    if (storage) {
      login.value = storage;
      phone.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-modal");
    body.style.overflow = `inherit`;
  });

  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("overlay-modal");
    body.style.overflow = `inherit`;
  });

  popup.addEventListener("submit", function (evt) {
    if (!login.value || !phone.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      formPage.offsetWidth = formPage.offsetWidth;
      popup.classList.add("modal-error");
      console.log("Нужно Имя и телефон");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("overlay-modal");
        body.style.overflow = `inherit`;
      }
    }
  });
});
