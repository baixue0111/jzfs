

// 点击进件列表
$(".tableList .clickLi").on('tap',function(index){
	
	var _index = $(this).attr("id");
	window.location.href = "checkList.html?param=" + _index;
})
// 初始化scroll 控件
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

// 初始化上拉加载
mui.init({
	pullRefresh : {
	    container:"#pullRefresh",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
	    up : {
	      height:50,//可选.默认50.触发上拉加载拖动距离
	      auto:false,//可选,默认false.自动上拉加载一次
	      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
	      contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
	      callback :pullfreshFunction //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	    }
	}
});
// 回调函数
function pullfreshFunction() {
	 //业务逻辑代码，比如通过ajax从服务器获取新数据；
     //注意：
     //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
     //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
     this.endPullupToRefresh(true|false);
	console.log(111)
}


// 点击查询按钮
function getQueryVal() {
	var queryVal = $("#getQueryVal").val();
	console.log(queryVal)
}


