document.getElementById("submit").addEventListener("click", function(){
    let ds = document.getElementById("ds").value * 1;
    let hh = document.getElementById("hh").value * 1;
    if(typeof ds === "number" && typeof hh === "number"){
        if(ds > 0 && hh > 0){
            let result = ds * (hh/100);
            document.getElementById("result").innerText = `Result: ${result}`;
        }else {
            document.getElementById("result").innerText = "Doanh số và phần trăm hoa hồng không hợp lệ";
        }
    }else document.getElementById("result").innerText = "Doanh số và phần trăm hoa hồng không hợp lệ";
})