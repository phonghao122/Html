document.getElementById("submit").addEventListener("click", function() {
    let a = document.getElementById("numberA").value * 1;
    let b = document.getElementById("numberB").value * 1;
    if (typeof a === "number" && typeof b === "number") {
        if(b === 0){
            document.getElementById("result").innerText = "Không thể chia hết cho 0";
        }else {
            if(a%b === 0){
                document.getElementById("result").innerText = "a chia hết cho b";
            }else {
                document.getElementById("result").innerText = "a không chia hết cho b";
            }
        }
    }else {
        document.getElementById("result").innerText = "a và b không hợp lệ";
    }
})