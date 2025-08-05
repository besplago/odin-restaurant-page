import "./styles.css";
import { generateHomeContent } from "./modules/home.js";
import { generateMenuContent } from "./modules/menu.js";
import { generateAboutContent } from "./modules/about.js";
import { generateContactContent } from "./modules/contact.js";

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = generateHomeContent();
  //   contentDiv.innerHTML = generateMenuContent();
  //   contentDiv.innerHTML = generateAboutContent();
  //   contentDiv.innerHTML = generateContactContent();
});
