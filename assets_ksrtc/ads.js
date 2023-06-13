
     var coroverslotIP;
     var visaible=true;
     window.googletag = window.googletag || {cmd: []};
     googletag.cmd.push(function() {
      coroverslotIP = googletag.defineSlot('/21748009408/indianrail.gov.in-300x250-ir', [300, 250], 'div-gpt-ad-1571990918074-0').setTargeting("corover", "refresh").addService(googletag.pubads());
       googletag.pubads().enableSingleRequest();
       googletag.enableServices();
       googletag.pubads().disableInitialLoad();
       googletag.pubads().enableLazyLoad({fetchMarginPercent: 200,renderMarginPercent: 100,mobileScaling: 2.0});
        // googletag.pubads().addEventListener('impressionViewable', function(e) {
//     console.log("Active View criteria has been met.", e);
// });
       googletag.pubads().addEventListener('impressionViewable', function(e) {
        //  console.log(event.slot,coroverslotIP)
        console.log("Active View criteria has been met.", e);
 });
     });
setTimeout(function(){    
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1571990918074-0'); });

}, 100);

// var googletag = googletag || {};
// googletag.cmd = googletag.cmd || [];
// googletag.slots = googletag.slots || {};
// var mapping = googletag.sizeMapping()
//   .addSize([0, 0], [1000, 1])
//   .addSize([320, 0], [[320, 50], [300, 50]])
//   .addSize([1025, 0], [970, 90])
//   .build();
// googletag.slots["push"] = googletag.defineSlot("/21748009408/indianrail.gov.in-300x250-ir", [300, 250], "div-gpt-ad-1571990918074-0")
//   .addService(googletag.pubads())
//   .setTargeting("pos", "banner")
//   .defineSizeMapping(mapping);
// googletag.cmd.push(function() {
//   googletag.pubads().enableAsyncRendering();
// //   googletag.pubads().collapseEmptyDivs();
//   googletag.pubads().disableInitialLoad();
//   googletag.pubads().enableLazyLoad({fetchMarginPercent: 200,renderMarginPercent: 100,mobileScaling: 2.0});
// });
// googletag.enableServices();
// googletag.cmd.push(function() {
//   googletag.display("div-gpt-ad-1571990918074-0");
// });
// googletag.pubads().addEventListener('impressionViewable', function(e) {
//     console.log("Active View criteria has been met.", e);
// });
// googletag.cmd.push(function () {
//         // add visibility helper classes
//         googletag.pubads().addEventListener('slotRenderEnded', function (event) {
//           var adClass = (event.size[0] > 1 && event.size[1] > 1) ? 'ad-visible' : 'ad-invisible';
//           $('#' + event.slot.getSlotElementId()).addClass(adClass);
//         });
//         // load ads
//         googletag.pubads().refresh(null, {changeCorrelator: false});
//       });