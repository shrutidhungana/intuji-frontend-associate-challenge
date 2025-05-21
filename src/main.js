import topbarHTML from "./components/topbar/topbar.html?raw";
import "./styles/main.scss";
import initTopbar from "./components/topbar/topbar.js"; // Importing the function from topbar.js

document.addEventListener("DOMContentLoaded", () => {
  const topbarPlaceholder = document.getElementById("topbar-placeholder");

  if (topbarPlaceholder) {
    topbarPlaceholder.innerHTML = topbarHTML;

    initTopbar();
  }
});
