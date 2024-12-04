"use strict";

function ref(id) {
  return document.getElementById(id);
}

const popup = ref("popup");

ref("addItem").addEventListener("click", () => {
  popup.style.display = "block";
});

ref("cancel").addEventListener("click", () => {
  popup.style.display = "none";
});
