const LOGO_URL =
  "https://cdn.jsdelivr.net/gh/corover/assets@dmrc-29-07-2024/dmrc-assets/dmrc-va-launcher.png";
const CLOSE_ICON = `<svg fill="#ffffff" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-98 -98 686.00 686.00" xml:space="preserve" stroke="#ffffff" stroke-width="24.5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>`;
const LAUNCHER_CSS = `background-size: cover;
background-position: 6px -3px;
background-repeat: no-repeat;
background-color: transparent;
width: 120px;
height: 120px;
border-radius: 100%;
-webkit-box-shadow: 0 0 50px 0 rgb(0 0 0 / 6%);
box-shadow: 0 0 50px 0 rgb(0 0 0 / 6%);
-webkit-backface-visibility: hidden; 
-webkit-transition: all 0.5s; 
transition: all 0.5s; 
cursor: pointer; 
z-index: 9; 
border-radius: 50%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;`;

const INIT_CSS = `position: fixed;
z-index: 999999999;
background-color: transparent;
display: flex;
justify-content: flex-end;
align-items: center;
bottom: 54px;
right: 20px;
width: fit-content;
max-width: 95%;
`;

const FULL_DISPLAY_CSS = `border-radius: 8px;
box-sizing: border-box;
right: 0; 
width: 418px !important; 
max-width: none; 
position: fixed; 
z-index: 999; 
bottom: 0px; 
visibility: visible; 
opacity: 1;
box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); 
-webkit-box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); 
-moz-box-shadow: 0 7px 6px 1px rgba(0,0,0,.16); 
height: 80%; right:32px`;

const MOBILE_CSS = `border-radius: 8px; 
box-sizing: border-box;
right: 0; 
width: 100% !important;
max-width: none; 
position: fixed; 
z-index: 999;
bottom: 0px; 
visibility: visible; 
opacity: 1;
box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%);
-webkit-box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); 
-moz-box-shadow: 0 7px 6px 1px rgba(0,0,0,.16); 
height: 100%;`;

let isOpen = false;

const iframe = document.createElement("iframe");
const launcher = document.createElement("div");
const mainDiv = document.createElement("div");
const close = document.createElement("div");

const fixCSS = () => {
  if (isOpen) {
    launcher.style.display = "none";
    iframe.style.display = "block";
    mainDiv.style.cssText =
      window.innerWidth <= 416 ? MOBILE_CSS : FULL_DISPLAY_CSS;
    close.style.display = "block";
  } else {
    iframe.style.display = "none";
    launcher.style.display = "block";
    mainDiv.style.cssText = INIT_CSS;
    close.style.display = "none";
  }
};

const setIframe = () => {
  iframe.className = "dmrc_frame";
  iframe.id = "dmrc_chatbot";
  iframe.setAttribute(
    "allow",
    "geolocation https://chatbot.delhimetrorail.com/; microphone https://chatbot.delhimetrorail.com/; camera; otp-credentials; midi; accelerometer; gyroscope; payment"
  );
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.position = "relative";
  iframe.style.margin = 0;
  iframe.style.marginBottom = "7px";
  iframe.style.border = "none";
  iframe.style.overflow = "hidden";
  iframe.style.display = "block";
  iframe.style.borderRadius = "8px";
  iframe.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
  iframe.style.backgroundColor = "white";
  iframe.style.display = "none";
};

window.onresize = () => {
  fixCSS();
};

(() => {
  setIframe();
  launcher.style.cssText = LAUNCHER_CSS;
  mainDiv.id = "dmrc-chatbot-main";
  mainDiv.style.cssText = INIT_CSS;
  close.innerHTML = CLOSE_ICON;
  close.style.width = "20px";
  close.style.height = "20px";
  close.style.position = "absolute";
  close.style.top = "18px";
  close.style.right = "15px";
  close.style.cursor = "pointer";
  close.style.display = "none";

  close.onclick = () => {
    isOpen = false;
    fixCSS();
  };

  const image = document.createElement("img");
  image.src = LOGO_URL;
  image.style.width = "100%";

  launcher.appendChild(image);

  launcher.onclick = () => {
    isOpen = true;
    iframe.src = "https://chatbot.delhimetrorail.com/#widget";
    fixCSS();
  };

  mainDiv.appendChild(launcher);
  mainDiv.appendChild(iframe);
  mainDiv.appendChild(close);

  document.body.appendChild(mainDiv);
})();
