    var coroverslotIP;
    var visaible=true;
    window.googletag = window.googletag || {cmd: []};
    googletag.cmd.push(function() {
     coroverslotIP = googletag.defineSlot('/21748009408/irctc.co.in_300x250_irctc', [300, 250], 'div-gpt-ad-1540035329495-0').setTargeting("corover", "refresh").addService(googletag.pubads());
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();

      googletag.pubads().addEventListener('impressionViewable', function(event) {
       //  console.log(event.slot,coroverslotIP)
        events=event;
   if(coroverslotIP === event.slot){
       // console.log('impressionViewable');
       visaible=true;
   }
   
});
    });
console.log('impressionViewable');
setTimeout(() => {
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1540035329495-0'); });
  }, 100);