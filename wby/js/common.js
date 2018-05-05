(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth > 768 ? 768 : docEl.clientWidth;
            //console.log(docEl.clientWidth);
             //console.log(docEl.clientWidth >= 768);
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//获取url
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

// 显示 活动规则 弹框
function showAlert() {
    $(".mask").show();
    $(".alertBox").show();
}

// 关闭 活动规则 弹框
function closeAlert() {
    $(".mask").hide();
    $(".alertBox").hide();
}