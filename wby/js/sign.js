$(function () {
    // 选择时间（选中的span 会有selectSpan类名）
    $(".eachTime li").each(function () {
        $(this).click(function () {
            $(".eachTime li").removeClass("selectSpan");
            $(this).addClass("selectSpan");
            //console.log($(this).html())
        })
    })

    siginBtn = function() {
        var selectTime = $(".selectSpan").html(),
        name = $("#name").val(),
        cardId = $("#cardId").val(),
        phone = $("#phone").val();

        if(selectTime == "" || selectTime == undefined || selectTime == null) {
            $(".errorMsg").html("请选择时间！");
            return;
        }

        if(name == "" || name == undefined || name == null || cardId == "" || cardId == undefined || cardId == null || phone == "" || phone == undefined || phone == null) {
            $(".errorMsg").html("请填写完整资料！");
            return;
        }
        console.log(selectTime, name, cardId, phone);

        $.ajax({
            url: "",
            type: "post",
            data: "",
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            success: function (data) {

            }
        })
    }

    // 清除错误信息提示
    clearError = function() {
        $(".errorMsg").html("");
    }

})