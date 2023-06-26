var swiper = new Swiper(".mySwiper", {
  slidesPerView: window.innerWidth < 640 ? 3 : 6,
  rewind: true,
  //   spaceBetween: 30,
  //   centeredSlides: true,
  //   freeMode: true,
  freeModeMomentum: false,
  //   mousewheelControl: true,
  keyboardControl: true,
  speed: 3000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  loop: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return (
  //         '<span style="background:red; display:inline-block; width:50px; border-radius:4px; height:5px;" class="' +
  //         className +
  //         '">' +
  //         "</span>"
  //       );
  //     },
  //   },
});

window.onresize = (e) => {
  swiper = new Swiper(".mySwiper", {
    slidesPerView: window.innerWidth < 640 ? 3 : 6,
    rewind: true,
    //   spaceBetween: 30,
    //   centeredSlides: true,
    freeMode: true,
    freeModeMomentum: false,
    // mousewheelControl: true,
    keyboardControl: true,
    speed: 3000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    loop: true,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return (
    //         '<span style="background:red; display:inline-block; width:50px; border-radius:4px; height:5px;" class="' +
    //         className +
    //         '">' +
    //         "</span>"
    //       );
    //     },
    //   },
  });
};
