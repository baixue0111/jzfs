
$(function () {
    // 图片轮播
    var mySwiper = new Swiper(".swiper-container", {
        autoplay: 500,
        loop: true,
        pagination: {
            el: ".swiper-pagination"
        },
        paginationType: "bullets",
        paginationClickable : true,
        navigation: {
          nextEl: ".imgNews-swiper-next",
          prevEl: '.imgNews-swiper-prev'
        }
      })
})