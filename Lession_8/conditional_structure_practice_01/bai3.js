document.getElementById("submit").addEventListener("click", function () {
    let a = document.getElementById("number1").value * 1;
    if(typeof a === "number") {
        if(a > 0){
            document.getElementById("result").innerText = `${a} > 0`;
        } else if(a < 0){
            document.getElementById("result").innerText = `${a} < 0`;
        }else {
            document.getElementById("result").innerText = `${a} = 0`;
        }
    }else {
        document.getElementById("result").innerText = "Số không hợp lệ";
    }
})