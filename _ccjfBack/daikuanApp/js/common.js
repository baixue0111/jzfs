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

// 日期转换
/**       
* 时间戳转换日期       
* @param <int> unixTime  待时间戳(秒)       
* @param <bool> isFull  返回完整时间(Y-m-d 或者 Y-m-d H:i:s)       
* @param <int> timeZone  时区       
*/
function zhDate(_time) {
	var unixTimestamp = new Date( _time );
	var commonTime = unixTimestamp.toLocaleString();
	var subCommonTime = commonTime.substring(0,9);
	var splicCommonTime = subCommonTime.split('/');
	var _newData = splicCommonTime[0] + '年' + splicCommonTime[1] + '月' + splicCommonTime[2] + '日';
	return _newData;
}


// 请求域名
var _url = 'http://192.168.1.243:8081/';


// 进度
function indexPage() {
	window.location.href = "index.html";
}

// 进度
function progress() {
	window.location.href = "loanProgress.html";
}

//收益
function earnBtn() {
	window.location.href = "earnings.html";
}

//客户
function customer() {
	window.location.href = "customer.html";
}

// 我的
function my() {
	window.location.href = "wode.html";
}