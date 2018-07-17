$(function () {
	
	
// 点击登录
signIn = function() {
	var _userName = $("#phone-name").val(),
		_userPassword = $("#password").val();
	
	if(_userName == "" || _userName == null || _userName == undefined || _userPassword == "" || _userPassword == null || _userPassword == undefined) {
		mui.toast("请输入用户名或密码！");
		return;
	} else {
		// 登录接口
		
	}
}
// 跳转注册页面
openRegister = function() {
	console.log(111)
    //window.location.href = "register.html";
}

// 跳转注册页面
openForgetPass = function() {
	console.log(222)
    //window.location.href = "forgetPassword.html";
}
})
