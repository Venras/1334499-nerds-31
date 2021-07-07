const modal = document.querySelector(".modal");
const popup = document.querySelector(".send-us-popup-button");
const close = modal.querySelector(".modal-close");
const formModal = modal.querySelector("form");
const formName = modal.querySelector("[name=send-us-name]");
const formEmail = modal.querySelector("[name=send-us-email]");

let isStorageSupport = false;
let storage = "";

try {
  storage = localStorage.getItem("Name");
} catch (e) {
  isStorageSupport = true;
}

popup.addEventListener("click", function (e) {
  e.preventDefault(),
    modal.classList.add("modal-show"),
    storage
      ? ((formName.value = storage), formEmail.focus())
      : formName.focus();
}),
  close.addEventListener("click", function (e) {
    e.preventDefault(),
      modal.classList.remove("modal-show"),
      modal.classList.remove("modal-error");
  }),
  formModal.addEventListener("submit", function (e) {
    formName.value
      ? formEmail.value
        ? isStorageSupport &&
          (localStorage.setItem("Name", formName.value),
          localStorage.setItem("Email", formEmail.value))
        : (e.preventDefault(),
          modal.classList.remove("modal-error"),
          (modal.offsetWidth = modal.offsetWidth),
          modal.classList.add("modal-error"),
          formEmail.focus())
      : (e.preventDefault(),
        modal.classList.remove("modal-error"),
        (modal.offsetWidth = modal.offsetWidth),
        modal.classList.add("modal-error"),
        formName.focus());
  }),
  window.addEventListener("keydown", function (e) {
    27 === e.keyCode &&
      (e.preventDefault(),
      modal.classList.contains("modal-show") &&
        (modal.classList.remove("modal-show"),
        modal.classList.remove("modal-error")));
  });
