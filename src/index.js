import "./styles.css";
import { generateHomeContent } from "./homeModule.js";

const contentDiv = document.getElementById("content");
contentDiv.innerHTML = generateHomeContent();
