document.getElementById("submit").addEventListener("click", function() {
    let age = document.getElementById("age").value * 1;
    if(typeof age === "number" && age < 0 && age > 100) {
        if (age >= 16 && age <= 18) {
            document.getElementById("result").innerText = "Học sinh đủ điều kiện vào học lớp 10";
        } else {
            document.getElementById("result").innerText = "Học sinh không đủ điều kiện vào học lớp 10";
        }
    }else {
        document.getElementById("result").innerText = "Tuổi không hợp lệ";
    }
})