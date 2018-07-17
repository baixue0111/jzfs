
//ios调相册兼容写法
function compaIOS() {
	var file = document.getElementById('sfz-file');
	var file = $("#sfz-file");
	if (getIos()) {
	    file.removeAttr("capture");
	}
	function getIos() {
	    var ua=navigator.userAgent.toLowerCase();
	    if (ua.match(/iPhone\sOS/i) == "iphone os") {
	        return true;
	    } else {
	        return false;
	    }
	}
}

// 图片大小
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};
    if(maxWidth){
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;

        if( rateWidth > rateHeight )
        {
            param.width =  maxWidth;
            param.height = Math.round(height / rateWidth);
        }else
        {
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
    }
    return param;
};

//获取url
function GetQueryString(name) {
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
