// 首页轮播
(function () {
    var $span = $(".btnGroup span");
    var lunArr = ['item1', 'item2', 'item3'];   // 0 1 2
    var index = 0;

    // 切换下一张图片
    function next() {
        lunArr.push(lunArr[0]);
        lunArr.shift();
        $(".list li").each(function (i, e) {
            $(e).removeClass().addClass(lunArr[i]);
        })
        index ++;
        if(index > 2) { index = 0;}
        showActive();
    }

    // 小横线
    function showActive() {
        $($span).eq(index).addClass("show").siblings().removeClass("show");
    }

    time = setInterval(next, 4000);
})()