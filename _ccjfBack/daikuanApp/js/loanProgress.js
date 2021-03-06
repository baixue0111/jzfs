
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


applyList();  // 进件列表


//进件列表
function applyList() {
	//var newUrl = _url + '/ccjf-web/apply/applyList';
	var newUrl = "json/applistList.json"
	$.ajax({
		type: "get",   // 部署时改为post请求
		url: newUrl,
		dataType: "json",
		success: function(data) {
			// status == 0表示请求成功
			if(data.status == 0) {
				var data = data.data;
				$.each(data, function(index, item) {
					var str = '<li class="mui-table-view-cell clickLi" id=id_'+index+'">'+
				    	'<div class="mui-navigate-right">'+
				    		'<span class="firstSpan">'+item.cust_name+'</span>'+
					    	'<span class="secondSpan">'+item.product_name+'</span>'+
					    	'<span class="secondSpan">'+item.update_date+'</span>'+
					    	'<span class="thirdSpan">'+item.status+'</span>'+
				    	'</div>'+
				    '</li>';
				    $(".tableList").append(str);
				})
			}
		}
	})
}

// 查询进件列表
function findProgress() {
	var newUrl = 'json/findProgress.json',
		_ketWord = $("#getQueryVal").val(),
		_startDate = $("#startDate").val(),
		_endDate = $("#endDate").val(),
		checkedVal = $(".radioGroup input:checked").val();
	$.ajax({
		type: "get",
		url: newUrl,
		/*data: {
			"name": _ketWord,
			"startDate": _startDate,
			"endDate": _endDate,
			"status": checkedVal
		},*/
		dataType: "json",
		success: function(data) {
			// status == 0表示请求成功
			if(data.status == 0) {
				var data = data.data;
				$(".tableList").html('<li class="mui-table-view-cell"><span class="firstSpan fontSize">客户姓名</span><span class="secondSpan fontSize">产品名</span><span class="secondSpan fontSize">日 期</span><span class="thirdSpan fontSize">状 态</span></li>');
				$.each(data, function(index, item) {
					var str = '<li class="mui-table-view-cell clickLi" id=id_'+index+'">'+
				    	'<div class="mui-navigate-right">'+
				    		'<span class="firstSpan">'+item.cust_name+'</span>'+
					    	'<span class="secondSpan">'+item.product_name+'</span>'+
					    	'<span class="secondSpan widthSpecil">'+item.update_date+'</span>'+
					    	'<span class="thirdSpan">'+item.status+'</span>'+
				    	'</div>'+
				    '</li>';
				    $(".tableList").append(str);
				})
			}
		}
	})
}
// 点击进件列表
mui(".mui-table-view").on('tap','.mui-table-view-cell',function(){
  //获取id
  var id = this.getAttribute("id");
  //传值给详情页面，通知加载新数据
 	console.log(id)
}) 



// 回调函数
function pullfreshFunction() {
	 //业务逻辑代码，比如通过ajax从服务器获取新数据；
     //注意：
     //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
     //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
     
     this.endPullupToRefresh(true|false);
	console.log("上拉加载回调函数执行")
}

// 跳转到资料列表
function openCheckList() {
	window.location.href = "checkList.html";
}

