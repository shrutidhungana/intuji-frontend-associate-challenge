import "./styles/main.scss";

import topbarHTML from "./components/topbar/topbar.html?raw";
import initTopbar from "./components/topbar/topbar.js";

import sidebarHTML from "./components/sidebar/sidebar.html?raw";
import initSidebar from "./components/sidebar/sidebar.js";

import projectOverviewHTML from "./components/project-overview/project-overview.html?raw";
import initProjectOverview from "./components/project-overview/project-overview.js";

import analyticsHTML from "./components/analytics/analytics.html?raw";
import initAnalytics from "./components/analytics/analytics.js";

document.addEventListener("DOMContentLoaded", () => {
  const topbarPlaceholder = document.getElementById("topbar-placeholder");

  if (topbarPlaceholder) {
    topbarPlaceholder.innerHTML = topbarHTML;
    initTopbar();
  } else {
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

  const analyticsContainerPlaceholder = document.getElementById(
    "analytics-container-placeholder"
  );

  if (analyticsContainerPlaceholder) {
    analyticsContainerPlaceholder.innerHTML = analyticsHTML;

    initAnalytics();
  }
});
