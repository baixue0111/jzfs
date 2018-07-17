var issue, startDate, endDate, validityStatusCode, facePath, backPath;
var appliNo = $("#appliNo").val();  // 获取申请单号

if(appliNo != "" || appliNo != null || appliNo != undefined) {
	//cardEcho();
}

//身份证认证页面回显
function cardEcho() {
	var newUrl = _url + 'ccjf-web/record/showIdCardInfo';
	$.ajax({
		type: "post",
		url: newUrl,
		data: {"appliNo": appliNo},
		dataType: "jsonp",
		jsonp: "callback",
		contentType: "application/jsonp;charset=utf-8",
		success: function(data) {
			// status == 0表示请求成功
			if(data.status == 0) {
				var data = data.result;
				if(data) {
					$("#name").val(data.name);   // 名字
					$("#sex").val(data.sex);      // 性别
					$("#nation").val(data.nationality);   // 民族
					$("#cardId").val(data.cardNum);    // 身份证号 
					$("#getDate").val(data.birthday);   // 出生日期
					$("#address").val(data.issue);    // 户籍地址
					$("#cardFront").attr("src", data.facePath);   // 身份证正面
					$("#cardBack").attr("src", data.backPath);    // 身份证反面
				} else {
					console.log("暂无数据");
				}
			}
		}
	})
}

// 点击“保存”按钮
function saveCardId() {
	var newUrl = _url + 'ccjf-web/record/saveIdCardInfo';
	var _name = $("#name").val(),   // 名字
		_sex = $("#sex").val(),      // 性别
		_nation = $("#nation").val(),   // 民族
		_carId = $("#cardId").val(),    // 身份证
		_date = $("#getDate").val(),   // 出生日期
		_address = $("#address").val();    // 户籍地址
		//$("#cardFront").attr("src", data.facePath),   // 身份证正面路劲（身份证识别返回图片路劲）
		//$("#cardBack").attr("src", data.backPath);    // 身份证反面
	var param = {};
	param["name"] = _name;
	param["sex"] = _sex;
	param["nationality"] = _nation;
	param["address"] = _address;
	param["birthday"] = _date;
	param["cardNum"] = 	_carId;
	param["issue"] = issue;   // 签发机关（识别身份证时获取）
	param["startDate"] = startDate;   // 有效期开始时间
	param["endDate"] = endDate;   // 有效期结束时间
	param["validityStatusCode"] = validityStatusCode;   // 身份证是否有效
	param["facePath"] = facePath;   // 身份证正面路劲
	param["backPath"] = backPath;   //身份证反面路劲
	
	$.ajax({
		type: "post",
		url: newUrl,
		data: {
			"appliNo": appliNo,
			"idCard": param
		},
		dataType: "jsonp",
		jsonp: "callback",
		contentType: "application/jsonp;charset=utf-8",
		success: function(data) {
			// status == 0表示请求成功
			if(data.status == 0) {
				mui.toast(data.msg);
				setTimeout(function () {
					window.location.href = "basicList.html";
				}, 500)
			}
		}
	})
}

// 失去焦点时设置input type="text"
function onBlurInput(btn) {
	var inputVal = $(btn).val();
	console.log(inputVal)
	if(inputVal == "" || inputVal == null || inputVal == undefined) {
		$(btn).attr("type", "text");
		$(btn).attr("placeholder", "请输入出生日期");
	}
}

// 获得焦点时修改input type="date"
function onFocusInput(btn){
	$(btn).attr("type", "date");
	$(btn).removeAttr("placeholder");
	setTimeout(function() {
		$(btn).focus();
	}, 10);
}

// 图片上传
function uploadChange(event, id) {
	//console.log(event)
	//console.log("id===" + id)
	var imgArr = {};
	var reader = new FileReader();
	reader.onload = function(e) {
	  	//console.log(this.result)
		$("#" + id).attr("src", this.result);
	   	var image = $("#" + id)[0];
	   	//console.log(image)
	   	var _img = new Image();
	   	_img.src = this.result;
	   	
	   	console.log(_img.width);
	   	console.log(_img.height);
	   	
	   	image.onload = function() {
	  		//var imgWidth = this.width;
	  		//var height = this.height;
	    	compress(_img, 600, 0, 1.0);
	   	};
	   //	console.log("原图片大小：" + this.result.length);
	};
	reader.readAsDataURL(event.files[0]);   //读取文件 
	//console.log(event.files[0]);     
}; 



// 图片压缩
function compress(image, width, height, ratio) {
	console.log("width================"+ width);   // 600
	console.log("_img==========w" + image.width)  // 获取图片宽   1080
	console.log("_img==========h" + image.height)  // 获取图片高度  1440
    //计算压缩比，按值大的一方进行压缩
    var widthScale = width/image.width;    // 宽度压缩比： 0.5555555555555556
    var heightScale = height/image.height;
    
    console.log("widthScale==============="+ widthScale);
    // console.log("heightScale==============="+ heightScale);   // 0

     
    
    var canvas = document.createElement("canvas");
    if(widthScale > heightScale) {
      canvas.width = width; //设置画布尺寸，按宽压缩
      canvas.height = widthScale * image.height;
      
      console.log("canvas.width=============="+ canvas.width)
      console.log("image.height=======" + image.height);
     // console.log(widthScale * image.height);
      console.log("canvasHeight ================ " + canvas.height);
      
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
    return base64Img; //压缩后的base64字符串格式的图片
}


// 身份证正面识别
function cardFace() {
	var newUrl = _url + '';
	$.ajax({
		type: "post",
		url: newUrl,
		data: {"": ""},
		dataType: "jsonp",
		jsonp: "callback",
		contentType: "application/jsonp;charset=utf-8",
		success: function(data) {
			// status == 0表示请求成功
			if(data.status == 0) {
				
			}
		}
	})
}

// 身份证反面识别
function cardBack() {
	var newUrl = _url + '';
	$.ajax({
		type: "post",
		url: newUrl,
		data: {"": ""},
		dataType: "jsonp",
		jsonp: "callback",
		contentType: "application/jsonp;charset=utf-8",
		success: function(data) {
			// status == 0表示请求成功
			if(data.status == 0) {
				
			}
		}
	})
}