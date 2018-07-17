
$(function () {

    spLoop();   // 横向新闻滚动
    spLoop2();   // 底部学术活动横向滚动

    // 图片轮播
    var mySwiper = new Swiper(".swiper-container", {
        autoplay: 5000,
        loop: true,
        pagination: ".swiper-pagination",
        paginationType: "bullets",
        paginationClickable : true,
        navigation: {
          nextEl: ".imgNews-swiper-next",
          prevEl: '.imgNews-swiper-prev'
        }
    })

      // 工作动态 ----  新闻滚动
    var mySwiper2 = new Swiper(".swiper-container2", {
        direction: 'vertical',
        autoplay: 5000,
        loop: true,
        paginationType: "bullets",
        paginationClickable : true
    })

      // 鼠标经过图标变为“通知公告”
      // $(".hxgdBgImg").hover(function () {
      //   $(".hxgdBgImg").html("通知公告")
      // })
    //文字横向滚动
    function spLoop() {
        var num = 0;
        function goLeft() {
            //750是根据你给的尺寸，可变的
            if (num == -750) {
                num = 0;
            }
            num -= 1;
            $(".hxgdCon").css({
                left: num
            })
        }
        //设置滚动速度
        clearInterval(timer);
        var timer = setInterval(goLeft, 50);
        //设置鼠标经过时滚动停止
        $("#scroll-div").hover(function() {
            clearInterval(timer);
        },
        function() {
            timer = setInterval(goLeft, 20);
        })
    }

    function xshdLoop() {
        var num = 0;
        function goLeft() {
            //750是根据你给的尺寸，可变的
            if (num == -750) {
                num = 0;
            }
            num -= 1;
            $(".hxgdCon").css({
                left: num
            })
        }
        //设置滚动速度
        var timer = setInterval(goLeft, 50);
        //设置鼠标经过时滚动停止
        $("#scroll-div").hover(function() {
            clearInterval(timer);
        },
        function() {
            timer = setInterval(goLeft, 20);
        })
    }

      // 学术论文
    var mySwiper3 = new Swiper(".swiper-container3", {
        autoplay: 5000,
        loop: true,
        pagination: ".xslwSwiperPage",
        paginationType: "bullets",
        paginationClickable : true
    })

    var mySwiper4 = new Swiper(".swiper-container4", {
        autoplay: 5000,
        loop: true,
        pagination: ".xslwSwiperPage",
        paginationType: "bullets",
        paginationClickable : true
    })

    // 渐变人物
    var mySwiper5 = new Swiper(".swiper-container5", {
        autoplay: 6000,
        loop: true,
        paginationType: "bullets",
        effect : 'fade',
        flip: {
                slideShadows : true,
                limitRotation : true,
            }
    })

    // 学术活动 -- 鼠标移上
    $(".xshdList li").each(function (index) {
        $(".xshdList li").mouseover(function () {
            var _index = $(this).index();
            $(".xshdList li h2").eq(_index).addClass("activeH2");
        })

        $(".xshdList li").mouseout(function () {
            var _index = $(this).index();
            $(".xshdList li h2").eq(_index).removeClass("activeH2");
        })
    })

    // 学术活动 -- 横向滚动
    function spLoop2() {
        var num = 0;
        function goLeft2() {
            //750是根据你给的尺寸，可变的
            if (num == -750) {
                num = 0;
            }
            num -= 1;
            $(".xshdList").css({
                left: num
            })
        }
        //设置滚动速度
        clearInterval(timer2);
        var timer2 = setInterval(goLeft2, 50);
        //设置鼠标经过时滚动停止
        $("#xsActivity").hover(function() {
            clearInterval(timer2);
        },
        function() {
            timer2 = setInterval(goLeft2, 20);
        })
    }
})