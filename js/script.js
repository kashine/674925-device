"use strict";

var link = document.querySelector(".write-us-btn");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-e-mail]");
var text = popup.querySelector("[name=letter]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        user.value = storage;
        email.focus();
    } else {
        user.focus();
    }
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!user.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.add("modal-ersror");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("user", user.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});
