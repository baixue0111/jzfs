

// 获取提现金额， 如果输入框有值则按钮变为可点，否则不可点（灰色）
var _input = $("#withDraw").val();
if(_input == "" || _input == null || _input == undefined) {
	$(".affWithDraw").addClass("defaultWithDraw");	
} else {
	$(".affWithDraw").removeClass("defaultWithDraw");	
}


// 点击全部提前获取当前可用余额
function allWithDraw() {
	var _balance = $("#balance").html();
	$("#withDraw").val(_balance);
	$(".affWithDraw").removeClass("defaultWithDraw");	
}

// 失去焦点时判断Input是否有值
function isValue(){
	var _iptValue = $("#withDraw").val();
	if(_iptValue == "" || _iptValue == null || _iptValue == undefined) {
		$(".affWithDraw").addClass("defaultWithDraw");	
	} else {
		$(".affWithDraw").removeClass("defaultWithDraw");	
	}
}
