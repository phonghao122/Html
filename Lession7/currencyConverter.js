document.getElementById("convert").addEventListener("click", function() {
    let fromCurrency = document.getElementById("fromCurrency");
    let toCurrency = document.getElementById("toCurrency");
    let amount = document.getElementById("amount");
    if (fromCurrency.value === "1" && toCurrency.value === "2") {
        let result = amount.value/23000;
        document.getElementById("result").innerHTML = `Result: ${result} USD`;
    }else if (fromCurrency.value === "2" && toCurrency.value === "1") {
        let result = amount.value*23000;
        document.getElementById("result").innerHTML = `Result: ${result} VND`;
    }
    else alert("Chọn lại đơn vị tiền tệ");
})