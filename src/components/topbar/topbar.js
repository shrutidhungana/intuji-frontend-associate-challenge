import SearchIcon from "../../icons/search.svg";
import BellIcon from "../../icons/bell.svg";
import MessageIcon from "../../icons/message.svg";
import GalleryIcon from "../../icons/gallery.svg";
import ArrowDownIcon from "../../icons/down.svg";

export default function initTopbar() {
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

  injectSVG("search-icon", SearchIcon);
  injectSVG("notification-icon", BellIcon);
  injectSVG("message-icon", MessageIcon);
  injectSVG("profile-avatar", GalleryIcon);
  injectSVG("dropdown-icon", ArrowDownIcon);
}
