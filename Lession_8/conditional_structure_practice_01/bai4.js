document.getElementById("btn").addEventListener("click", function() {
    let a = document.getElementById("numA").value * 1;
    let b = document.getElementById("numB").value * 1;
    let c = document.getElementById("numC").value * 1;
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        let max = a;
        if(b> max){
            max = b;
            if (c > max){
                max = c;
            }
        }else if(c > max){
            max = c;
        }
        document.getElementById("result").innerText = `Max: ${max}`;
    }else {
        document.getElementById("result").innerText = "Số không hợp lệ";
    }
})