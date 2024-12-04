"use strict";

import { ref } from "./utils.js";

const popup = ref("popup");

ref("addItem").addEventListener("click", () => {
  popup.style.display = "block";
});

ref("cancel").addEventListener("click", () => {
  popup.style.display = "none";
});
