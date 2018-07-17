var appliNo = $("#appliNo").val();
collectList();

//资料列表接口
function collectList() {
	var newUrl = _url + 'ccjf-web/record/collectList';
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
				
				// 判断身份证信息状态
				if(data.idCardStatusCode == 0) {
					$(".cardStatus").html("已完善");
					$(".cardStatus").addClass("perfect");
				} else if(data.idCardStatusCode == 1) {
					$(".cardStatus").html("未完善");
				}else if(data.idCardStatusCode == 2) {
					$(".cardStatus").html("待补充");
					$(".cardStatus").addClass("waitSupp");
				}else if(data.idCardStatusCode == 3) {
					$(".cardStatus").html("已审核");
					$(".cardStatus").addClass("checked");
				}else if(data.idCardStatusCode == 4) {
					$(".cardStatus").html("审核不通过");
					$(".cardStatus").addClass("checkError");
				}
				
				// 判断联系人状态
				if(data.contactStatusCode == 0) {
					$(".contactInfo").html("已完善");
					$(".contactInfo").addClass("perfect");
				} else if(data.contactStatusCode == 1) {
					$(".contactInfo").html("未完善");
				}else if(data.contactStatusCode == 2) {
					$(".contactInfo").html("待补充");
					$(".contactInfo").addClass("waitSupp");
				}else if(data.contactStatusCode == 3) {
					$(".contactInfo").html("已审核");
					$(".contactInfo").addClass("checked");
				}else if(data.contactStatusCode == 4) {
					$(".contactInfo").html("审核不通过");
					$(".contactInfo").addClass("checkError");
				}
				
				// 判断职业信息状态
				if(data.jobInfoStatusCode == 0) {
					$(".jobInfo").html("已完善");
					$(".jobInfo").addClass("perfect");
				} else if(data.jobInfoStatusCode == 1) {
					$(".jobInfo").html("未完善");
				}else if(data.jobInfoStatusCode == 2) {
					$(".jobInfo").html("待补充");
					$(".jobInfo").addClass("waitSupp");
				}else if(data.jobInfoStatusCode == 3) {
					$(".jobInfo").html("已审核");
					$(".jobInfo").addClass("checked");
				}else if(data.jobInfoStatusCode == 4) {
					$(".jobInfo").html("审核不通过");
					$(".jobInfo").addClass("checkError");
				}
				
				// 判断房产信息状态
				if(data.hourseStatusCode == 0) {
					$(".houseInfo").html("已完善");
					$(".houseInfo").addClass("perfect");
				} else if(data.hourseStatusCode == 1) {
					$(".houseInfo").html("未完善");
				}else if(data.hourseStatusCode == 2) {
					$(".houseInfo").html("待补充");
					$(".houseInfo").addClass("waitSupp");
				}else if(data.hourseStatusCode == 3) {
					$(".houseInfo").html("已审核");
					$(".houseInfo").addClass("checked");
				}else if(data.hourseStatusCode == 4) {
					$(".houseInfo").html("审核不通过");
					$(".houseInfo").addClass("checkError");
				}
			}
		}
	})
}

//进入身份证认证页面
function cardAuthen(){
	window.location.href = "cardAuthen.html";
}

//进入其它信息
function otherInfo(){
	window.location.href = "otherInfo.html";
}

// 进入联系方式页面
function contact(){
	window.location.href = "contact.html";
}

// 进入房产信息页面
function houseInfo() {
	window.location.href = "houseMsg.html";
}