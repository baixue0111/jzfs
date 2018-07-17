

// 点击登录
function signIn(btn) {
	mui(btn).button('loading');//切换为loading状态
	
	var newUrl = _url + '/ccjf-web/user/userLogin';
	var _phone = $("#account").val();
	var _password = $("#password").val();
	var reg = /^1[345678]\d{9}/;
	if(!reg.test(_phone)) {
		mui(btn).button('reset');  //切换为reset状态(即重置为原始的button)
		mui.toast("请输入正确的手机号");
		return;
	}
	
	if(_password == "" || _password == null || _password == undefined) {
		mui(btn).button('reset');  //切换为reset状态(即重置为原始的button)
		mui.toast("请输入密码");
		return;
	}
	
	console.log(newUrl)
	
	$.ajax({
		type: "post",
		url: newUrl,
		data: {
			"mobile": _phone,
			"password": _password
		},
		dataType: "json",
		success: function(data) {
			mui(btn).button('reset');  //切换为reset状态(即重置为原始的button)
			// status == 0表示请求成功
			if(data.status == 0) {
				localStorage.setItem("phone", _phone);
				window.location.href = "index.html";
			} else{
				mui.toast(data.message);
			}
		}
	})
}


// 进入注册页面
function regBtn() {
	window.location.href = "reg.html";
}

// 进入忘记密码页面
function forgetPass() {
	window.location.href = "ForgotPwd.html";
}