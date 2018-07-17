// 保存联系方式
function saveWorkInfo() {
	//var index = $("#contactName1  option:selected").attr("id");
	//console.log($("#contactName1  option:selected").val())
	var _phone = $("#phone").val(),    // 手机号
		_email = $("#email").val(),   // 邮箱
		_weixin = $("#weixin").val(),  // 微信
		_qq = $("#qq").val(),   // qq
		_addressOld = $("#addressOld").val(),   // 家庭地址
		_addressNew = $("#addressNew").val(),   // 现住址
		
		//_contact1 = $("#contact1 option").eq(selectedIndex).attr("id"),   // 联系人1 -----> 关系	
		_contactName1 = $("#contactName1").val(),   // 联系人1 ----> 姓名
		_contactPhone1 = $("#contactPhone1").val(),  // 联系人1 ----> 手机号
		
		_contact2 = $("#contact2").val(),   // 联系人2 -----> 关系
		_contactName2 = $("#contactName2").val(),   // 联系人2 ----> 姓名
		_contactPhone2 = $("#contactPhone2").val(),  // 联系人2 ----> 手机号
		
		_contact3 = $("#contact3").val(),   // 联系人3 -----> 关系
		_contactName3 = $("#contactName3").val(),   // 联系人3 ----> 姓名
		_contactPhone3 = $("#contactPhone3").val();  // 联系人3 ----> 手机号
		
		
		if(_phone == "" || _phone == null || _phone == undefined) {
			mui.toast("请输入手机号！");
			return;
		};
		
		if(_email == "" || _email == null || _email == undefined) {
			mui.toast("请输入邮箱！");
			return;
		};
		
		if(_addressOld == "" || _addressOld == null || _addressOld == undefined) {
			mui.toast("请输入家庭住址！");
			return;
		};
		
		if(_addressNew == "" || _addressNew == null || _addressNew == undefined) {
			mui.toast("请输入现住址！");
			return;
		};
		
		if(_addressNew == "" || _addressNew == null || _addressNew == undefined) {
			mui.toast("请输入现住址！");
			return;
		};
		
		if(_contact1 == "请选择与联系人关系" || _contact2 == "请选择与联系人关系" || _contact3 == "请选择与联系人关系") {
			mui.toast("请选择与联系人关系！");
		};
		
		if(_contactName1 == "" || _contactName1 == null || _contactName1 == undefined || _contactName2 == "" || _contactName2 == null || _contactName2 == undefined || _contactName2 == "" || _contactName2 == null || _contactName2 == undefined) {
			mui.toast("请输入联系人姓名！");
		};
		
		if(_contactPhone1 == "" || _contactPhone1 == null || _contactPhone1 == undefined || _contactPhone2 == "" || _contactPhone2 == null || _contactPhone2 == undefined || _contactPhone2 == "" || _contactPhone2 == null || _contactPhone2 == undefined) {
			mui.toast("请输入联系人电话！");
		};
		
		$.ajax({
			type: "post",
			url: "record/saveContactInfo",
			data: {
				"appliNo": "1", //申请单sid
				"selfContactWay": {
					"phone": _phone,                   //手机
					"mailBox": _email,              //邮箱
					"wechat": _weixin,                     //微信
					"qq": _qq,
					"homeAddrStreet": _addressOld,   //家庭住址祥址
					"liveAddrStreet": _addressNew           //现住址详细地址
				},
				"ortherContacts ": [{
						"contactName": _contactName1,    // 联系人姓名
						"phone": _contactName1,  //联系人电话
						"rel": "1",              // 关系
					}, {
						"contactName ": _contactName2 ,    // 联系人姓名
						"phone": _contactName2,    //联系人电话
						"rel": "2 "              // 关系
					}, 
					{
						"contactName ": _contactName3,   //联系人姓名
						"phone": _contactName3,   //联系人电话
						"rel": "3"                 // 关系
					}
				] 
			},
			dataType: "json",
			contentType: "application/jsonp;charset=utf-8",
			success: function(data) {
				// status == 0表示请求成功
				if(data.status == 0) {
					mui.toast(data.message);
				}
			}
		})
}
