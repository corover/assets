let cdnScript3 = document.createElement("script");
cdnScript3.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
cdnScript3.async = true;
// document.head.appendChild(cdnScript3);

let newCDN = document.createElement("script");
newCDN.src = "https://cdn.unibots.in/headerbidding/common/hb.js";
newCDN.async = true;
// document.head.appendChild(newCDN);

window.unibots = window.unibots || { cmd: [] };
// var IR_UB;
// var IR_UB_300x250;
// var IR_UB_300x250_2;
// var IR_UB_NEW;
// var IR_STICKY;
// var IR_300x250_IFRAME;

var isSplashScreenOpen = false;

function runNewNewDisplayAds() {
  window.unibotshb = window.unibotshb || { cmd: [] };
  unibotshb.cmd.push(() => {
    ubHB("irctc");
  });
}

const isMob = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
};

let overlayDiv = document.createElement("div");
overlayDiv.style.cssText = `
display: none;
position: fixed;
inset: 0px;
background-color: #ffffff26;
z-index: 99999;
-webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
`;
document.body.appendChild(overlayDiv);
let loading = true;
let loader = document.createElement("div");
loader.style.cssText = `
height: 100%;
width: 100%;
text-align: center;
//display: none;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: sans-serif;
position: absolute;
top:0;
left:0;
z-index: 9999;
background: white;
margin: 0px 0px 7px;
border: none;
overflow: hidden;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 7px 6px 1px;
    `;
loader.innerHTML = `
<div class="disha-loader"></div>
    <p style="        font-size: 25px;
    font-weight: 600;
    color: #535d66;
    width: 100%;
  
    margin-top: 10px;
    margin-bottom: 0px;">Please Wait...</p>    
    `;

const defineGPTslots = (all) => {
  //   googletag.cmd.push(function () {
  //     if (all && !isMob()) {
  //       IR_UB_NEW = googletag
  //         .defineSlot(
  //           "/22686085093/irctc_chatbot_300x250",
  //           [300, 250],
  //           "div-gpt-ad-1677756304492-0"
  //         )
  //         .addService(googletag.pubads());
  //     }
  //     IR_UB = googletag
  //       .defineSlot(
  //         "/22686085093/irctc_320x50",
  //         [320, 50],
  //         "div-gpt-ad-1686031619172-0"
  //       )
  //       .addService(googletag.pubads());
  //   .addService(googletag.pubads());
  // IR_UB_300x250 = googletag
  //   .defineSlot(
  //     "/22686085093/irctc_banner_300x250",
  //     [300, 250],
  //     "div-gpt-ad-1664429992698-0"
  //   )
  //   .addService(googletag.pubads());
  // IR_UB_300x250_2 = googletag
  //   .defineSlot(
  //     "/22686085093/irctc_banner1_300x250",
  //     [300, 250],
  //     "div-gpt-ad-1664430029564-0"
  //   )
  //   .addService(googletag.pubads());
  // IR_300x250_IFRAME = googletag
  //   .defineSlot(
  //     "/21748009408/IRCTC_300x250",
  //     [300, 250],
  //     "div-gpt-ad-1601563234445-0"
  //   )
  //   .addService(googletag.pubads());
  //     googletag.pubads().enableSingleRequest();
  //     googletag.enableServices();
  //   });
};

const setPlaceholderMaxHeight = () => {
  let cubeDisha = document.querySelector("#cube")?.firstChild;

  if (cubeDisha) {
    let stylesCubeDisha = window.getComputedStyle(cubeDisha);
    let heightCubeDisha = parseFloat(stylesCubeDisha.height.split("px")[0]);
    let topCubeDisha = parseFloat(stylesCubeDisha.top.split("px")[0]);
    let totalMarginFromTop = heightCubeDisha + topCubeDisha - 28.0;
    if (totalMarginFromTop < 400) {
      let pla = document.getElementById("disha-placeholder-card");
      pla.style.maxHeight = `calc(100vh - ${totalMarginFromTop}px)`;
    }
  }
};

