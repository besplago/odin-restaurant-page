import "./styles.css";
import { generateHomeContent } from "./modules/home.js";
import { generateMenuContent } from "./modules/menu.js";
import { generateAboutContent } from "./modules/about.js";
import { generateContactContent } from "./modules/contact.js";

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  const navItems = document.querySelectorAll("nav ul li");

  contentDiv.innerHTML = generateHomeContent();

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      switch (index) {
        case 0:
          contentDiv.innerHTML = generateHomeContent();
          break;
        case 1:
          contentDiv.innerHTML = generateMenuContent();
          break;
        case 2:
          contentDiv.innerHTML = generateAboutContent();
          break;
        case 3:
          contentDiv.innerHTML = generateContactContent();
          break;
      }
    });
  });
});
