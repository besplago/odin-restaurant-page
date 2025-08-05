import "./styles.css";
import { generateHomeContent } from "./homeModule.js";

document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = generateHomeContent();
});
