import "./styles/main.scss";

import topbarHTML from "./components/topbar/topbar.html?raw";
import initTopbar from "./components/topbar/topbar.js"; 

import sidebarHTML from "./components/sidebar/sidebar.html?raw";
import initSidebar from "./components/sidebar/sidebar.js";

import projectOverviewHTML from "./components/project-overview/project-overview.html?raw";
import initProjectOverview from "./components/project-overview/project-overview.js";


document.addEventListener("DOMContentLoaded", () => {
  const topbarPlaceholder = document.getElementById("topbar-placeholder");

  if (topbarPlaceholder) {
    topbarPlaceholder.innerHTML = topbarHTML;

    initTopbar();
  }
 const sidebarContainer = document.getElementById("sidebar-container");
 if (sidebarContainer) {
   sidebarContainer.innerHTML = sidebarHTML;

   initSidebar();
 }
  
    const projectOverviewContainer = document.getElementById(
      "project-overview-container"
    );
    if (projectOverviewContainer) {
      projectOverviewContainer.innerHTML = projectOverviewHTML;
      initProjectOverview();
    }

});
