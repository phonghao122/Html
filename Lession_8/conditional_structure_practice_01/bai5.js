document.getElementById("submit").addEventListener("click", () => {
    let bkt = document.getElementById("bkt").value * 1;
    let gk = document.getElementById("gk").value * 1;
    let ck = document.getElementById("ck").value * 1;
    if(typeof bkt === "number" && typeof gk === "number" && typeof ck === "number") {
        if(bkt >= 0 && bkt <= 10 && gk >=0 && gk <=10 && ck >= 0 && ck <=10) {
            let result = (bkt + gk + ck * 2) / 4;
            if(result >= 8){
                document.getElementById("result").innerText = `Điểm trung bình: ${result}. Học sinh đạt loại giỏi`;
            }else if(result >= 6.5){
                document.getElementById("result").innerText = `Điểm trung bình: ${result}. Học sinh đạt loại khá`;
            }else if(result >= 5){
                document.getElementById("result").innerText = `Điểm trung bình: ${result}. Học sinh đạt loại trung bình`;
            }else if(result >= 3.5){
                document.getElementById("result").innerText = `Điểm trung bình: ${result}. Học sinh đạt loại yếu`;
            }else {
                document.getElementById("result").innerText = `Điểm trung bình: ${result}. Học sinh đạt loại kém`;
            }
        }else {
            document.getElementById("result").innerText = `Điểm không hợp lệ`;
        }
    }else {
        document.getElementById("result").innerText = `Điểm không hợp lệ`;
    }
})