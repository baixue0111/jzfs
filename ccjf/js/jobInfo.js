



// 选择月收入
function selectIncome() {
    var _selectIncome = new MobileSelect({
        trigger: "#selectIncome",
        title: "月收入范围",
        wheels: [{
            data: ['3k以下', '3k - 5k', '5k - 10k', '10k - 20k', '20k - 50k', '50k以上']
        }],
        position: [1],
        callback: function(indexArr, data) {
            console.log(data);
        }
    })
}