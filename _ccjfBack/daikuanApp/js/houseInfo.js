$(".mortgage input").change(function() {
	var isShow = $(".mortgage input:checked").val();
	if(isShow == 1) {
		$(".mortgageMoney").show();
	} else {
		$(".mortgageMoney").hide();
	}
})



// 图片上传
function uploadChange(event, id) {
	//console.log(event)
	//console.log("id===" + id)
	
	var imgArr = {};
	var reader = new FileReader();
	reader.onload = function(e) {
	  	console.log(this.result)
		$("#" + id).attr("src", this.result);
	   	var image = $("#" + id)[0];
	   	image.onload = function() {
	  		//var imgWidth = this.width;
	  		//var height = this.height;
	    	compress(image, 600, 400, 1.0);
	   	};
	   //	console.log("原图片大小：" + this.result.length);
	};
	reader.readAsDataURL(event.files[0]);   //读取文件 
	//console.log(event.files[0]);     
}; 


// 图片压缩
function compress(image, width, height, ratio) {
	//console.log(image.width)  // 获取图片宽
	//console.log(image.height)  // 获取图片高度
    //计算压缩比，按值大的一方进行压缩
    var widthScale = width/image.width;
    var heightScale = height/image.height;
     
    var canvas = document.createElement("canvas");
    if(widthScale > heightScale) {
      canvas.width = width; //设置画布尺寸，按宽压缩
      canvas.height = widthScale * image.height;
    }else{
      canvas.height = height; //设置画布尺寸，按高压缩
      canvas.width = heightScale * image.width;
    }
    
    var ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    //ratio值越小，图片资量越差，fullQuality/1.0, lowQuality/0.1 
    var base64Img = canvas.toDataURL("image/jpeg", ratio);
    console.log("新图片大小：" + base64Img.length);
    //console.log(base64Img)
    //return base64Img; //压缩后的base64字符串格式的图片
}
