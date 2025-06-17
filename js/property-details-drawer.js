  // Property Info Slider
   var thumbnailSwiper = new Swiper(".thumbnail-swiper", {
    spaceBetween: 6,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var propertyInfoSwiper = new Swiper(".property-info-slider", {
    navigation: {
      nextEl: ".property-info-slider .auction-button-next",
      prevEl: ".property-info-slider .auction-button-prev",
    },
    pagination: {
      el: ".property-info-slider .swiper-pagination",
      clickable: true,
      dynamicBullets: false,
    },
    thumbs: {
      swiper: thumbnailSwiper,
      clickable: true,
    },
  });


    $(".comparable-tab-panel-inner .digimap-map .fill-icon.edit").click(function () {
    $("body").toggleClass("map-info-show");
  });
    $(".comparable-tab-panel-inner .map-info-box .btn-outline-primary.close").click(function () {
    $("body").removeClass("map-info-show");
  });
