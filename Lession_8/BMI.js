document.getElementById("submit").addEventListener("click", function (event) {
    let weight = document.getElementById("weight").value * 1;
    let height = document.getElementById("height").value * 1;
    if(weight > 0 && height > 0) {
        let bmi = weight / (height ^ 2);
        if (bmi < 18.5) {
            document.getElementById("result").innerText = "Underweight";
        } else if (bmi < 25.0) {
            document.getElementById("result").innerText = "Normal";
        } else if (bmi < 30.0) {
            document.getElementById("result").innerText = "Overweight";
        } else {
            document.getElementById("result").innerText = "Obese";
        }
    }else {
        document.getElementById("result").innerText = "Cân nặng và chiều cao không hợp lệ";
    }
})
