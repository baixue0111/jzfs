




// 获取验证码
function getIdentCode(btn) {
	var newUrl = _url + 'ccjf-web/user/getIdentCode',
		_phone = $("#phone").val(),
		reg = /^1[345678]\d{9}/;
		
		if(!reg.test(_phone)) {
			mui.toast("请输入正确的手机号");
			return;
		};
		
		$.ajax({
			type: "post",
			url: newUrl,
			data: {
				"mobile": _phone
			},
			dataType: "jsonp",
			jsonp: "callback",
			contentType: "application/jsonp;charset=utf-8",
			success: function(data) {
				// status == 0表示请求成功
				if(data.status == 0) {
					mui.toast(data.message);
					buttonTime(btn);
				} else {
					mui.toast(data.message);
				}
			}
		})
}


// 点击下一步
function userRegister() {
	var newUrl = _url + 'ccjf-web/user/forgetPwd',
		_phone = $("#phone").val(),
		_code = $("#account").val(),
		_password = $("#password").val(),
		_passAgain = $("#passwordAgain").val();
		
		if(_code == "" || _code == null || _code == undefined) {
			mui.toast("请输入验证码");
			return;
		}
		
		if(_password == "" || _password == null || _password == undefined) {
			mui.toast("请输入密码");
			return;
		}
		
		if(_passAgain == "" || _passAgain == null || _passAgain == undefined) {
			mui.toast("请再次输入密码");
			return;
		}
		
		if(_password != _passAgain) {
			mui.toast("两次密码输入不一致");
			return;
		}
		
		$.ajax({
			type: "post",
			url: newUrl,
			data: {
				"mobile": _phone,
				"password": _password,
				"identCode": _code
			},
			dataType: "jsonp",
			jsonp: "callback",
			contentType: "application/jsonp;charset=utf-8",
			success: function(data) {
				// status == 0表示请求成功
				if(data.status == 0) {
					window.location.href = "login.html";
				} else {
					mui.toast(data.message);
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