
	//ios调相册兼容写法
    var file = document.getElementById('sfz-file');
    if (getIos()) {
        file.removeAttribute("capture");
    }
    function getIos() {
        var ua=navigator.userAgent.toLowerCase();
        if (ua.match(/iPhone\sOS/i) == "iphone os") {
            return true;
        } else {
            return false;
        }
    }

//此方法为file input元素的change事件
function change(getFile){
	var file = getFile.files[0];
	//console.log(file)
	var orientation;
	//EXIF js 可以读取图片的元信息 https://github.com/exif-js/exif-js
	EXIF.getData(file,function(){
		//console.log(file)
		orientation=EXIF.getTag(getFile,'Orientation');
	});
	var reader = new FileReader();
	reader.onload = function(e) {
		console.log(e)
		getImgData(this.result,orientation,function(data){
			// this.result 图片路劲
			console.log("data==" + data)
		//这里可以使用校正后的图片data了
		});
	}
	reader.readAsDataURL(file);
}


// @param {string} img 图片的base64
// @param {int} dir exif获取的方向信息
// @param {function} next 回调方法，返回校正方向后的base64
var showImg, imgNew;
function getImgData(img,dir,next){
	//console.log(next())
	var image=new Image();
	showImg = document.getElementById("showUpdateImg");
	showImg.innerHTML ='<img id=imghead>';
    imgNew = document.getElementById('imghead');
	image.onload=function(){
		var degree=0,drawWidth,drawHeight,width,height;
		drawWidth = this.naturalWidth;
		drawHeight = this.naturalHeight;
		//以下改变一下图片大小
		var maxSide = Math.max(drawWidth, drawHeight);
		if (maxSide > 1024) {
			var minSide = Math.min(drawWidth, drawHeight);
			minSide = minSide / maxSide * 1024;
			maxSide = 1024;
			if (drawWidth > drawHeight) {
				drawWidth = maxSide;
				drawHeight = minSide;
			} else {
				drawWidth = minSide;
				drawHeight = maxSide;
			}
		}
		showImg.width = width = drawWidth;
		showImg.height = height = drawHeight;
		//var context=canvas.getContext('2d');
		//判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
		switch(dir){
			//iphone横屏拍摄，此时home键在左侧
			case 3:
				degree=180;
				drawWidth=-width;
				drawHeight=-height;
				break;
			//iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
			case 6:
				showImg.width=height;
				showImg.height=width;
				degree=90;
				drawWidth=width;
				drawHeight=-height;
				break;
				//iphone竖屏拍摄，此时home键在上方
			case 8:
				showImg.width=height;
				showImg.height=width;
				degree=270;
				drawWidth=-width;
				drawHeight=height;
				break;
		 }
		//使用canvas旋转校正
		//context.rotate(degree*Math.PI/180);
		showImg.style.transform = 'rotate(' + degree*Math.PI/180 + ')';
		imgNew.style.width = drawWidth;
		imgNew.style.height = drawHeight;
		//context.drawImage(this,0,0,drawWidth,drawHeight);
		//返回校正图片
		console.log(canvas.toDataURL("image/jpeg",.8))
		next(canvas.toDataURL("image/jpeg",.8));
	}
	imgNew.src = img;
}


