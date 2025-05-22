import GalleryIcon from "../../icons/gallery.svg";


export default function initRecentTransaction() {
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

  injectSVG("figma-icon", GalleryIcon);
  injectSVG("youtube-icon", GalleryIcon);
  injectSVG("spotify-icon", GalleryIcon);
  injectSVG("freepik-icon", GalleryIcon);
 
}