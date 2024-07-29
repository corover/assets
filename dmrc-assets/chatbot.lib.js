// function gtag() {
//   dataLayer.push(arguments);
// }

// let scriptGA = document.createElement("script");
// scriptGA.type = "text/javascript";
// scriptGA.src = "https://www.googletagmanager.com/gtag/js?id=UA-122267849-1";
// document.getElementsByTagName("head")[0].appendChild(scriptGA);
// (window.dataLayer = window.dataLayer || []),
//   gtag("js", new Date()),
//   gtag("config", "UA-122267849-1");

const script = document.createElement("script");

script.src =
  "https://cdn.jsdelivr.net/gh/corover/assets@dmrc-29-07-2024/dmrc-assets/chatbot.lib.main.js?" +
  new Date().getTime();

script.src = "/dmrc-assets/chatbot.lib.main.js?" + new Date().getTime();

document.head.appendChild(script);
