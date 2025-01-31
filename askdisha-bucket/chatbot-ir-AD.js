injectHeadCodeOnPage = (e) => {
  let n = document.createElement("script");
  n.type = "text/javascript";
  n.async = true;
  n.src = e;
  document.getElementsByTagName("head")[0].appendChild(n);
};
loadGA = (code) => {
  let ga_url = `https://www.googletagmanager.com/gtag/js?id=${code}`;
  injectHeadCodeOnPage(ga_url);
  (window.dataLayer = window.dataLayer || []),
    (window.gtag = function () {
      window.dataLayer.push(arguments);
    });
  window.gtag("js", new Date());
  window.gtag("config", code);
};
loadGA("G-NFN218243Z"); //to load GA code and count pageviews

// //adx code starts //comment this code if you want to run adsense
let gptjsurl = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";

injectHeadCodeOnPage(gptjsurl); //addded gpt.js

window.unibots = window.unibots || { cmd: [] }; // defining googletag fun
var IR_UB;
var IR_UB_300x250; //FROM UB this should be removed
var IR_UB_NEW;
var Adunit_IR_UB_320x50; //FROM UB: This value should be changed as instructed by the UB team
var Adunit_IR_UB_300x250; //FROM UB: This value should be changed as instructed by the UB team
var adunitData; // variable to store adunits
//Fetches the latest ad units for convenient updates without modifying the live code; uses a fetch request to retrieve the JSON

function getAdunitNames() {
  const adunit_data_url = "https://cdn.unibotscdn.com/headerbidding/indianrail.json";

  return fetch(adunit_data_url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      adunitData = data;
      return adunitData;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

//   getAdunitNames();

// mobilecheck fun
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
let isMobile = isMob();

// below function to define homepage adunts
// const defineGPTslots = (all, Adunit_IR_UB_300x250, Adunit_IR_UB_320x50) => {
//   window.googletag = window.googletag || { cmd: [] };
//   googletag.cmd.push(function () {
//     if (all && !isMobile) { //comment this if block to remove 300x250_chatbot slot defination
//       IR_UB_NEW = googletag
//         .defineSlot(
//           Adunit_IR_UB_300x250,
//           [300, 250],
//           "div-gpt-ad-1698143839353-0"
//         )
//         .addService(googletag.pubads());
//     }

//     IR_UB = googletag
//       .defineSlot(Adunit_IR_UB_320x50, [320, 50], "div-gpt-ad-1699617760427-0")
//       .addService(googletag.pubads());
//     googletag.pubads().enableSingleRequest();
//     googletag.enableServices();
//   });
// };

const defineGPTslots = (all, Adunit_IR_UB_300x250, Adunit_IR_UB_320x50) => {
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    if (all && !isMobile) { //comment this if block to remove 300x250_chatbot slot defination
      // Replaced with new ad unit ID
      IR_UB_NEW = googletag
        .defineSlot(
          Adunit_IR_UB_300x250,
          [300, 250],
          "div-gpt-ad-1698143839353-0"
        )
        .addService(googletag.pubads());
    }

    IR_UB = googletag
      .defineSlot(Adunit_IR_UB_320x50, [320, 50], "div-gpt-ad-1699617760427-0")
      .addService(googletag.pubads());
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
};


//function to define slots for homepage adunits
if (!adunitData && adunitData == undefined) {
  getAdunitNames()
    .then((adunitData) => {
      defineGPTslots(
        true,
        adunitData["Adunit_IR_UB_300x250"],
        adunitData["Adunit_IR_UB_320x50"]
      );
    })
    .catch((err) => {
      console.log(err);
    });
} else {
  defineGPTslots(
    true,
    adunitData["Adunit_IR_UB_300x250"],
    adunitData["Adunit_IR_UB_320x50"]
  );
}

//reload function when initial req didn't work
const reloadADs = (all) => {
  if (!adunitData && adunitData !== undefined) {
    getAdunitNames()
      .then((adunitData) => {
        defineGPTslots(
          all,
          adunitData["Adunit_IR_UB_300x250"],
          adunitData["Adunit_IR_UB_320x50"]
        );
      })
      .catch((err) => {
        console.error(err);
      });
  } else {
    defineGPTslots(
      all,
      adunitData["Adunit_IR_UB_300x250"],
      adunitData["Adunit_IR_UB_320x50"]
    );
  }
  //display sticky ad
  googletag.cmd.push(function () {
    googletag.display("div-gpt-ad-1699617760427-0");
  });
  //display inbot ad
  if (all && !isMobile) {
    googletag.cmd.push(function () {
      googletag.display("div-gpt-ad-1698143839353-0");
    });
  }
};

let oldUrl = window.location.href;

//function to send initial ad request
const runNewDisplayAd = () => {
  googletag.cmd.push(function () {
    googletag.display("div-gpt-ad-1699617760427-0");
  });
  if (!isMobile) {   //comment this if block to stop 300x250_chatbot request
    googletag.cmd.push(function () {
      googletag.display("div-gpt-ad-1698143839353-0");
    });
  }
};
//function to refresh  ads
function refreshHomeAdWindow() {
  googletag.cmd.push(function () {
    if (!isMobile) {
      googletag.pubads().refresh([IR_UB_NEW]);
    }
    googletag.pubads().refresh([IR_UB]);
  });
}

setTimeout(() => {
  runNewDisplayAd();
}, 2000);

setInterval(() => {
  if (!window.location.href.includes("nget/booking/train-list")) {
    refreshHomeAdWindow();
  }
}, 35000);
 //adx code ends

