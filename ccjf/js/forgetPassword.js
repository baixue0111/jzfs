
//发送验证码
function sendCode(btn) {
	$("#verCode").removeAttr("onclick");
	var _verPhone = $("#phone").val(),
		_mweb = $("#sendCode").val(),
		_verPassword = $("#password").val(),
		_veraginPassword = $("#againPassword").val();
	if(_verPhone == "" || _verPhone == null || _verPhone == undefined) {
		mui.toast("请输入手机号");
		return;
	};
	if(_verPassword == "" || _verPassword == null || _verPassword == undefined) {
		mui.toast("请输入密码");
		return;
	};
	
	$.ajax({
		url: _mweb + '/sms/sendNoticeCode',
		type: "post",
		data: {
				"phone": _verPhone,
				"type": "2"
		},
		dataType: "json",
		success: function (data) {
			if(data.code == 0){
				buttonTime(btn);
			} else {
				mui.toast(data.msg);
			}
		}
	})
}
    
//点击完成 
function verificaCode() {
	var _verPhone = $("#phone").val(),
		_verPassword = $("#password").val(),
		_veraginPassword = $("#againPassword").val(),
		_verCode = $("#varCode").val();
	//console.log(_verPhone, _verPassword, _veraginPassword);
	if(_verPhone == "" || _verPhone == null || _verPhone == undefined) {
		mui.toast("请输入手机号");
		return;
	}
	if(_verPassword == "" || _verPassword == null || _verPassword == undefined) {
		mui.toast("请输入密码");
		return;
	}
	if(_veraginPassword == "" || _veraginPassword == null || _veraginPassword == undefined) {
		mui.toast("请确认密码");
		return;
	}
	
	$.ajax({
		url: "resetPwd",
		type: "post",
		data: {
			"phone": _verPhone,
			"password": _verPassword,
			"againPassword": _veraginPassword,
			"noticeCode": _verCode
		},
		dataType: "json",
		success: function (data) {
			if(data.code == 0){
				//console.log("请求成功!")
				window.location.href = "toLogin";
			} else {
				mui.toast(data.msg);
			}
		}
	})
}
    
//获取验证码
var wait = 120;
buttonTime = function (btn) {
    if (wait == 0) {
        btn.removeAttribute("disabled");
        $(btn).html("获取验证码");
        wait = 120;
    } else {
        btn.setAttribute("disabled", true);
        $(btn).html(wait +"s");
        wait--;
        setTimeout(function () {
            buttonTime(btn);
        }, 1000)
    }
}
