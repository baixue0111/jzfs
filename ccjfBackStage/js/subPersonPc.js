
//findAllResExt();
changeFrameHeight();
// 窗口改变的时候在次适应高度
window.onresize=function(){  
    changeFrameHeight();  
} 

// 设置侧边栏高度等于窗口的高度
var windowHeight = document.documentElement.clientHeight;
$(".navTab-left").css('height', windowHeight);


// 点击每一项资料进入上传页面
var _groupId;
function openUpload(btn) {
	_groupId = $(btn).attr("id");
    //console.log(_groupId);
    $(btn).addClass("active").siblings().removeClass("active");
    $("#external-frame").attr("src", "proveData.html");
}

// iframe高度自适应
function changeFrameHeight(){
    var ifm= document.getElementById("external-frame"); 
    ifm.height=document.documentElement.clientHeight;
}

// 渲染列表
function findAllResExt() {
	$.ajax({
		type: "post",
		url: "/M_Web/upload/findAllResExt",
		success: function (data) {
			var _GroupId = $("nav-stacked li").attr("id");
			var getGroupId = data.resGroupCd;
			$.each(data, function (index, item) {
				var getGroupId = item.resGroupCd;
				$("#" + getGroupId).children(".navRight").addClass("successUpload");
				$("#" + getGroupId).children(".successUpload").html("已上传");
			})
		}
	})
}

// 点击基本信息
function baseInfo() {
    $("#external-frame").attr("src", "baseInfo.html");
}