(() => {
    // var IR_UB;  //FROM UB: This should be added
    // var IR_UB_300x250; //FROM UB: This should be added
    // var Adunit_IR_UB_320x50 = "/22667711881/indianrail.gov.in_ub_320x50";  //FROM UB: This value should be changed as instructed by the UB team
    // var Adunit_IR_UB_300x250 = "/22667711881/indianrail_300x250"; //FROM UB: This value should be changed as instructed by the UB team
    let isMobile = false;
    isFirstTime = false;

    const openMock = () => {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style.display = "none";
        a.href = "https://askdisha.irctc.co.in/#webIR";
        a.target = "_blank";
        a.click();
        document.body.removeChild(a);
    };

    let overlayDiv = document.createElement("div");
    overlayDiv.style.cssText = `
        display: none;
        position: fixed;
        inset: 0px;
        background-color: #000000a1;
        z-index: 99999;
        `;
    document.body.appendChild(overlayDiv);
    let loading = true;
    let loader = document.createElement("div");
    loader.style.cssText = `
        height: 85%;
        width: 100%;
        text-align: center;
        display: flex;
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
    <p style="font-size: 25px;
    font-weight: 600;
    color: #535d66;
    width: 100%;
   margin-top: 10px;
    margin-bottom: 0px;">Please Wait...</p>
            `;

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

        // let am = (hour == 9 && minutes >= 55) || (hour === 10 && minutes <= 20);

        // let pm = (hour == 10 && minutes >= 55) || (hour === 11 && minutes <= 20);

        document.head.appendChild(autoAdScript1);
        // document.head.appendChild(autoAdScript2);
        // document.head.appendChild(autoAdScript3);
    };

    addAutoAdd();

    const adDownIframe = document.createElement("div");
    const toggle320x50 = (show) => {
        adDownIframe.style.display = show ? "block" : "none";
        adDownIframe.className = show ? "gpt320--show" : "gpt320--hide";
    };

    //FROM UB: define Slot function Start
    // const defineGPTslots = (all) => {
    //     googletag.cmd.push(function () {
    //         if (all && !isMobile) {
    //             IR_UB_300x250 = googletag
    //                 .defineSlot(
    //                     Adunit_IR_UB_300x250,
    //                     [300, 250],
    //                     "div-gpt-ad-1698143839353-0"
    //                 )
    //                 .addService(googletag.pubads());
    //         }

    //         IR_UB = googletag
    //             .defineSlot(
    //                 Adunit_IR_UB_320x50,
    //                 [320, 50],
    //                 "div-gpt-ad-1699617760427-0"
    //             )
    //             .addService(googletag.pubads());
    //         googletag.pubads().enableSingleRequest();
    //         googletag.enableServices();
    //     });
    // };

    //FROM UB: define Slot function End

    if (true) {
        let cdnScript = document.createElement("script");
        cdnScript.src = "https://cdn.unibotscdn.com/player/mvp/player.js";
        document.head.appendChild(cdnScript);

        let cdnScript2 = document.createElement("script");
        cdnScript2.src =
            "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8692878304946020";
        document.head.appendChild(cdnScript2);

        // let cdnScript3 = document.createElement("script");
        // cdnScript3.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
        // cdnScript3.async = true;

        //FROM UB Commented code should be removed START

        // let cdnScript6 = document.createElement("script");
        // cdnScript6.src = "https://cdn.unibots.in/headerbidding/common/hb.js";
        // cdnScript6.async = true;



        //   let script320 = document.createElement("script");
        //   script320.innerHTML = `
        //   window.googletag = window.googletag || {cmd: []};
        //   googletag.cmd.push(function() {
        //     googletag.defineSlot('/22667711881/indianrail_300x250', [300, 250], 'div-gpt-ad-1698143839353-0').addService(googletag.pubads());
        //     googletag.pubads().enableSingleRequest();
        //     googletag.enableServices();
        //   });
        //   `;

        //   let cdnScript4 = document.createElement("script");
        //   cdnScript4.innerHTML = `
        //   window.googletag = window.googletag || {cmd: []};
        //   googletag.cmd.push(function() {
        //     googletag.defineSlot('/22667711881/indianrail.gov.in_ub_320x50', [320, 50], 'div-gpt-ad-1699617760427-0').addService(googletag.pubads());
        //     googletag.pubads().enableSingleRequest();
        //     googletag.enableServices();
        //   });
        //   `;

        //   document.head.appendChild(script320);
        //   // document.head.appendChild(cdnScript6);
        //   document.head.appendChild(cdnScript4);

        //FROM UB Commented code should be removed END
        // document.head.appendChild(cdnScript3);
        // defineGPTslots(true);
    }


    function getMediaQuery(maxHeight) {
        return window.matchMedia(`(max-height: ${maxHeight}px)`);
    }

    function getMediaobject() {
        let mediaObj = {
            placeholderWidth: "375px",
            placeholderHeight: "470px",
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
                margin: "-30px",
                scale: "1.0",
            },
            belowAD: {
                height: "250px",
                width: "320px",
                margin: "24px",
                scale: "1",
            },
            button: {
                font: "22px",
                padding: "10px",
                icon: "25px",
                marginLeft: "8px",
            },
        };

        if (getMediaQuery(650).matches) {
            mediaObj = {
                placeholderWidth: "300px",
                placeholderHeight: "330px",
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
                    margin: "-38px",
                    scale: "0.9",
                },
                belowAD: {
                    height: "250px",
                    width: "320px",
                    margin: "24px",
                    scale: "1",
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
                    margin: "-30px",
                    scale: "1.0",
                },
                belowAD: {
                    height: "250px",
                    width: "320px",
                    margin: "24px",
                    scale: "1",
                },
                button: {
                    font: "22px",
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
                    margin: "-30px",
                    scale: "1.0",
                },
                belowAD: {
                    height: "250px",
                    width: "320px",
                    margin: "24px",
                    scale: "1",
                },
                button: {
                    font: "22px",
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
        console.log("CoRover SDK enabled");

        let miniCSS =
            "z-index: 9; height: fit-content; position: fixed; border-radius: 50%; bottom: 38px; width: fit-content; left: 45px; box-shadow: none;";
        let initCSS =
            "display: none; z-index: 9; height: fit-content; position: fixed; border-radius: 50%; bottom: 38px; width: fit-content; left: 45px; box-shadow: none;";
        let smallCSS =
            "border-radius: 8px; box-sizing: border-box;right: 0; width: fit-content !important; max-width: none; position: fixed; z-index: 999; bottom: -36px; visibility: visible; opacity: 1; min-width: 410px; left: 16px; height: calc(var(--vh, 1vh) * 100)";
        let maxCSS =
            "border-radius: 8px; box-sizing: border-box;right: 0; width: 100% !important; max-width: none; position: fixed; z-index: 999; bottom: 0px; visibility: visible; opacity: 1;box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); -webkit-box-shadow: 0 7px 6px 1px rgb(0 0 0 / 16%); -moz-box-shadow: 0 7px 6px 1px rgba(0,0,0,.16); height: 100%";
        //Creates Div
        let urlMaintained = window.location.href;
        var adRefreshTime = 5000;
        let actionTimerFlag = false;

        let dishaWrapper = document.createElement("div");
        dishaWrapper.style.cssText = `
               position: fixed;
               z-index: 999;
               background-color: transparent;
               display: flex;
               justify-content: flex-end;
               align-items: center;
               bottom: 54px;
               left: 20px;
               width: fit-content;
               max-width: 95%;
               `;
        dishaWrapper.id = "askDishaSdk";

        function setDishaWrapper() {
            // if (!isMobile || window.location.href.includes("indianrail"))
            if (!isMobile) {
                dishaWrapper.style.cssText = `
               position: fixed;
               z-index: 999;
               background-color: transparent;
               display: flex;
               justify-content: flex-end;
               align-items: center;
               bottom: 44px;
               left: 10px;
               width: fit-content;
               max-width: 95%;
               z-index:99999;
               `;
            } else {
                dishaWrapper.style.cssText = `
          position: fixed;
          z-index: 999;
          background-color: transparent;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          bottom: 36px;
          left: 0px;
          width: fit-content;
          max-width: 95%;
          z-index:99999;
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
            "https://sdk.irctc.corover.ai/askdisha-bucket/diloge-left.gif";
        messageDialog.style.cssText =
            "width: 238px; max-width: 100%; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 9; position: static; border-top-left-radius: 18px; border-top-right-radius: 18px; border-bottom-left-radius: 18px; border-bottom-right-radius: 0px !important; display: block;";
        // messageDialog.style.cssText =
        //   "width: 238px; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 99999; position: fixed; border-top-left-radius: 18px; border-top-right-radius: 18px; border-bottom-left-radius: 18px; bottom: 18px; right: 143px; border-bottom-right-radius: 0px !important; display: block;";
        let messageDialogClose = document.createElement("img");
        messageDialogClose.decoding = "async";
        messageDialogClose.id = "messageDialogClose";
        messageDialogClose.src = url;
        messageDialogClose.style.cssText =
            " background-color: rgb(255, 87, 34); position: absolute; right: 8px; top: 8px; width: 16px; box-shadow: rgb(0 0 0 / 6%) 0px 0px 50px 0px; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 9; border-radius: 18px; display: block;";
        // messageDialogClose.style.cssText =
        //   " background-color: rgb(255, 87, 34); width: 16px; box-shadow: rgb(0 0 0 / 6%) 0px 0px 50px 0px; overflow: hidden; backface-visibility: hidden; transition: all 0.3s ease 0s; cursor: pointer; z-index: 99999; border-radius: 18px; position: fixed; bottom: 76px; right: 157px; display: block;";
        messageWrapper.appendChild(messageDialog);
        messageWrapper.appendChild(messageDialogClose);
        // messageWrapper.style.display = "none";
        let launcher = document.createElement("div");
        launcher.id = "askDishaLuncher";

        launcher.style.cssText =
            "background-size: cover;background-position: 6px -3px;background-repeat: no-repeat;background-color: transparent; width: 120px; height: 120px; border-radius: 100%; -webkit-box-shadow: 0 0 50px 0 rgb(0 0 0 / 6%); box-shadow: 0 0 50px 0 rgb(0 0 0 / 6%);  -webkit-backface-visibility: hidden; -webkit-transition: all 0.5s; transition: all 0.5s; cursor: pointer; z-index: 9; border-radius: 50%;";

        if (isMobile) launcher.style.transform = "scale(0.7)";
        else launcher.style.transform = "scale(0.8)";
        checkMobile();
        if (isMobile) {
            // launcher.style.backgroundImage = `url("https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg")`;
            launcher.style.borderWidth = "0px";
            launcher.style.backgroundPosition = "center";
            messageWrapper.style.display = "none";
        } else {
            messageWrapper.style.display = "none";
            // launcher.style.backgroundImage = `url(
            //        "https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg"
            //      )`;
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
               left: 100px;
               width: 16px;
               top: -2px;
               display: block;
              `;
        function switchIcon(ch) {
            let s;
            if (true) {
                if (!isSmall) {
                    s = true;

                    if (true) dealOfDay.style.display = `none`;


                    toggle320x50(false);
                    // adDownIframe2.style.display = `none`;

                    maxIcon.src =
                        "https://sdk.irctc.corover.ai/askdisha-bucket/maximise.png";
                    dishaWrapper.style.bottom = "200px";

                    dishaWrapper.style.left = "-18px";
                    launcher.style.transform = "rotate(12deg)";
                    maxIcon.style.cssText = `
                     position: absolute;
                     right: 14px;
                     width: 14px;
                     top: -18px;
                     transform: rotate(-100deg);
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

                    // removeAd();
                } else {
                    // console.log("dugug");
                    // addDownAd();
                    s = false;
                    // messageDialog.style.display = "block";
                    // messageDialogClose.style.display = "block";
                    if (true) dealOfDay.style.display = `inline`;

                    toggle320x50(true);
                    // adDownIframe2.style.display = `block`;
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

                    if (isMobile) {
                        launcher.style.transform = "scale(0.7)";
                    } else {
                        launcher.style.transform = "scale(0.8)";
                    }

                    maxIcon.style.cssText = `
                     position: absolute;
                     left: 98px;
                     width: 16px;
                     top: -2px;
                   `;

                    // if (!isMobile) {
                    //   messageWrapper.style.display = "block";
                    // }
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
            console.log("clicked");
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
        ad.style.zIndex = "0";
        // ad.style.width = "70%";
        ad.style.boxShadow =
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
        ad.style.display = "none";
        ad.style.overflowX = "hidden";
        ad.style.height = "fit-content";
        // ad.style.height = "85%";
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

        // const addDownAd = () => {
        //     googletag.cmd.push(function () {
        //         IR_UB = googletag
        //             .defineSlot(
        //                 "/22667711881/indianrail.gov.in_ub_320x50",
        //                 [320, 50],
        //                 "div-gpt-ad-1699617760427-0"
        //             )
        //             .addService(googletag.pubads());
        //         googletag.pubads().enableSingleRequest();
        //         googletag.enableServices();
        //     });
        //     googletag.cmd.push(function () {
        //         googletag.display("div-gpt-ad-1699617760427-0");
        //     });
        //     toggle320x50(true);
        // };

        const removeAd = () => {
            // googletag.destroySlots([IR_UB]);
            toggle320x50(false);
        };

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

        const adIframe = document.createElement("iframe");

        adIframe.src =
            "https://assistant.corover.mobi/irctc/coroversdsm/ads_v2_left.html";

        adIframe.width = "100%";
        adIframe.height = "100%";
        adIframe.style.cssText = "border:none;";
        adIframe.scrolling = "no";

        window.googletag = window.googletag || { cmd: [] };

        const adDownIframe2 = document.createElement("a");
        adDownIframe2.innerHTML = `
           `;
        adDownIframe2.href = "https://askdisha.irctc.co.in/";
        adDownIframe2.target = "_blank";

        const adDownScript = document.createElement("script");
        adDownIframe.id = "div-gpt-ad-1699617760427-0";

        //FROM UB this commented part should be removed
        //   adDownScript.innerHTML = `

        //         window.unibotshb = window.unibotshb || { cmd: [] };
        //         unibotshb.cmd.push(()=>{ ubHB("indianrail"); });
        //       `;

        adDownIframe.appendChild(adDownScript);
        // if (window.location.href.includes("indianrail")) {

        // adDownIframe.src =
        //   "https://assistant.corover.mobi/indianrailways/coroversdsm/320x50_v2.html";

        adDownIframe2.style.cssText = `
          position: fixed;
          bottom: 0px;
          left: 10px;
          border: none;
          min-width: 320px;
          min-height:50px;
          max-height:50px;
          display:block;
          z-index:1;
        `;

        document.body.appendChild(adDownIframe);
        // document.body.appendChild(adDownIframe2);

        const dealOfDay = document.createElement("a");

        dealOfDay.style.display = `inline`;
        dealOfDay.target = "_blank";
        if (window.location.href.includes("indianrail")) {
            if (isMobile) {
                dealOfDay.href = "https://amzn.to/34WK1uY";
                dealOfDay.innerHTML = `
            <img width="156px" src="https://cdn.jsdelivr.net/gh/corover/assets@17-1April/askdisha-bucket/DEALS....png"/>
            `;
            } else {
                dealOfDay.href = "http://amzn.to/2LcCuBJ";
                dealOfDay.innerHTML = `
            <img width="156px" src="https://cdn.jsdelivr.net/gh/corover/assets@17-1April/askdisha-bucket/DEALS....png"/>
            `;
            }
        } else {
            dealOfDay.href = "https://amzn.to/34WK1uY";
            dealOfDay.innerHTML = `
                <img width="156px" src="https://cdn.jsdelivr.net/gh/corover/assets@17-1April/askdisha-bucket/DEALS....png" decoding="async"/>
                `;
        }

        if (isMobile)
            dealOfDay.style.cssText = `
      position: fixed;
      bottom:18px;
      left:90px;
      transform: scale(0.8);
      `;
        else
            dealOfDay.style.cssText = `
                position: fixed;
                bottom:35px;
                left:150px;
                transform: scale(0.8);
                `;
        dealOfDay.style.zIndex = "99";
        if (!isMobile) document.body.appendChild(dealOfDay);

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
        // dishaWrapper.appendChild(messageWrapper);
        // dishaWrapper.appendChild(messageDialog);
        // dishaWrapper.appendChild(messageDialogClose);
        d.appendChild(cross);
        //Creates iFrame
        var n = document.createElement("iframe");
        n.id = "Disha-Bot";
        n.setAttribute(
            "allow",
            "geolocation https://askdisha.irctc.co.in/; microphone https://askdisha.irctc.co.in/; camera; otp-credentials; midi; accelerometer; gyroscope; payment"
        );
        n.style.width = "100%";
        n.style.height = "85%";
        n.style.zIndex = "999";
        n.style.position = "relative";
        n.style.margin = 0;
        n.style.marginBottom = "7px";
        n.style.border = "none";
        n.style.overflow = "hidden";
        n.style.display = "block";
        n.style.borderRadius = "8px";
        // n.style.backgroundColor = "#fff";
        // n.style.backgroundColor = "#fff";
        // n.style.backgroundRepeat = "no-repeat";
        // n.style.backgroundPosition = "center";
        // n.style.backgroundSize = "200px 200px;";
        // n.style.backgroundImage =
        //   "url('https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg')";

        // n.style.text =
        //   "background: url('https://sdk.irctc.corover.ai/askdisha-bucket/disha.svg') 6px -3px / cover no-repeat white;";
        n.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
        n.style.webkitBoxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
        //Append iFrame inside Div
        d.appendChild(ad);
        dishaWrapper.appendChild(launcher);
        dishaWrapper.appendChild(messageWrapper);
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
        crossClose.style.left = "16px";
        crossClose.style.pointer = "cursor";
        crossClose.style.boxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
        crossClose.style.webkitBoxShadow = "0 7px 6px 1px rgb(0 0 0 / 16%)";
        // crossClose.onclick = function (e) {
        //   alert();
        //   // n.contentWindow.postMessage("botClosed", "*");
        // };
        d.appendChild(crossClose);
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
                messageDialog.style.display = "block";
                messageDialogClose.style.display = "block";
            } else {
                messageDialog.style.display = "none";
                messageDialogClose.style.display = "none";
            }

            // addDownAd();
            overlayDiv.style.display = "none";
            isOpen = false;
            n.style.borderRadius = "50%";
            n.style.width = "1px";
            n.style.height = "1px";
            d.style.cssText = miniCSS;
            cross.style.display = "none";
            crossClose.style.display = "none";
            launcher.style.display = "block";
            if (true) dealOfDay.style.display = `inline`;

            toggle320x50(true);

            adDownIframe2.style.display = `block`;
            hideAd();
        }

        const placeholderCard = document.createElement("div");
        placeholderCard.style.cssText = `
              width: ${mediaObj.placeholderWidth};
              position: fixed;
              bottom: 0px;
              border-top-left-radius: 23px;
              border-top-right-radius: 23px;
              left: 15px;
              z-index: 9;
              background-color: white;
              height:${mediaObj.placeholderHeight};
              display: block;
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
            display: none;
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
              
                  <div style="cursor:pointer; width: 100%; height: ${mediaObj.bannerHeight}" id="disha-image">
                    <img
                      src="https://sdk.irctc.corover.ai/askdisha-bucket/IRCTC-banner-1.gif"
                      style="width: 100%; height: 100%; border-radius: 8px"
                      alt=""
                      decoding = "async"
                    />
                  </div>
                  <div
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      background: #0068ff;
                      width: 90%;
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
                      Book Train Ticket
                    </p>
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
                        src="https://cdn.jsdelivr.net/gh/corover/assets@17-1April/askdisha-bucket/DEALS....png"
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
                 
                 ">
                  <iframe id="book-ticket-iframe" src="about:blank" scrolling="no" style="    padding: 0px;
                  width: 100%;
                  min-height: ${mediaObj.videoAd.height};
                  display: none;
                  justify-content: center;
                  align-items: center;
                  border: 0px;
                  transform: scale(${mediaObj.videoAd.scale});
                  margin-top: ${mediaObj.videoAd.margin};
                  "></iframe>  
                  <div id="scrollIframeContainer" style="height: ${mediaObj.belowAD.height}; width: ${mediaObj.belowAD.width};margin-left: ${mediaObj.belowAD.margin}; margin-top: -20px; transform: scale(${mediaObj.belowAD.scale});background:url('https://cdn.jsdelivr.net/gh/corover/assets@a1/askdisha-bucket/300_250.png');background-repeat:no-repeat;background-size:contain !important"> 
                
                  </div>
              </div>
                  </div>
                
                
                `;

        let adIframescroll = document.createElement("div");
        adIframescroll.id = "div-gpt-ad-1698143839353-0";

        // adIframescroll.scrolling = "no";
        // adIframescroll.frameborder = "0";
        // adIframescroll.src =
        //   "https://assistant.corover.mobi/irctc/coroversdsm/adchatbot.html";
        adIframescroll.style.cssText = `
                     
                     height: ${mediaObj.belowAD.height}; ${mediaObj.belowAD.width}; margin: 0 auto; overflow-y:hidden;";
                     `;

        // <div style="width: 320px; height: 50px; background-color: #dfdfdf;">
        //   <iframe
        //     src="https://assistant.corover.mobi/irctc/coroversdsm/inner_ad_320x50.html"
        //     style="width: 100%; height: 100%"
        //     frameborder="0"
        //   ></iframe>
        // </div>

        document.body.appendChild(placeholderCard);
        document.getElementById('scrollIframeContainer').appendChild(adIframescroll)
        document.getElementById("disha-banner-button").onclick = botOpen;
        document.getElementById("disha-image").onclick = botOpen;

        const openBanner = (bool) => {
            if (isMobile) {
                dishaWrapper.style.display = "flex";
                dealOfDay.style.display = "inline";

                toggle320x50(true);
                // adDownIframe2.style.display = "block";
                placeholderCard.style.display = "none";
                return;
            }

            if (bool) {
                dishaWrapper.style.display = "none";
                dealOfDay.style.display = "none";
                // remove320();
                toggle320x50(false);
                // adDownIframe2.style.display = "none";
                placeholderCard.style.display = "block";
                // document
                //     .getElementById("scrollIframeContainer")
                //     .appendChild(adIframescroll);

                // setTimeout(() => {
                //     googletag.cmd.push(function () {
                //         googletag.display("div-gpt-ad-1698143839353-0");
                //     });
                // }, 500);
            } else {
                dishaWrapper.style.display = "flex";
                dealOfDay.style.display = "inline";

                toggle320x50(true);
                // adDownIframe2.style.display = "block";
                placeholderCard.style.display = "none";
            }
        };

        //ankur
        openBanner(false);

        setTimeout(() => {
            console.log("AAA", isOpen);
            if (!isOpen && window.innerWidth > 992) {
                console.log(isOpen);
                openBanner(true);
            }
        }, 4000);

        // if (isMobile) {
        //     let ubInt_320x50 = setInterval(() => {
        //         if (document.getElementById("div-gpt-ad-1699617760427-0")) {
        //             clearInterval(ubInt_320x50);
        //             googletag.pubads().refresh([IR_UB])
        //         }
        //     }, 1000)
        // }



        document.getElementById("disha-banner-close").onclick = () =>
            openBanner(false);

        function botOpen() {
            if (isMobile) {
                // window.open("https://askdisha.irctc.co.in/#webIR", "_blank");
                openMock();
                return;
            }
            openBanner(false);
            // if (checkBookingOpenStatus()) {
            if (!isMobile && isSmall) {
                switchIcon();
            }
            // removeAd();
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
            n.style.height = "85%";
            isOpen = true;

            if (true) dealOfDay.style.display = `none`;

            toggle320x50(false);

            // adDownIframe2.style.display = `none`

            launcher.style.display = "none";
            setCSS();

            if (!initialized && n.src == "about:blank") {
                // n.src = `https://assistant.corover.mobi/eticket/`;
                n.contentWindow.location.replace(`https://askdisha.irctc.co.in/`);
                // console.log("Fresh Load");
                initialized = true;
                // document.getElementById("feedBackIframe").src =
                //   "https://assistant.corover.mobi/irctc/demo/test/index.html";
            } else {
                console.log("Loaded Bot by user");
            }
            setTimeout(() => {
                document.getElementById("adIframeContainer").appendChild(adIframe);
            }, 1000);
            cross.style.display = "none";
            crossClose.style.display = "block";
            adActive = isFirstTime ? false : true;
            isFirstTime = false;
            // ad.appendChild(videoFrame);
            if (!isMobile) {
                setAdWidth();
            }
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
            } catch (e) { }
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
            } catch (e) { }
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
            } catch (e) { }
        }
        function setRecent(value) {
            console.log("Recent:", value);
            if (
                value == undefined ||
                value == null ||
                value == "undefined" ||
                value == "null"
            ) {
                return;
            }
            console.log("Saving cookie...");
            let date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            document.cookie = `recents=${value};expires=${date}`;
        }
        function getRecent() {
            console.log("Getting cookie...");
            const cookies = Cookie();
            let recents = null;
            try {
                recents = cookies["recents"];
            } catch (error) {
                console.log(error);
            }
            console.log("Sending recents:", recents);
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
            console.log("Saving cookie...");
            let date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            document.cookie = `cxtoken=${value};expires=${date}`;
        }
        function getToken() {
            console.log("Getting cookie...");
            const cookies = Cookie();
            let token = null;
            try {
                token = cookies["cxtoken"];
            } catch (error) {
                console.log(error);
            }
            console.log("Sending Token:", token);
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
            console.log("Saving state...");
            let age = 2 * 60;
            document.cookie = `state=${value};max-age=${age};`;
        }
        function getState() {
            console.log("Getting state...");
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
                    hideAd();
                    n.contentWindow.postMessage("hideCross", "*");
                } else {
                    d.style.cssText = smallCSS;
                    n.style.height = "85%";
                    // if (ad.childElementCount == 1) ad.appendChild(videoFrame);
                    // setAdWidth();
                    // n.contentWindow.postMessage("showCross", "*");
                }
            }
        }
        function setAdWidth() {
            // if (adActive && !isMobile) {
            //   ad.style.display = "block";
            //   ad.style.width = window.innerWidth - 450 + "px";
            // }
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
            console.log("CROSS ADD MOBILE");
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
                botOpen();
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

        function checkLoginModel() {
            let loginPage = document.querySelector(
                "body > app-root > app-home > div.header-fix > app-header > p-dialog.ng-tns-c19-2 > div"
            );
            dishaWrapper.style.zIndex = "999";
            if (loginPage) {
                dishaWrapper.style.zIndex = "9";
                placeholderCard.style.zIndex = "9";
            } else {
                dishaWrapper.style.zIndex = "999999999";
                placeholderCard.style.zIndex = "999";
            }
        }

        //  Ads Configurations

        var lastTimeRefresh = new Date();
        let refreshTimer = 30;  //FROM UB changed to 30s
        const resetTimer = (e) => {
            let current = new Date();
            // console.log(1);
            if ((current - lastTimeRefresh) / 1000 > refreshTimer) {
                // refreshHomeAdWindow();
                lastTimeRefresh = current;
            }
        };

        if (window.location.href.includes("indianrail")) {
            let divRail = document.createElement("div");
            divRail.id = "v-indianrail-gov-in";
            if (isMobile) document.body.appendChild(divRail);
            else {
                const sidebar = document.querySelectorAll("div.panel-group")[0];

                if (sidebar) {
                    // document
                    //   .getElementsByClassName("panel-group")[0]
                    //   .appendChild(divRail);
                    // let secondMenuItem = document.querySelectorAll(
                    //   "div.panel.panel-default"
                    // )[1];
                    sidebar.appendChild(divRail);
                    // if (secondMenuItem) {
                    // secondMenuItem.insertAdjacentHTML("afterEnd", divRail.outerHTML);
                    // secondMenuItem.insertAdjacentHTML(
                    //   "afterEnd",
                    //   `<div id = "div-ub-indianrail.gov.in_1689164825698"></div>`
                    // );

                    // } else document.body.appendChild(divRail);
                } else {
                    console.log(false);
                    document.body.appendChild(divRail);
                }
            }

            let script3 = document.createElement("script");
            script3.async = false;
            document.body.appendChild(script3);
            script3.innerHTML = `
            (function(v,d,o,ai){ai=d.createElement('script');ai.defer=true;ai.async=true;ai.src=v.location.protocol+o;d.head.appendChild(ai);})(window, document, '//
            a.vdo.ai/core/v-indianrail-gov-in/vdo.ai.js');
             `;
        }

        window.top.addEventListener("click", resetTimer, false);
        window.top.addEventListener("touchstart", resetTimer, false);
        window.top.addEventListener("keypress", resetTimer, false);
        window.top.addEventListener("DOMMouseScroll", resetTimer, false);
        window.top.addEventListener("mousewheel", resetTimer, false);

        function refreshHomeAdWindow() {
            if (isOpen) {
                document.getElementById("adIframeContainer").removeChild(adIframe);
                setTimeout(() => {
                    document.getElementById("adIframeContainer").appendChild(adIframe);
                }, 500);
            } else {
                //New Code
                googletag.cmd.push(function () {
                    if (!isMobile) {
                        googletag.pubads().refresh([IR_UB_300x250]);
                    }
                    googletag.pubads().refresh([IR_UB]);
                });
            }

            if (!isOpen && !isMobile) {
                if (document.getElementById("scrollIframeContainer"))
                    document
                        .getElementById("scrollIframeContainer")
                        .removeChild(adIframescroll);
                setTimeout(() => {
                    document
                        .getElementById("scrollIframeContainer")
                        .appendChild(adIframescroll);
                }, 500);
            }
        }
    }

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

    // /////////////////

    function splashMagic() {
        let scrollingDiv = document.getElementById("splash-scrollable");
        setTimeout(() => {
            scrollingDiv.scrollTop = scrollingDiv.scrollHeight;
        }, 8000);
        setTimeout(() => {
            scrollingDiv.scrollTop = 0;
        }, 11000);
    }

    splashMagic();

    // const setSecondVideoAdinIframe = () => {
    //   const iframe = document.getElementById("book-ticket-iframe");
    //   if (iframe) {
    //     const videoDiv = document.createElement("div");
    //     videoDiv.id = "div-ub-indianrail.gov.in_1689164825698_chatbot";
    //     videoDiv.style.cssText = `
    //           width: 100%;
    //           margin-left: -8px;
    //           `;
    //     const videoScript = document.createElement("script");
    //     videoScript.innerHTML = `
    //         window.unibots = window.unibots || { cmd: [] };
    //         unibots.cmd.push(() => {
    //           unibotsPlayer("indianrail_chatbot");
    //         });
    //         `;

    //     videoDiv.appendChild(videoScript);
    //     const headScript = document.createElement("script");
    //     headScript.src = "https://cdn.unibotscdn.com/player/mvp/player.js";
    //     headScript.async = true;

    //     // const doc =
    //     //   iframe.contentDocument.body || iframe.contentWindow.document.body;
    //     // doc.innerHTML = `hello`;

    //     var y = iframe.contentWindow || iframe.contentDocument;
    //     if (y.document) y = y.document;
    //     y.head.appendChild(headScript);
    //     y.body.appendChild(videoDiv);
    //   }
    // };

    // setSecondVideoAdinIframe();

    if (isMobile)
        document.head.insertAdjacentHTML(
            "beforeend",
            `<style type="text/css">
           
            #div-gpt-ad-1699617760427-0{
          position: fixed !important;
          bottom: 0px !important;
          left: 0px !important;
          border: none !important;
          min-width: 320px !important;
          min-height:50px !important;
          z-index:2 !important;
          background-image: url(https://storage.googleapis.com/corover-prod-bucket/disha-eticket/ads.svg);background-origin: content-box;background-repeat: no-repeat;background-size: contain; background-color: #ece5db;
          }
    
          .gpt320--show{
            display:block;
          }
    
          .gpt320--hide{
            display:none;
          }
         
  
          @media screen and (max-width:635px) {
            // #div-gpt-ad-1699617760427-0
            // {
            //   left: unset !important;
            // }
            }
  
  
  
         .disha-loader {
          border: 10px solid #f3f3f3;
          border-radius: 50%;
          border-top: 10px solid #3498db;
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
    else
        document.head.insertAdjacentHTML(
            "beforeend",
            `<style type="text/css">
           
            #div-gpt-ad-1699617760427-0{
              position: fixed !important;
              bottom: 0px !important;
              // left: 0px !important;
              border: none !important;
              min-width: 320px !important;
              min-height: 50px !important;
              z-index: 2 !important;
              background-image: url(https://storage.googleapis.com/corover-prod-bucket/disha-eticket/ads.svg);background-origin: content-box;background-repeat: no-repeat;background-size: contain; background-color: #ece5db;
           
          }
    
          .gpt320--show{
            display:block;
          }
    
          .gpt320--hide{
            display:none;
          }
         
  
          @media screen and (max-width:635px) {
            #div-gpt-ad-1699617760427-0
            {
              left: unset !important;
            }
            }
  
  
  
         .disha-loader {
          border: 10px solid #f3f3f3;
          border-radius: 50%;
          border-top: 10px solid #3498db;
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