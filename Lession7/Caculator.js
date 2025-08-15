document.getElementById("addition").addEventListener('click', () => {
    let a = parseInt(document.getElementById("value1").value, 10);
    let b = parseInt(document.getElementById("value2").value, 10);
    document.getElementById("result").innerHTML = `${a+b}`;
})

document.getElementById("subtraction").addEventListener('click', () => {
    let a = parseInt(document.getElementById("value1").value, 10);
    let b = parseInt(document.getElementById("value2").value, 10);
    document.getElementById("result").innerHTML = `${a-b}`;
})

document.getElementById("multiplication").addEventListener('click', () => {
    let a = parseInt(document.getElementById("value1").value, 10);
    let b = parseInt(document.getElementById("value2").value, 10);
    document.getElementById("result").innerHTML = `${a*b}`;
})

document.getElementById("division").addEventListener('click', () => {
    let a = parseInt(document.getElementById("value1").value, 10);
    let b = parseInt(document.getElementById("value2").value, 10);
    if(b !== 0){
        document.getElementById("result").innerHTML = `${a/b}`;
    }else {
        document.getElementById("result").innerHTML = `Phép tính không hợp lệ`;
    }
})