(() => {
  let isMobile = false,
    isFirstTime = false;

  function getMediaQuery(maxHeight) {
    return window.matchMedia(`(max-height: ${maxHeight}px)`);
  }

  const addAutoAdd = () => {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    let autoAdScript1 = document.createElement("script");
    autoAdScript1.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8692878304946020";
    autoAdScript1.async = true;

    let autoAdScript2 = document.createElement("script");
    autoAdScript2.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9620429535585055";
    autoAdScript2.async = true;

    let autoAdScript3 = document.createElement("script");
    autoAdScript3.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9126873611544123";
    autoAdScript3.async = true;

    let am = (hour == 9 && minutes >= 55) || (hour === 10 && minutes <= 20);

    let pm = (hour == 10 && minutes >= 55) || (hour === 11 && minutes <= 20);

    if (!am && !pm) {
      document.head.appendChild(autoAdScript1);
      document.head.appendChild(autoAdScript2);
      document.head.appendChild(autoAdScript3);
    }
  };

  addAutoAdd();

  function getMediaobject() {
    let mediaObj = {
      placeholderWidth: "375px",
      placeholderHeight: "470px",
      placeholderBottom: "0px",
      cross: {
        size: "35px",

        padding: "10px",
        top: "25px",
        right: "10px",
      },
      bannerHeight: "180px",
      WhiteMarginTop: "22px",
      scrollHeight: "223px",
      videoAd: {
        height: "270px",
        width: "100%",
        margin: "-32px",
        scale: "1.0",
      },
      belowAD: {
        height: "250px",
        width: "320px",
        margin: "24px",
        scale: "0.8",
      },
      button: {
        font: "16px",
        padding: "10px",
        icon: "25px",
        marginLeft: "8px",
      },
    };

    if (getMediaQuery(680).matches) {
      mediaObj = {
        placeholderWidth: "370px",
        placeholderHeight: "330px",
        placeholderBottom: "-20%",
        cross: {
          size: "1.5em",

          padding: "0.3em",
          top: "13px",
          right: "10px",
        },
        bannerHeight: "132px",
        WhiteMarginTop: "10px",
        scrollHeight: "223px",
        videoAd: {
          height: "270px",
          width: "100%",
          margin: "-36px",
          scale: "0.9",
        },
        belowAD: {
          height: "250px",
          width: "320px",
          margin: "24px",
          scale: "0.8",
        },
        button: {
          font: "14px",
          padding: "7px",
          icon: "20px",
          marginLeft: "6px",
        },
      };

      return mediaObj;
    }

    if (getMediaQuery(780).matches) {
      mediaObj = {
        placeholderWidth: "350px",
        placeholderHeight: "420px",
        placeholderBottom: "-25px",
        cross: {
          size: "25px",

          padding: "7px",
          top: "18px",
          right: "10px",
        },
        bannerHeight: "158px",
        WhiteMarginTop: "12px",
        scrollHeight: "223px",
        videoAd: {
          height: "270px",
          width: "100%",
          margin: "-32px",
          scale: "1.0",
        },
        belowAD: {
          height: "250px",
          width: "320px",
          margin: "24px",
          scale: "0.8",
        },
        button: {
          font: "16px",
          padding: "10px",
          icon: "25px",
          marginLeft: "8px",
        },
      };

      return mediaObj;
    }

    if (getMediaQuery(900).matches) {
      mediaObj = {
        placeholderWidth: "350px",
        placeholderHeight: "440px",
        placeholderBottom: "0px",
        cross: {
          size: "25px",

          padding: "7px",
          top: "18px",
          right: "10px",
        },
        bannerHeight: "158px",
        WhiteMarginTop: "12px",
        scrollHeight: "223px",
        videoAd: {
          height: "270px",
          width: "100%",
          margin: "-32px",
          scale: "1.0",
        },
        belowAD: {
          height: "250px",
          width: "320px",
          margin: "24px",
          scale: "0.8",
        },
        button: {
          font: "16px",
          padding: "10px",
          icon: "25px",
          marginLeft: "8px",
        },
      };

      return mediaObj;
    }

    return mediaObj;
  }

  let mediaObj = getMediaobject();

  function checkMobile() {
    // const ua = navigator.userAgent;
    // if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    //   isMobile = false;
    // } else if (
    //   /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
    //     ua
    //   )
    // ) {
    //   isMobile = true;
    // } else {
    //   isMobile = false;
    // }

    if (window.screen.width < 600) return (isMobile = true);
    else isMobile = false;
  }
  const isTime = () => {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (
      (hour == 9 && minutes >= 30) ||
      hour === 10 ||
      (hour === 11 && minutes <= 30)
    )
      return true;
    return false;
  };
  checkMobile();

  if (true) {
    let isOpen = false,
      initialized = false;
    isSmall = false;
    let adActive = false;
    let svg = `<svg t="1588073885514" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5428" width="32" height="32"><path d="M680.5504 640.887467a30.651733 30.651733 0 0 1 0 43.4176c-6.007467 6.007467-13.858133 9.0112-21.7088 9.0112-7.850667 0-15.701333-3.003733-21.7088-9.0112L512.068267 559.3088l-125.064534 125.064533c-6.007467 6.007467-13.858133 9.0112-21.7088 9.0112-7.850667 0-15.701333-3.003733-21.7088-9.0112a30.651733 30.651733 0 0 1 0-43.4176l125.064534-125.064533-125.064534-125.1328a30.651733 30.651733 0 0 1 0-43.4176 30.651733 30.651733 0 0 1 43.4176 0L512.068267 472.405333l125.064533-125.064533a30.651733 30.651733 0 0 1 43.4176 0 30.651733 30.651733 0 0 1 0 43.4176L555.554133 515.822933l124.996267 125.064534z" p-id="5429" fill="#fff"></path></svg>`;
    let blob = new Blob([svg], { type: "image/svg+xml" });
    let url = URL.createObjectURL(blob);
    let url_EN = "https://www.youtube.com/embed/gQcqoZvIieg";
    let url_HI = "https://www.youtube.com/embed/Ej6qO56sE-Q";

    let miniCSS =
      "z-index: 9; height: fit-content; position: fixed; border-radius: 50%; bottom: 38px; width: fit-content; right: 45px; box-shadow: none;";
    let initCSS =
      "display: none; z-index: 9; height: fit-content; position: fixed; border-radius: 50%; bottom: 38px; width: fit-content; right: 45px; box-shadow: none;";
    let smallCSS =
      "border-radius: 8px; box-sizing: border-box;right: 0; width: fit-content !important; max-width: none; position: fixed; z-index: 999; bottom: 0px; visibility: visible; opacity: 1; min-width: 410px; right: 16px; height: calc(var(--vh, 1vh) * 100); left:50%; transform:translateX(-50%)";
    let maxCSS =
      "border-radius: 8px; box-sizing: border-box;right: 0; width: 100% !important; max-width: none; position: fixed; z-index: 999; bottom: 0px; visibility: visible; opacity: 1;box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); -webkit-box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); -moz-box-shadow: 0 7px 6px 1px rgba(0,0,0,.16); height: 100%";
    //Creates Div
    let urlMaintained = window.location.href;
    var adRefreshTime = 5000;
    let actionTimerFlag = false;

    let dishaWrapper = document.createElement("div");
    dishaWrapper.style.cssText = `
        position: fixed;
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
    dishaWrapper.id = "askDishaSdk";

    function setDishaWrapper() {
      // if (!isMobile || window.location.href.includes("indianrail"))
      if (true) {
        dishaWrapper.style.cssText = `
        position: fixed;
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
      } else {
        dishaWrapper.style.cssText = `
        position: fixed;
        z-index: 999999999;
        background-color: transparent;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        bottom: 8px;
        right: 8px;
        width: fit-content;
        max-width: 95%;
        z-index:9999999999999;
        `;
      }
    }

    // dishaWrapper.draggable = true;
    let messageWrapper = document.createElement("div");
    messageWrapper.style.cssText = `
        position: relative;
        max-width: 256px;
        margin-right: 10px;
        margin-bottom: 32px;
        `;
    let messageDialog = document.createElement("img");
    messageDialog.id = "messageDialog";
    messageDialog.decoding = "async";
    messageDialog.src =
      "https://dishav3.ap-south-1.linodeobjects.com/Thumbsup.gif";
    messageDialog.style.cssText =
      "width: 238px; max-width: 100%; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 9; position: static; border-top-left-radius: 18px; border-top-right-radius: 18px; border-bottom-left-radius: 18px; border-bottom-right-radius: 0px !important; display: none;";
    // messageDialog.style.cssText =
    //   "width: 238px; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 99999; position: fixed; border-top-left-radius: 18px; border-top-right-radius: 18px; border-bottom-left-radius: 18px; bottom: 18px; right: 143px; border-bottom-right-radius: 0px !important; display: block;";
    let messageDialogClose = document.createElement("img");
    messageDialogClose.decoding = "async";
    messageDialogClose.id = "messageDialogClose";
    messageDialogClose.src = url;
    messageDialogClose.style.cssText =
      " background-color: rgb(255, 87, 34); position: absolute; right: 8px; top: 8px; width: 16px; box-shadow: rgb(0 0 0 / 6%) 0px 0px 50px 0px; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 9; border-radius: 18px; display: none;";
    // messageDialogClose.style.cssText =
    //   " background-color: rgb(255, 87, 34); width: 16px; box-shadow: rgb(0 0 0 / 6%) 0px 0px 50px 0px; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 99999; border-radius: 18px; position: fixed; bottom: 76px; right: 157px; display: block;";
    messageWrapper.appendChild(messageDialog);
    messageWrapper.appendChild(messageDialogClose);
    // messageWrapper.style.display = "none";
    let launcher = document.createElement("div");
    launcher.id = "askDishaLuncher";
    launcher.style.cssText =
      "background-size: cover;background-position: 6px -3px;background-repeat: no-repeat;background-color: transparent; width: 120px; height: 120px; border-radius: 100%; -webkit-box-shadow: 0 0 50px 0 rgb(0 0 0 / 6%); box-shadow: 0 0 50px 0 rgb(0 0 0 / 6%);  -webkit-backface-visibility: hidden; -webkit-transition: all 0.5s; transition: all 0.5s; cursor: pointer; z-index: 9; border-radius: 50%;";
    checkMobile();
    if (isMobile) {
      // launcher.style.backgroundImage = `url("https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg")`;
      launcher.style.borderWidth = "0px";
      launcher.style.backgroundPosition = "center";
      messageWrapper.style.display = "none";
    } else {
      // launcher.style.backgroundImage = `url(
      //     "https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg"
      //   )`;
      launcher.style.backgroundPosition = "center";
    }
    let launcherImage = document.createElement("img");
    launcherImage.src =
      "https://sdk.irctc.corover.ai/askdisha-bucket/launcher.gif";
    launcherImage.style.width = "100%";
    launcherImage.style.text = "border-radius :50%";
    launcher.appendChild(launcherImage);
    launcher.draggable = true;
    let maxIcon = document.createElement("img");
    maxIcon.decoding = "async";
    maxIcon.src = "https://sdk.irctc.corover.ai/askdisha-bucket/minimum.png";
    maxIcon.style.cssText = `
        position: absolute;
        right: 100px;
        width: 16px;
        top: 0px;
        display: block;
       `;
    function switchIcon(ch) {
      let s;
      if (true) {
        if (!isSmall) {
          s = true;

          if (true) dealOfDay.style.display = `none`;

          remove320();
          adDownIframe2.style.display = `none`;
          maxIcon.src =
            "https://sdk.irctc.corover.ai/askdisha-bucket/maximise.png";
          dishaWrapper.style.bottom = "200px";

          dishaWrapper.style.right = "-18px";
          launcher.style.transform = "rotate(-12deg)";
          maxIcon.style.cssText = `
              position: absolute;
              right: 14px;
              width: 14px;
              top: -18px;
              transform: rotate(-168deg);
            `;

          //   else {
          //     dishaWrapper.style.left = "-6px";
          //     launcher.style.transform = "rotate(12deg)";
          //     maxIcon.style.cssText = `
          //    position: absolute;
          //    left: 6px;
          //    width: 14px;
          //    top: -18px;
          //    transform: rotate(-102deg);
          //  `;
          //   }

          launcher.style.width = "50px";
          launcher.style.height = "50px";
          launcher.style.minWidth = "50px";
          // launcher.style.borderWidth = "0px";
          // launcher.style.backgroundImage = `url("https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg")`;
          // launcher.style.backgroundPosition = "1px -3px";

          if (!isMobile) {
            messageWrapper.style.display = "none";
          }
          //   googletag.destroySlots([IR_UB]);
        } else {
          //   googletag.cmd.push(function () {
          //     IR_UB = googletag
          //       .defineSlot(
          //         "/21748009408/irctc.co.in_320x50_corover",
          //         [320, 50],
          //         "div-gpt-ad-1654160819405-0"
          //       )
          //       .addService(googletag.pubads());

          //     googletag.pubads().enableSingleRequest();
          //     googletag.enableServices();
          //   });

          //   googletag.cmd.push(function () {
          //     googletag.display("div-gpt-ad-1654160819405-0");
          //   });

          s = false;
          // messageDialog.style.display = "block";
          // messageDialogClose.style.display = "block";
          if (true) dealOfDay.style.display = `inline`;

          add320();
          adDownIframe2.style.display = `block`;
          setDishaWrapper();
          launcher.style.width = "120px";
          launcher.style.height = "120px";
          launcher.style.minWidth = "120px";
          // launcher.style.borderWidth = "6px";
          //   launcher.style.backgroundImage = `url(
          //   "https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg"
          // )`;
          //   launcher.style.backgroundPosition = "6px -3px";
          maxIcon.src =
            "https://sdk.irctc.corover.ai/askdisha-bucket/minimum.png";
          launcher.style.transform = "none";
          maxIcon.style.cssText = `
              position: absolute;
              right: 98px;
              width: 16px;
              top: -2px;
            `;

          if (!isMobile) {
            messageWrapper.style.display = "block";
          }
        }
        if (ch) isSmall = !isSmall;
        else
          setTimeout(() => {
            // console.log(1);
            isSmall = s;
            // console.log(isSmall);
          }, 1000);
      }
    }
    maxIcon.onclick = (e) => {
      // isSmall = !isSmall;
      e.preventDefault();
      e.stopPropagation();

      // e.preventDefault();
      switchIcon(true);
    };

    launcher.appendChild(maxIcon);
    launcher.addEventListener("touchmove", (ev) => {
      ev.preventDefault();
      switchIcon(false);
    });
    let ad = document.createElement("div");
    ad.setAttribute("id", "corover-ad");
    ad.style.position = "fixed";
    // ad.style.height = "480px";
    ad.style.left = "1%";
    ad.style.top =
      (window.devicePixelRatio > 1 && window.devicePixelRatio < 2) ||
      window.devicePixelRatio > 2.4
        ? "0%"
        : "4%";
    // ad.style.transform = "translate-y(-50%)";
    ad.style.background = "white";
    ad.style.borderRadius = "16px";
    ad.style.padding = "20px 0px";
    // ad.style.width = "70%";
    ad.style.boxShadow =
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
    ad.style.display = "none";
    ad.style.overflowX = "hidden";
    ad.style.height = "fit-content";
    // ad.style.height = "100%";
    ad.innerHTML += `
     <div
         style="
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           row-gap: 10px;
           height:100%;
         "
       >
         <div
           id="adContainer"
           style="
             width: 100%;
             position: relative;
             margin: 0 auto;
             display: flex;
             justify-content: center;
             flex-direction:column;
             align-items: center;
   
           "
         >
   
   <iframe id="feedBackIframe" src="about:blank" scrolling="no" style="margin-top:-10px;width:98%; height:253px; border:none; display:none"></iframe>
   
   <div id="adIframeContainer"  style="width:100%; height:310px; max-height:310px; overflow:hidden; display:flex; justify-content:center;">
   
   </div>
   
   <div style="display: flex;
   justify-content: space-between;
   align-items: center;width:90%;
   margin-top:15px;
   ">
   <a
             style="
   
             text-decoration: none;
             color: #1066b0;
             font-family: sans-serif;
             background-color: white;
             font-size: 20px;
             font-weight: 600;
             "
             href="https://youtu.be/gQcqoZvIieg"
             target="_blank"
             >Watch a Demo</a
           >
   
           <a
             style="
             text-decoration: none;
             color: #1066b0;
             font-family: sans-serif;
             background-color: white;
             font-size: 20px;
             font-weight: 600;
   
             "
             href="https://corover.ai/advertise/"
             target="_blank"
             >Advertise with us!</a
           >
   </div>
         </div>
       </div>
       `;

    let adCross = document.createElement("img");
    adCross.decoding = "async";
    adCross.src = url;
    adCross.id = "launcherClose";
    adCross.style.zIndex = "9";
    adCross.style.background = "#0000005e";
    adCross.style.width = "38px";
    adCross.style.cursor = "pointer";
    adCross.style.display = "none";
    // adCross.style.display = "b"
    adCross.style.borderRadius = "24px";
    adCross.style.right = "20px";
    adCross.style.top = "20px";
    adCross.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
    adCross.style.position = "absolute";

    ad.appendChild(adCross);

    //   let feedBackIframe = document.createElement("iframe");
    //   feedBackIframe.style.cssText = `
    // width:100%;
    // height:200px;
    // background-color:black
    // `;

    //   adCon.appendChild(feedBackIframe);

    adCross.onclick = () => {
      hideAd();
    };

    window.googletag = window.googletag || { cmd: [] };

    const adIframe = document.createElement("iframe");

    if (window.location.href.includes("indianrail"))
      adIframe.src =
        "https://assistant.corover.mobi/indianrailways/coroversdsm/ads_v2_left.html";
    else
      adIframe.src =
        "https://assistant.corover.mobi/irctc/coroversdsm/ads_v2_left.html";

    adIframe.width = "100%";
    adIframe.height = "100%";
    adIframe.style.cssText = "border:none;";
    adIframe.scrolling = "no";

    // const adDownIframe = document.createElement("iframe");
    // adDownIframe.src =
    //   "https://assistant.corover.mobi/irctc/coroversdsm/320x50_v2.html";

    defineGPTslots(true);

    const adDownIframe2 = document.createElement("iframe");
    adDownIframe2.src =
      "https://storage.googleapis.com/corover-prod-bucket/disha-eticket/320x50/index.html";
    // adDownIframe2.href = "https://irctc.corover.ai/";
    // adDownIframe2.target = "_blank";
    const adDownIframe = document.createElement("div");
    // adDownIframe.src = "https://assistant.corover.mobi/320x50_placeholder.html";
    adDownIframe.id = "div_ub_320x50";
    const adDownScript = document.createElement("script");
    // adDownIframe.id = "div-gpt-ad-1654160819405-0";

    //   adDownScript.innerHTML = `
    //        googletag.cmd.push(function () {
    //          googletag.display("div-gpt-ad-1654160819405-0");
    //        });
    //  `;

    const reloadADs = (all) => {
      //   defineGPTslots(all);
      //   googletag.cmd.push(function () {
      //     googletag.display("div-gpt-ad-1654160819405-0");
      //   });
      //   googletag.cmd.push(function () {
      //     googletag.display("div-gpt-ad-1686031619172-0");
      //   });
      //   if (all && !isMob()) {
      //     googletag.cmd.push(function () {
      //       googletag.display("div-gpt-ad-1677756304492-0");
      //     });
      //   }
    };

    const add320 = () => {
      adDownIframe.style.display = "block";
    };

    const remove320 = () => {
      adDownIframe.style.display = "none";
    };

    if (isMobile) {
      adDownIframe.style.cssText = `
   position:fixed;
   bottom:0px;
   right:5px;
   width:320px;
   height:50px;
   border:2px;
   `;
      adDownIframe2.style.cssText = `
   position:fixed;
   bottom:0px;
   right:5px;
   width:320px;
   height:50px;
   border:2px;
   cursor:pointer
   `;
    } else {
      adDownIframe.style.cssText = `
       position:fixed;
       bottom:0px;
       right:20px;
       width:320px;
       height:50px;
       border:2px;
       `;
      adDownIframe2.style.cssText = `
       position:fixed;
       bottom:0px;
       right:20px;
       width:320px;
       height:50px;
       border:2px;
       
       `;
    }

    adDownIframe.scrolling = "no";

    adDownIframe2.scrolling = "no";
    document.body.appendChild(adDownIframe);
    document.body.appendChild(adDownIframe2);
    const dealOfDay = document.createElement("a");
    // https://bit.ly/3gBANx7 PLUTOS
    //https://amzn.to/34WK1uY last
    dealOfDay.style.display = `inline`;
    if (isMobile) dealOfDay.href = "https://amzn.to/3ps6U6O";
    else dealOfDay.href = "https://amzn.to/3ps6U6O";

    dealOfDay.target = "_blank";
    dealOfDay.innerHTML = `
         <img width="156px" src="https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/DEALS....png" decoding="async"/>
         `;

    if (isMobile)
      dealOfDay.style.cssText = `
         position: fixed;
         bottom:42px;
         right:150px;
         `;
    else
      dealOfDay.style.cssText = `
         position: fixed;
         bottom:40px;
         right:150px;
         `;
    dealOfDay.style.zIndex = "9";
    document.body.appendChild(dealOfDay);

    if (isMobile) {
      adDownIframe.style.zIndex = "9";
      adDownIframe2.style.zIndex = "8";
      dealOfDay.style.zIndex = "99";
    } else {
      adDownIframe.style.zIndex = "2147483647";
      adDownIframe2.style.zIndex = "2147483646";
      dealOfDay.style.zIndex = "99999999999999";
    }

    setDishaWrapper();

    let cross = document.createElement("img");
    cross.decoding = "async";
    cross.src = url;
    cross.id = "launcherClose";
    cross.style.zIndex = "9";

    cross.style.background = "#f9f9f95e";
    cross.style.width = "38px";
    cross.style.cursor = "pointer";
    cross.style.display = "none";
    cross.style.borderRadius = "24px";
    cross.style.right = "10px";
    cross.style.top = "25px";
    // cross.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
    cross.style.position = "absolute";
    var d = document.createElement("div");
    d.style.cssText = initCSS;
    d.id = "corover-askDisha";
    d.appendChild(loader);
    document.body.appendChild(dishaWrapper);
    dishaWrapper.appendChild(d);
    dishaWrapper.appendChild(messageWrapper);
    // dishaWrapper.appendChild(messageDialog);
    // dishaWrapper.appendChild(messageDialogClose);
    d.appendChild(cross);
    //Creates iFrame
    var n = document.createElement("iframe");
    n.className = "disha-frame";
    n.id = "Disha-Bot";
    n.setAttribute(
      "allow",
      "geolocation https://irctc.corover.ai/; microphone https://irctc.corover.ai/; camera; otp-credentials; midi; accelerometer; gyroscope; payment"
    );
    n.style.width = "100%";
    n.style.height = "100%";
    // n.style.background = "transparent";
    n.style.position = "relative";
    n.style.margin = 0;
    n.style.marginBottom = "7px";
    n.style.border = "none";
    n.style.overflow = "hidden";
    n.style.display = "block";
    n.style.borderRadius = "8px";
    n.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
    n.style.backgroundColor = "white";
    n.style.webkitBoxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
    //Append iFrame inside Div
    d.appendChild(ad);
    dishaWrapper.appendChild(launcher);
    d.appendChild(n);
    // n.contentWindow.postMessage("botClosed", "*");
    let crossClose = document.createElement("img");
    crossClose.decoding = "async";
    crossClose.src = url;
    crossClose.style.width = "58px";
    crossClose.style.background = "#346db3";
    crossClose.style.height = "58px";
    crossClose.style.position = "fixed";
    crossClose.style.borderRadius = "29px";
    crossClose.style.cursor = "pointer";
    crossClose.style.right = "25px";
    crossClose.style.top = "25px";
    crossClose.style.pointer = "cursor";
    crossClose.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
    crossClose.style.webkitBoxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
    // crossClose.onclick = function (e) {
    //   alert();
    //   // n.contentWindow.postMessage("botClosed", "*");
    // };
    overlayDiv.appendChild(crossClose);
    //*
    // n.src = `https://assistant.corover.mobi/eticket/`;
    //#
    n.src = "about:blank";
    // setCSS();
    window.onresize = function () {
      // setAdWidth();
      setCSS();
    };
    // Listen to message from child window
    window.onmessage = function (e) {
      onMessage(e);
    };

    function checkForClick(e) {
      // console.log(e);
      if (
        e.origin &&
        e.origin.includes("assistant.corover.mobi") &&
        e.data &&
        e.data === "CLICKED"
      ) {
        resetTimer();
      }
    }

    function onMessage(e) {
      checkForToken(e);
      checkForState(e);
      checkForClick(e);
      checkForRecent(e);
      if (e.data === "LOADED") {
        if (!loading) loader.style.display = "none";
        else
          setTimeout(() => {
            loader.style.display = "none";
          }, 1000);
      }

      if (e.data === "GET_DISHA_DATA") {
        n.contentWindow.postMessage(
          {
            action: "GET_DISHA_DATA",
            data: localStorage.getItem("disha-data"),
          },
          "*"
        );
      }

      if (e.data?.action === "SET_DISHA_DATA") {
        localStorage.setItem("disha-data", e.data.data);
      }
    }
    //Launch Bot Function
    launcher.addEventListener(
      "click",
      () => {
        // console.log(1000);
        // ev.preventDefault();
        // window.open(`https://assistant.corover.mobi/eticket/`, "_blank").focus();
        botOpen();
        // setAdWidth();
      },
      false
    );
    // launcher.addEventListener(
    //   "touchstart",
    //   () => {
    //     botOpen();
    //   },
    //   false
    // );
    crossClose.addEventListener(
      "click",
      () => {
        hideAd();
        adActive = false;
        botClose();
      },
      false
    );
    crossClose.addEventListener(
      "touchstart",
      () => {
        hideAd();
        adActive = false;
        botClose();
      },
      false
    );
    cross.addEventListener(
      "click",
      () => {
        hideAd();
        adActive = false;
        botClose();
      },
      false
    );
    cross.addEventListener(
      "touchstart",
      () => {
        hideAd();
        adActive = false;
        botClose();
      },
      false
    );
    messageDialog.addEventListener(
      "touchstart",
      () => {
        // window.open(`https://assistant.corover.mobi/eticket/`, "_blank").focus();
        botOpen();
      },
      false
    );
    messageDialog.addEventListener(
      "click",
      () => {
        // window.open(`https://assistant.corover.mobi/eticket/`, "_blank").focus();
        botOpen();
      },
      false
    );
    messageDialogClose.addEventListener(
      "touchstart",
      () => {
        closeMessageDialog();
      },
      false
    );
    messageDialogClose.addEventListener(
      "click",
      () => {
        closeMessageDialog();
      },
      false
    );

    function closeMessageDialog() {
      messageDialogClose.style.display = "none";
      messageDialog.style.display = "none";
    }
    function botClose() {
      // console.log(isSmall);
      if (!isSmall) {
        messageDialog.style.display = "none";
        messageDialogClose.style.display = "none";
      } else {
        messageDialog.style.display = "none";
        messageDialogClose.style.display = "none";
      }

      isOpen = false;
      overlayDiv.style.display = "none";
      n.style.borderRadius = "50%";
      n.style.width = "1px";
      n.style.height = "1px";
      d.style.cssText = miniCSS;
      cross.style.display = "none";
      crossClose.style.display = "none";
      launcher.style.display = "block";
      if (true) dealOfDay.style.display = `inline`;

      // adDownIframe.style.display = `block`;
      add320();
      adDownIframe2.style.display = `block`;

      if (!isMobile && isSmall) {
        switchIcon();
      }

      hideAd();
    }

    const placeholderCard = document.createElement("div");
    placeholderCard.id = "disha-placeholder-card";
    placeholderCard.style.cssText = `
       width: ${mediaObj.placeholderWidth};
       position: fixed;
       bottom: 0px;
       border-top-left-radius: 23px;
       border-top-right-radius: 23px;
       right: 15px;
       z-index: 2147483647;
       background-color: white;
      height:auto;
       display: block;
       box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
       overflow-y:hidden;
       max-height:100vh;
           `;
    placeholderCard.innerHTML = `
         
    <a href="https://amzn.to/3i4lgCr" target="_blank" style=" 
    display: none;
    padding: 6px 20px;
    position: absolute;
    left: 0px;
    top: 75%;
    background-color: white;
    text-decoration: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    min-width: 68px;
    z-index: 999;
    border-top-right-radius: 18px;
    border-bottom-right-radius: 18px;
    ">
    
    <img style="    width: 40px;
    display: block;
    margin: 0 auto;" src="https://dishav3.ap-south-1.linodeobjects.com/amazon.png" alt="AmazonNudge" loading="lazy">
    <p style="    font: 700 10px Montserrat,Verdana;
    font-weight: 700;
    text-align: center;
    color: #ed193b;
    margin-top: 1px;
    margin-bottom: -2px;">SALE
    </p>
    </a>
           <img decoding="async" src="https://sdk.irctc.corover.ai/askdisha-bucket/white-cross.png" id="disha-banner-close" style="    z-index: 9;
           background: #8181815e;
           width: ${mediaObj.cross.size};
           height: ${mediaObj.cross.size};
           cursor: pointer;
           display: block;
           border-radius: 50%;
           right: ${mediaObj.cross.right};
           top: ${mediaObj.cross.top};
           position: absolute;
           padding: ${mediaObj.cross.padding};">
       
           <div style="cursor:pointer;width: 100%; height: ${mediaObj.bannerHeight}" id="disha-image">
             <img
               src="https://sdk.irctc.corover.ai/askdisha-bucket/IRCTC-banner-1.gif"
               style="width: 100%; height: 100%; border-radius: 8px"
               alt=""
               decoding = "async"
             />
           </div>
           <div style="    display: flex;
           justify-content: center;
           align-items: center;
           column-gap: 6px;
           width:96%;
           margin: 0px auto;
           ">
           <div
             style="
               display: flex;
               justify-content: center;
               align-items: center;
               background: #0068ff;
               width: 50%;
               margin: 0 auto;
               border-radius: 10px;
               padding: ${mediaObj.button.padding} 0px;
               cursor: pointer;
             "
             id="disha-banner-button"
           >
             <div
               style="
                 width: ${mediaObj.button.icon};
                 height: ${mediaObj.button.icon};
                 border-radius: 50%;
                 background: white;
                 display: flex;
                 justify-content: center;
                 align-items: center;
               "
             >
               <img
                 src="https://sdk.irctc.corover.ai/askdisha-bucket/train-blue.svg"
                 alt=""
                 style="width: 46%"
                 decoding = "async"
               />
             </div>
             <p
               style="
                 margin: 0;
                 margin-left: ${mediaObj.button.marginLeft};
                 font-family: sans-serif;
                 font-size: ${mediaObj.button.font};
                 color: white;
               "
             >
               Book Ticket
             </p>
           </div>
           <div
             style="
               display: flex;
               justify-content: center;
               align-items: center;
               background: #0068ff;
               width: 50%;
               margin: 0 auto;
               border-radius: 10px;
               padding: ${mediaObj.button.padding} 0px;
               cursor: pointer;
             "
             id="disha-banner-button2"
           >
             <div
               style="
                 width: ${mediaObj.button.icon};
                 height: ${mediaObj.button.icon};
                 border-radius: 50%;
                 background: transparent;
                 display: flex;
                 justify-content: center;
                 align-items: center;
               "
             >
               <img
                 src="https://sdk.irctc.corover.ai/askdisha-bucket/disha-support.png"
                 alt=""
                 style="width: 80%"
                 decoding = "async"
               />
             </div>
             <p
               style="
                 margin: 0;
                 margin-left: ${mediaObj.button.marginLeft};
                 font-family: sans-serif;
                 font-size: ${mediaObj.button.font};
                 color: white;
               "
             >
               Support
             </p>
           </div>
           </div>
           <div style=" text-align: center;
           font-family: sans-serif;">
           
           <p style="    margin: 0;
           font-size: 11px;
           margin-top: 5px;
           font-weight: 600;
           color: #555555;">...in a <span style="color: #4c84ea;">fast</span>, <span style="color: #4c84ea;">easy</span> and <span style="color: #4c84ea;">secure</span> way   <span style="    font-size: 9px;
           margin: 0;
           color: slategray;
           margin-top: 0px;">(Without your IRCTC password)</span></p>
         
           </div>
           <div
             style="
               width: 100%;
               background-color: #eaeaea;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               margin-top: ${mediaObj.WhiteMarginTop};
             "
           >
             <a
               href="https://amzn.to/34WK1uY"
               target="_blank"
               style="display: none; margin-bottom: -10px"
             >
               <img
                 width="156px"
                 src="https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/DEALS....png"
                 decoding="async"
               />
             </a>
          <div id="splash-scrollable" style="    width: 100%;
          display: flex;
          justify-content: flex-start;
          flex-direction:column;
          align-items: center;
          min-height: ${mediaObj.scrollHeight};
          max-height:${mediaObj.scrollHeight};
          overflow:auto;
          position:relative;
          ">

          <p style="
    position: absolute;
    background: white;
    top: 0px;
    left: 21px;
    padding: 0px 10px;
    border-bottom-right-radius: 4px;
">Ad</p>
           
          <iframe id="book-ticket-iframe" src="about:blank" scrolling="no" style="    padding: 0px;
          width: 100%;
          min-height: ${mediaObj.videoAd.height};
          justify-content: center;
          align-items: center;
          border: 0px;
          transform: scale(${mediaObj.videoAd.scale});
          margin-top: ${mediaObj.videoAd.margin};
          display:none;
          "></iframe>  
 
          <div id='div_ub_chatbot_300x250' style="display:none;">
         </div> 
         <img src="https://cdn.jsdelivr.net/gh/corover/assets@main/askdisha-bucket/300X250.gif" width="300px" height="250px"/>     
       </div>
           </div>
         `;
    let adIframescroll = document.createElement("iframe");
    adIframescroll.scrolling = "no";
    adIframescroll.frameborder = "0";
    adIframescroll.src =
      "https://d38k9a6ldw9syu.cloudfront.net/irctc/coroversdsm/adchatbot.html";
    adIframescroll.style.cssText = `
         height: ${mediaObj.belowAD.height}; ${mediaObj.belowAD.width}; margin: 0 auto; overflow-y:hidden; border:none
         `;

    // <div style="width: 320px; height: 50px; background-color: #dfdfdf;">
    //   <iframe
    //     src="https://assistant.corover.mobi/irctc/coroversdsm/inner_ad_320x50.html"
    //     style="width: 100%; height: 100%"
    //     frameborder="0"
    //   ></iframe>
    // </div>

    const openSupport = () => {
      let urlDeskTop = `https://irctc.corover.ai/?support=true`;
      let urlMobile = `https://irctc.corover.ai/?support=true/#web`;
      let url = "";
      if (isMobile) url = urlMobile;
      else url = urlDeskTop;

      if (!isOpen && !initialized) {
        botOpenWithURL(url);
      } else {
        if (!isOpen) botOpen();
      }
    };

    document.body.appendChild(placeholderCard);
    document.getElementById("disha-banner-button").onclick = botOpen;
    document.getElementById("disha-banner-button2").onclick = openSupport;
    document.getElementById("disha-image").onclick = botOpen;

    const openBanner = (bool) => {
      if (isMobile) {
        dishaWrapper.style.display = "flex";
        if (!isSmall) dealOfDay.style.display = "inline";
        if (!isSmall) add320();
        adDownIframe2.style.display = "block";
        placeholderCard.style.display = "none";
        return;
      }
      isSplashScreenOpen = bool;
      if (bool) {
        dishaWrapper.style.display = "none";
        dealOfDay.style.display = "none";
        remove320();
        adDownIframe2.style.display = "none";
        placeholderCard.style.display = "block";
        // document
        //   .getElementById("scrollIframeContainer")
        //   .appendChild(adIframescroll);
      } else {
        dishaWrapper.style.display = "flex";
        dealOfDay.style.display = "inline";
        add320();
        adDownIframe2.style.display = "block";
        placeholderCard.style.display = "none";
      }
    };
    openBanner(false);

    setTimeout(() => {
      if (!isOpen) openBanner(true);
    }, 4000);

    document.getElementById("disha-banner-close").onclick = () => {
      openBanner(false);
      // switchIcon();
    };

    function iOS() {
      return (
        [
          "iPad Simulator",
          "iPhone Simulator",
          "iPod Simulator",
          "iPad",
          "iPhone",
          "iPod",
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
      );
    }

    function botOpen() {
      if (isMobile) {
        if (iOS()) window.location.assign("https://irctc.corover.ai/#web");
        else window.open("https://irctc.corover.ai/#web", "_blank");
        return;
      }
      openBanner(false);
      // if (checkBookingOpenStatus()) {

      if (!initialized)
        setTimeout(() => {
          loading = false;
        }, 2000);
      lastTimeRefresh = new Date();
      messageDialog.style.display = "none";
      messageDialogClose.style.display = "none";
      overlayDiv.style.display = "block";
      // }
      n.contentWindow.postMessage("botOpen", "*");
      n.contentWindow.postMessage("hideCross", "*");
      n.style.borderRadius = "8px";
      n.style.width = "100%";
      n.style.height = "100%";
      isOpen = true;

      dealOfDay.style.display = `none`;

      remove320();
      adDownIframe2.style.display = `none`;

      launcher.style.display = "none";
      setCSS();

      if (!initialized && n.src == "about:blank") {
        // n.src = `https://assistant.corover.mobi/eticket/`;
        n.contentWindow.location.replace(`https://irctc.corover.ai/`);
        // console.log("Fresh Load");
        initialized = true;
        // document.getElementById("feedBackIframe").src =
        //   "https://assistant.corover.mobi/irctc/demo/test/index.html";
      } else {
      }
      setTimeout(() => {
        document.getElementById("adIframeContainer")?.appendChild(adIframe);
      }, 1000);
      cross.style.display = "none";
      crossClose.style.display = "block";
      adActive = isFirstTime ? false : true;
      isFirstTime = false;
      // ad.appendChild(videoFrame);
      if (!isMobile) {
        // setAdWidth();
      }
    }

    function botOpenWithURL(url) {
      if (isMobile) {
        if (iOS()) window.location.assign(url);
        else window.open(url, "_blank");
        return;
      }
      openBanner(false);
      overlayDiv.style.display = "block";
      // if (checkBookingOpenStatus()) {

      if (!initialized)
        setTimeout(() => {
          loading = false;
        }, 2000);

      lastTimeRefresh = new Date();
      messageDialog.style.display = "none";
      messageDialogClose.style.display = "none";
      // }
      n.contentWindow.postMessage("botOpen", "*");
      n.contentWindow.postMessage("hideCross", "*");
      n.style.borderRadius = "8px";
      n.style.width = "100%";
      n.style.height = "100%";
      isOpen = true;

      if (true) dealOfDay.style.display = `none`;

      remove320();
      adDownIframe2.style.display = `none`;

      launcher.style.display = "none";
      setCSS();

      if (!initialized && n.src == "about:blank") {
        // n.src = `https://assistant.corover.mobi/eticket/`;
        n.contentWindow.location.replace(url);
        // console.log("Fresh Load");
        initialized = true;
        // document.getElementById("feedBackIframe").src =
        //   "https://assistant.corover.mobi/irctc/demo/test/index.html";
      } else {
      }

      cross.style.display = "none";
      crossClose.style.display = "block";
      adActive = false;
      isFirstTime = false;
    }

    function checkForToken(e) {
      if (e.data == "getToken") {
        getToken();
        return;
      }
      try {
        let req = JSON.parse(e.data);
        if (req.token) {
          setToken(req.cxtoken);
        }
      } catch (e) {}
    }
    function checkForState(e) {
      if (e.data == "getState") {
        getState();
        return;
      }
      try {
        let req = JSON.parse(e.data);
        if (req.isState) {
          setState(req.state);
        }
      } catch (e) {}
    }
    function checkForRecent(e) {
      if (e.data == "getRecent") {
        getRecent();
        return;
      }
      try {
        let req = JSON.parse(e.data);
        if (req.isRecent) {
          setRecent(req.recent);
        }
      } catch (e) {}
    }
    function setRecent(value) {
      if (
        value == undefined ||
        value == null ||
        value == "undefined" ||
        value == "null"
      ) {
        return;
      }

      let date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      document.cookie = `recents=${value};expires=${date}`;
    }
    function getRecent() {
      const cookies = Cookie();
      let recents = null;
      try {
        recents = cookies["recents"];
      } catch (error) {
        console.log(error);
      }

      if (
        recents == undefined ||
        recents == null ||
        recents == "undefined" ||
        recents == "null"
      ) {
        return;
      }
      n.contentWindow.postMessage(
        JSON.stringify({
          isRecent: recents ? true : false,
          recent: recents,
        }),
        "*"
      );
    }
    function setToken(value) {
      // console.log("Token:", value);
      if (
        value == undefined ||
        value == null ||
        value == "undefined" ||
        value == "null"
      ) {
        return;
      }

      let date = new Date();
      date.setFullYear(date.getFullYear() + 1);
      document.cookie = `cxtoken=${value};expires=${date}`;
    }
    function getToken() {
      const cookies = Cookie();
      let token = null;
      try {
        token = cookies["cxtoken"];
      } catch (error) {
        console.log(error);
      }

      if (
        token == undefined ||
        token == null ||
        token == "undefined" ||
        token == "null"
      ) {
        return;
      }
      n.contentWindow.postMessage(
        JSON.stringify({
          token: token ? true : false,
          cxtoken: token,
        }),
        "*"
      );
    }
    function setState(value) {
      let age = 2 * 60;
      document.cookie = `state=${value};max-age=${age};`;
    }
    function getState() {
      const cookies = Cookie();
      let state = null;
      try {
        state = cookies["state"];
      } catch (error) {
        console.log(error);
      }
      n.contentWindow.postMessage(
        JSON.stringify({
          isState: state ? true : false,
          state: state,
        }),
        "*"
      );
    }
    function setCSS() {
      // console.log("isOpen:", isOpen);
      if (isOpen) {
        if (window.innerWidth <= 640) {
          d.style.cssText = maxCSS;
          n.style.height = "100%";
          loader.style.height = "100%";
          hideAd();
          n.contentWindow.postMessage("hideCross", "*");
        } else {
          d.style.cssText = smallCSS;
          n.style.height = "100%";
          loader.style.height = "100%";
          // if (ad.childElementCount == 1) ad.appendChild(videoFrame);
          // setAdWidth();
          // n.contentWindow.postMessage("showCross", "*");
        }
      }
    }
    function setAdWidth() {
      if (adActive && !isMobile) {
        ad.style.display = "block";
        ad.style.width = window.innerWidth - 450 + "px";
      }
    }
    function hideAd() {
      ad.style.display = "none";
      try {
        document.getElementById("adIframeContainer").removeChild(adIframe);
      } catch (e) {
        // console.log(e);
      }
    }
    n.onload = function (e) {
      adActive = true;
      cross.style.display = "none";
      if (!isMobile) {
        // hideAd();
        setTimeout(() => {
          // botOpen();
          // hideAd();
        }, 2000);
        // setTimeout(() => {
        //   hideAd();
        // }, 3000);
      } else {
        // setTimeout(() => {
        //   console.log(
        //     "TEST:",
        //     document.activeElement == document.getElementById("Disha-Bot"),
        //     document.activeElement
        //   );
        //   if (
        //     document.activeElement == document.getElementById("Disha-Bot") &&
        //     isOpen
        //   ) {
        //     setAdWidth();
        //     return;
        //   }
        //   // n.contentWindow.postMessage("botClosed", "*");
        // }, 10000);
      }
    };

    function Cookie() {
      const cookies = document.cookie
        .split(";")
        .map((cookie) => cookie.split("="))
        .reduce(
          (accumulator, [key, value]) => ({
            ...accumulator,
            [key.trim()]: decodeURIComponent(value),
          }),
          {}
        );
      return cookies;
    }
    checkMobile();
    // if (isMobile) maxIcon.style.display = "block";
    // else maxIcon.style.display = "none";
    n.contentWindow.postMessage("hideCross", "*");
    // bottom: 16px;
    //   right: 23px;
    if (true) {
      launcher.style.width = "120px";
      launcher.style.height = "120px";
      launcher.style.right = "0px";
      launcher.style.bottom = "0px";
      launcher.style.position = "relative";
    }
    document.addEventListener("click", function (event) {
      if (event.target.className == "launchAskDisha") {
        const inputs = document.querySelectorAll(".ui-inputtext");

        if (inputs.length > 0) {
          const source = inputs[0].value.split(" - ")[1];
          const destination = inputs[1].value.split(" - ")[1];
          const quota = inputs[4].innerText;
          const date = inputs[2].value;

          if (source && destination) {
            let urlDeskTop = `https://irctc.corover.ai/?source=${source}&destination=${destination}&date=${date}&quota=${quota}`;
            let urlMobile = `https://irctc.corover.ai/?source=${source}&destination=${destination}&date=${date}&quota=${quota}/#web`;
            let url = "";
            if (isMobile) url = urlMobile;
            else url = urlDeskTop;

            if (!isOpen && !initialized) {
              botOpenWithURL(url);
            } else {
              if (!isOpen) botOpen();

              n.contentWindow.postMessage(
                { source, destination, quota, date },
                "*"
              );
            }
          } else {
            let urlDeskTop = `https://irctc.corover.ai/?clicked=true`;
            let urlMobile = `https://irctc.corover.ai/?clicked=true/#web`;
            let url = "";
            if (isMobile) url = urlMobile;
            else url = urlDeskTop;
            if (!isOpen && !initialized) {
              botOpenWithURL(url);
            } else {
              if (!isOpen) botOpen();
            }
          }
        } else {
          //   botOpen();
          let urlDeskTop = `https://irctc.corover.ai/?clicked=true`;
          let urlMobile = `https://irctc.corover.ai/?clicked=true/#web`;
          let url = "";
          if (isMobile) url = urlMobile;
          else url = urlDeskTop;
          if (!isOpen && !initialized) {
            botOpenWithURL(url);
          } else {
            if (!isOpen) botOpen();
          }
        }

        // DD/MM/yyyy
      }
      // if (event.target.id == "launchAskDisha") {
      //   botOpen();
      // }
      if (event.target.innerText) {
        if (event.target.innerText.trim() == "ASK DISHA") {
          botOpen();
        }
      }
    });

    setInterval(() => {
      checkLoginModel();
      setPlaceholderMaxHeight();
    }, 1000);

    const overlayWidget = document.createElement("img");
    // 70 and 63

    overlayWidget.src =
      "https://sdk.irctc.corover.ai/askdisha-bucket/launcher.gif";
    overlayWidget.style.cssText = `
     height: 110px;
     width: 103px;
     border-radius: 50%;
     position: fixed;
     bottom: 35px;
     right: 25px;
    
     z-index: 9999;
     display:none;
     `;
    document.body.appendChild(overlayWidget);
    overlayWidget.onclick = () => {
      if (iOS()) window.location.assign("https://irctc.corover.ai/#web");
      else window.open("https://irctc.corover.ai/#web", "_blank");
    };
    // launcher.style.backgroundImage = `url("")`;
    // launcher.style.borderWidth = "0px";
    // launcher.style.backgroundPosition = "center";

    function checkLoginModel() {
      if (!isMobile) return;
      let loginPage = document.querySelector(
        "body > app-root > app-home > div.header-fix > app-header > p-dialog.ng-tns-c19-2 > div"
      );
      dishaWrapper.style.zIndex = "999";
      if (loginPage) {
        dishaWrapper.style.zIndex = "9";
        placeholderCard.style.zIndex = "9";
        launcher.style.visibility = "hidden";
        overlayWidget.style.display = "block";
        dealOfDay.style.zIndex = "9";

        adDownIframe.style.zIndex = "9";
        adDownIframe2.style.zIndex = "8";
      } else {
        launcher.style.visibility = "visible";
        overlayWidget.style.display = "none";
        dishaWrapper.style.zIndex = "999999999";
        placeholderCard.style.zIndex = "999";
        dealOfDay.style.zIndex = "99999999999999";

        adDownIframe.style.zIndex = "2147483647";
        adDownIframe2.style.zIndex = "2147483646";
      }
    }

    //  Ads Configurations

    var lastTimeRefresh = new Date();
    let refreshTimer = 45;
    const resetTimer = (e) => {
      checkForVideoAd();
      // console.log("check");
      // let isHomePage = window.location.href.indexOf("train-search") != -1;

      let current = new Date();
      // console.log(1);
      if ((current - lastTimeRefresh) / 1000 > refreshTimer) {
        if (!isSmall) {
          refreshHomeAdWindow();
          lastTimeRefresh = current;
        }
      }
    };

    window.top.addEventListener("click", resetTimer, false);
    window.top.addEventListener("touchstart", resetTimer, false);
    window.top.addEventListener("keypress", resetTimer, false);
    window.top.addEventListener("DOMMouseScroll", resetTimer, false);
    window.top.addEventListener("mousewheel", resetTimer, false);

    const runNewDisplayAd = () => {
      //   if (!isMob()) {
      //     googletag.cmd.push(function () {
      //       googletag.display("div-gpt-ad-1677756304492-0");
      //     });
      //   }
    };

    setTimeout(() => {
      runNewDisplayAd();
    }, 2000);

    function splashMagic2() {
      // if (!window.location.href.includes("booking/train-list")) {
      //   let scrollingDiv = document.getElementById("splash-scrollable");
      //   setTimeout(() => {
      //     scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
      //   }, 2000);
      //   setTimeout(() => {
      //     scrollingDiv.scrollTop = 0;
      //   }, 5000);
      // }
    }

    function refreshHomeAdWindow() {
      //   if (isOpen) {
      //     document.getElementById("adIframeContainer").removeChild(adIframe);
      //     setTimeout(() => {
      //       document.getElementById("adIframeContainer").appendChild(adIframe);
      //     }, 500);
      //   } else {
      //     googletag.cmd.push(function () {
      //       if (!isMob()) {
      //         googletag.pubads().refresh([IR_UB_NEW]);
      //       }
      //       googletag.pubads().refresh([IR_UB]);
      //     });
      //     if (!isSplashScreenOpen) {
      //       remove320();
      //       setTimeout(() => {
      //         add320();
      //       }, 500);
      //     }
      //   }
      //   if (!isOpen && !isMobile) {
      //     splashMagic2();
      //     // if (document.getElementById("scrollIframeContainer"))
      //     //   document
      //     //     .getElementById("scrollIframeContainer")
      //     //     .removeChild(adIframescroll);
      //     // setTimeout(() => {
      //     //   document
      //     //     .getElementById("scrollIframeContainer")
      //     //     .appendChild(adIframescroll);
      //     // }, 500);
      //   }
    }
  }

  // function setAd() {
  //   const videoAddElement = document.getElementById("div-ub-irctc");
  //   if (!videoAddElement) {
  //     let cdnScript3 = document.createElement("script");
  //     cdnScript3.src = "https://cdn.unibots.in/ubplayer/player.js";
  //     cdnScript3.id = "videoAdCdn";
  //     cdnScript3.async = true;

  //     document.head.appendChild(cdnScript3);
  //     if (isMobile) {
  //       let adDiv = document.createElement("div");
  //       adDiv.id = "div-ub-irctc";
  //       adDiv.style.alignItems = "center";
  //       adDiv.style.justifyContent = "center";
  //       adDiv.style.width = "100%";

  //       //append Ad here!
  //       let script3 = document.createElement("script");

  //       script3.async = true;

  //       adDiv.appendChild(script3);

  //       script3.innerHTML = `
  //         window.unibots = window.unibots || { cmd: [] };
  //         unibots.cmd.push(()=>{ unibotsPlayer("irctc"); });
  //       `;
  //       // getElementsByClassName("clearfix")[2];
  //       document.body.appendChild(adDiv);
  //     } else {
  //       let adDiv = document.createElement("div");
  //       adDiv.id = "div-ub-irctc";
  //       adDiv.style.display = "flex";
  //       adDiv.style.alignItems = "center";
  //       adDiv.style.justifyContent = "center";
  //       adDiv.style.width = "100%";
  //       adDiv.style.marginTop = "20px";

  //       //append Ad here!
  //       let script3 = document.createElement("script");

  //       script3.async = true;

  //       adDiv.appendChild(script3);

  //       script3.innerHTML = `
  //         window.unibots = window.unibots || { cmd: [] };
  //         unibots.cmd.push(()=>{ unibotsPlayer("irctc"); });
  //       `;

  //       document.getElementsByClassName("clearfix")[5].appendChild(adDiv);
  //     }
  //   }
  // }

  // function setAd() {
  //   const videoAddElement = document.getElementById("div-ub-irctc");
  //   if (!videoAddElement) {
  //     let cdnScript3 = document.createElement("script");
  //     cdnScript3.src = "https://cdn.unibots.in/ubplayer/player.js";
  //     cdnScript3.id = "videoAdCdn";
  //     cdnScript3.async = true;

  //     document.head.appendChild(cdnScript3);
  //     if (isMobile) {
  //       //append Ad here!
  //       // parentVideoAdDiv.insertAdjacentHTML(
  //       //   "afterend",
  //       //   "<div id = 'div-ub-irctc'>"
  //       // );
  //       // window.unibots = window.unibots || { cmd: [] };
  //       // unibots.cmd.push(() => {
  //       //   unibotsPlayer("irctc");
  //       // });
  //     } else {
  //       let adDiv = document.createElement("div");
  //       adDiv.id = "div-ub-irctc";
  //       adDiv.style.alignItems = "center";
  //       adDiv.style.justifyContent = "center";
  //       adDiv.style.width = "100%";
  //       document.getElementsByClassName("clearfix")[4].appendChild(adDiv);
  //       window.unibots = window.unibots || { cmd: [] };
  //       unibots.cmd.push(() => {
  //         unibotsPlayer("irctc");
  //       });
  //     }
  //   }
  // }

  function removeAd() {
    const videoAddElement = document.getElementById("div-ub-irctc");
    if (videoAddElement) videoAddElement.remove();
  }

  function checkForVideoAd() {
    let isHomePage = window.location.href.indexOf("train-search") != -1;
    if (isHomePage) {
      // setAd();
    } else {
      let videoAdCdn = document.getElementById("videoAdCdn");
      if (videoAdCdn) {
        videoAdCdn.parentNode.removeChild(videoAdCdn);
      }

      // removeAd();
    }
  }

  setTimeout(() => {
    // checkForVideoAd();
  }, 2000);

  function setVideoAdHeader() {
    let videoScript = document.createElement("script");
    videoScript.src = "https://cdn.unibotscdn.com/ubplayer/player.js";
    videoScript.async = true;

    document.head.appendChild(videoScript);
  }

  function setVideoAd(setHeader) {
    setVideoAdHeader();
    try {
      let leftover = document.querySelectorAll("#adContainer1")[0];
      let parent = leftover.parentElement;
      parent.removeChild(leftover);
    } catch (err) {}
    if (!isMobile) {
      try {
        let adContainer = document.createElement("div");
        adContainer.id = "adContainer1";
        adContainer.style.cssText = `
             display: flex;
             justify-content: center;
             align-items: center;
             width: fit-content;
             border: 1px solid gainsboro;
             padding: 12px 12px;
             border-radius: 10px;
             box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
             column-gap: 30px;
             margin: 25px auto;
             `;
        document
          .querySelectorAll("div.container")[3]
          .insertBefore(
            adContainer,
            document.querySelectorAll("div.container")[3].childNodes[0]
          );
        adContainer.innerHTML = `
             <span
           >
           </span>
              
               <div id="div-ub-irctc" style="margin:0; max-width:400px; max-height:280px; overflow:hidden;"></div>
             
               <span
             >
             </span>
               `;
        unibots.cmd.push(() => {
          unibotsPlayer("irctc");
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        let videoDiv = document.createElement("div");
        videoDiv.id = "div-ub-irctc";
        videoDiv.style.cssText = `
             width:100%;
             max-width: 100%;
             margin:10px auto;
             overflow-x:hidden;
             `;
        // document.body.appendChild(videoDiv)
        document
          .querySelectorAll(".clearfix")[3]
          .insertAdjacentElement("afterend", videoDiv);
        unibots.cmd.push(() => {
          unibotsPlayer("irctc");
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  // setVideoAd(true);
  // setYoutubeAd();

  // /////////////////

  function setVideoAd2(isPnr) {
    try {
      setVideoAdHeader();
      let videoDiv = document.createElement("div");
      videoDiv.id = "div-ub-irctc";
      videoDiv.style.cssText = `
       width:fit-content;
       margin:10px auto
       `;
      if (isMobile) {
        if (isPnr) {
          document
            .querySelectorAll(".pnrbox")[0]
            .insertAdjacentElement("afterend", videoDiv);
        } else {
          document.body.appendChild(videoDiv);
        }
      } else {
        // let lastTrain = document.querySelectorAll(
        //   "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-last-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all"
        // )[0];

        // if (lastTrain) lastTrain.insertAdjacentElement("afterend", videoDiv);
        // else
        //   setTimeout(() => {
        //     lastTrain = document.querySelectorAll(
        //       "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-last-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all"
        //     )[0];
        //     lastTrain.insertAdjacentElement("afterend", videoDiv);
        //   }, 6000);
        try {
          let leftover = document.querySelectorAll("#adContainer1")[0];

          let parent = leftover.parentElement;
          parent.removeChild(leftover);
        } catch (err) {}

        let adContainer = document.createElement("div");
        adContainer.id = "adContainer1";
        adContainer.style.cssText = `
         display: flex;
         justify-content: center;
         align-items: center;
         width: fit-content;
         border: 1px solid gainsboro;
         padding: 12px 12px;
         border-radius: 10px;
         box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
         column-gap: 30px;
         margin: 25px auto;
         `;
        if (isPnr)
          document
            .querySelectorAll(".pnrbox")[0]
            .insertAdjacentElement("afterend", adContainer);
        else
          document
            .querySelector(".footer-icons")
            .insertAdjacentElement("beforebegin", adContainer);

        adContainer.innerHTML = `
 
         <span
       >
         
       </span>
 
          
           <div id="div-ub-irctc" style="margin:0; max-width:400px; max-height:280px; overflow:hidden;"></div>
           
 
           <span
         >
           
         </span>
 
           `;
      }

      unibots.cmd.push(() => {
        unibotsPlayer("irctc");
      });

      // let p = document.createElement("p");
      // p.innerHTML = "www.irctc.co.in";
      // document
      //   .querySelectorAll(".pnrbox")[0]
      //   .insertAdjacentElement("afterend", p);
    } catch (err) {
      console.log(err);
    }
  }

  function setVideoAdTrains() {
    try {
      setVideoAdHeader();
      let videoDiv = document.createElement("div");
      videoDiv.id = "div-ub-irctc";
      videoDiv.style.cssText = `
       width:fit-content;
       margin:10px auto
       `;
      if (isMobile) {
        document.body.appendChild(videoDiv);
      } else {
        // let lastTrain = document.querySelectorAll(
        //   "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-last-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all"
        // )[0];

        // if (lastTrain) lastTrain.insertAdjacentElement("afterend", videoDiv);
        // else
        //   setTimeout(() => {
        //     lastTrain = document.querySelectorAll(
        //       "#divMain > div > app-train-list > div.col-sm-9.col-xs-12 > div > div.ng-star-inserted > div:nth-last-child(1) > div.form-group.no-pad.col-xs-12.bull-back.border-all"
        //     )[0];
        //     lastTrain.insertAdjacentElement("afterend", videoDiv);
        //   }, 6000);

        try {
          let leftover = document.querySelectorAll("#adContainer1")[0];

          let parent = leftover.parentElement;
          parent.removeChild(leftover);
        } catch (err) {}

        let trainsDiv = document.querySelector(".tbis-div ");

        let adContainer = document.createElement("div");
        adContainer.id = "adContainer1";
        adContainer.style.cssText = `
         display: flex;
         justify-content: center;
         align-items: center;
         width: fit-content;
         border: 1px solid gainsboro;
         padding: 12px 12px;
         border-radius: 10px;
         box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
         column-gap: 30px;
         margin: 25px auto;
         `;

        trainsDiv.insertAdjacentElement("beforeend", adContainer);

        adContainer.innerHTML = `
 
         <span
       >
         
       </span>
 
         
           <div id="div-ub-irctc" style="margin:0; max-width:400px; max-height:280px; overflow:hidden;"></div>

 
           <span
         >
           
         </span>
 
           `;

        // ///////////
      }

      unibots.cmd.push(() => {
        unibotsPlayer("irctc");
      });
    } catch (err) {
      console.log(err);
    }
  }

  const reloadADs = (all) => {
    // defineGPTslots(all);
    // googletag.cmd.push(function () {
    //   googletag.display("div-gpt-ad-1654160819405-0");
    // });
    // googletag.cmd.push(function () {
    //   googletag.display("div-gpt-ad-1686031619172-0");
    // });
    // if (all && !isMob()) {
    //   googletag.cmd.push(function () {
    //     googletag.display("div-gpt-ad-1677756304492-0");
    //   });
    // }
  };

  let oldUrl = window.location.href;

  window.addEventListener("click", function () {
    setTimeout(() => {
      if (window.location.href != oldUrl) {
        let s = !isMob();
        if (window.location.href.includes("train-search")) {
          // setVideoAd();
          // const iframe = document.getElementById("book-ticket-iframe");
          // if (iframe) iframe.style.display = "none";
        } else if (window.location.href.includes("enquiry/pnr-enquiry")) {
          // setVideoAd2(true);
          // const iframe = document.getElementById("book-ticket-iframe");
          // if (iframe) iframe.style.display = "none";
        } else if (window.location.href.includes("booking/train-list")) {
          // setVideoAdTrains();
        } else {
          // setVideoAd2(false);
          // const iframe = document.getElementById("book-ticket-iframe");
          // if (iframe) iframe.style.display = "none";
        }

        if (!isSmall) reloadADs(s);

        oldUrl = window.location.href;
      }
    }, 2000);
  });

  function splashMagic() {
    // let scrollingDiv = document.getElementById("splash-scrollable");
    // // setInterval(() => {
    // setTimeout(() => {
    //   scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
    // }, 9000);
    // setTimeout(() => {
    //   scrollingDiv.scrollTop = 0;
    // }, 12000);
    // // }, 10000);
    // // if (
    // //   parseInt(document.getElementById("vai").style.height.split("px")[0]) < 50
    // // )
    // //   splashMagic();
  }

  splashMagic();

  const setSecondVideoAdinIframe = () => {
    const iframe = document.getElementById("book-ticket-iframe");

    if (iframe) {
      iframe.style.display = "flex";
      const videoDiv = document.createElement("div");
      videoDiv.id = "div-ub-irctc_chatbot1";
      videoDiv.style.cssText = `
     
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       `;

      const videoScript = document.createElement("script");

      videoScript.innerHTML = `
     window.unibots = window.unibots || { cmd: [] };
     unibots.cmd.push(() => {
       unibotsPlayer("irctc_chatbot1");
     });
     `;

      videoDiv.appendChild(videoScript);
      const headScript = document.createElement("script");
      headScript.src = "https://cdn.unibotscdn.com/ubplayer/player.js";
      headScript.async = true;

      // const doc =
      //   iframe.contentDocument.body || iframe.contentWindow.document.body;
      // doc.innerHTML = `hello`;

      var y = iframe.contentWindow || iframe.contentDocument;
      if (y.document) y = y.document;
      y.head.appendChild(headScript);
      y.body.appendChild(videoDiv);
    }
  };

  // setSecondVideoAdinIframe();

  runNewNewDisplayAds();

  document.head.insertAdjacentHTML(
    "beforeend",
    `<style type="text/css">
       #div-gpt-ad-1686031619172-0{position:fixed !important;}
       #div_ub_chatbot_300x250{
        min-width: 300px; min-height: 250px;
       }

       .disha-loader {
        border: 10px solid #f3f3f3;
        border-radius: 50%;
        border-top: 10px solid rgb(52, 109, 179);
        width: 60px;
        height: 60px;
        -webkit-animation: disha-spin 1s linear infinite; /* Safari */
        animation: disha-spin 1s linear infinite;
        margin-bottom:20px
      }
      
      /* Safari */
      @-webkit-keyframes disha-spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
      }
      
      @keyframes disha-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
   </style>`
  );
})();
