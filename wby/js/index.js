$(function () {



    // 遍历给li绑定点击事件
    $(".list-item").each(function (index) {
        $(this).click(function () {

            clickSign();

            //window.location.href = "sign.html";
        })
    })


    function clickSign() {
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
})