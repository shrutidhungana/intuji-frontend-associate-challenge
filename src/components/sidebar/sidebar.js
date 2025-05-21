import GalleryIcon from "../../icons/gallery.svg";

import DashboardIcon from "../../icons/dashboard.svg";
import ScheduleIcon from "../../icons/schedule.svg";
import MessageIcon from "../../icons/sms.svg";
import AnalyticsIcon from "../../icons/analytics.svg"
import TeamIcon from "../../icons//team.svg";

import ProfileIcon from "../../icons/user.svg";
import SettingsIcon from "../../icons/setting.svg";

import HelpIcon from "../../icons/help.svg";
import LogoutIcon from "../../icons/logout.svg";

export default function initSidebar() {
 

  function injectSVG(containerId, SvgComponent) {
    const container = document.getElementById(containerId);
   
    if (container) {
      container.innerHTML = "";
      const imgElement = document.createElement("img");
      imgElement.src = SvgComponent; 
      imgElement.alt = "Icon"; 
    
      container.appendChild(imgElement);
      
    }
  }

    injectSVG("sidebar-logo-icon", GalleryIcon);

    injectSVG("dashboard-icon", DashboardIcon);
    injectSVG("schedule-icon", ScheduleIcon);
    injectSVG("message-icon", MessageIcon);
    injectSVG("analytics-icon", AnalyticsIcon);
    injectSVG("team-icon", TeamIcon);

    injectSVG("profile-icon", ProfileIcon);
    injectSVG("settings-icon", SettingsIcon);

    injectSVG("help-icon", HelpIcon);
    injectSVG("logout-icon", LogoutIcon);

}