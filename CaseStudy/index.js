class BuuPham {
    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    constructor(id, address, tenNguoiNhan, status) {
        this._id = id;
        this._address = address;
        this._tenNguoiNhan = tenNguoiNhan;
        this._address = address;
        this._status = status;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get tenNguoiNhan() {
        return this._tenNguoiNhan;
    }

    set tenNguoiNhan(value) {
        this._tenNguoiNhan = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}

class Thu extends BuuPham {
    constructor(id, address, tenNguoiNhan, status, loaiThu) {
        super(id, address, tenNguoiNhan, status);
        this._loaiThu = loaiThu;
    }

    get loaiThu() {
        return this._loaiThu;
    }

    set loaiThu(value) {
        this._loaiThu = value;
    }

    tinhPhiVanChuyen(){
        if (this._loaiThu === 0){
            return 500;
        }else return 3000;
    }
}
class HangHoa extends BuuPham {
    constructor(id, address, tenNguoiNhan, status, trongLuong) {
        super(id, address, tenNguoiNhan, status);
        this._trongLuong = trongLuong;
    }

    get trongLuong() {
        return this._trongLuong;
    }

    set trongLuong(value) {
        this._trongLuong = value;
    }

    tinhPhiVanChuyen(){
        return this._trongLuong*10000;
    }
}
class QuanLyBuuPham {
    get buuPham() {
        return this._buuPham;
    }

    set buuPham(value) {
        this._buuPham = value;
    }
    constructor(buuPham) {
        this._buuPham = buuPham;
    }
    disPlayBuuPham() {
        let data = "";
        for(let i = 0; i < this._buuPham.length; i++) {
            if(this._buuPham[i] instanceof Thu) {
                let thu = "";
                if(this._buuPham[i].loaiThu === 0){thu = "Thường";}else{thu = "Nhanh";}
                data += `id: ${this._buuPham[i].id}, Địa chỉ nhận hàng: ${this._buuPham[i].address}, Người Nhận: ${this._buuPham[i].tenNguoiNhan},
         Loại Thư: ${thu}, Phí Vận Chuyển: ${this._buuPham[i].tinhPhiVanChuyen()}, Status: ${this._buuPham[i].status} <br>`;
            }
            if(this._buuPham[i] instanceof HangHoa) {
                data += `id: ${this._buuPham[i].id}, Địa chỉ nhận hàng: ${this._buuPham[i].address}, Người Nhận: ${this._buuPham[i].tenNguoiNhan},
         Trọng Lượng: ${this._buuPham[i].trongLuong}, Phí Vận Chuyển: ${this._buuPham[i].tinhPhiVanChuyen()}, Status: ${this._buuPham[i].status} <br>`;
            }
        }
        return data;
    }
    themThu(id, address, tenNguoiNhan, status, loaiThu) {
        let thu = new Thu(id, address, tenNguoiNhan, status, loaiThu);
        this._buuPham.push(thu);
    }

    suaThu(id, address, tenNguoiNhan, status, loaiThu){
        for (let i = 0; i < this._buuPham.length; i++) {
            if(this._buuPham[i].id === id){
                this._buuPham[i].address = address;
                this._buuPham[i].tenNguoiNhan = tenNguoiNhan;
                this._buuPham[i].loaiThu = loaiThu;
                this._buuPham[i].status = status;
                break;
            }
        }
    }

    themHangHoa(id, address, tenNguoiNhan, status, trongLuong) {
        let thu = new HangHoa(id, address, tenNguoiNhan, status, trongLuong);
        this._buuPham.push(thu);
    }

    suaHangHoa(id, address, tenNguoiNhan, status, trongLuong) {
        for (let i = 0; i < this._buuPham.length; i++) {
            if(this._buuPham[i].id === id){
                this._buuPham[i].address = address;
                this._buuPham[i].tenNguoiNhan = tenNguoiNhan;
                this._buuPham[i].trongLuong = trongLuong;
                this._buuPham[i].status = status;
                break;
            }
        }
    }

    xoaBuuPham(id){
        for (let i = 0; i < this._buuPham.length; i++) {
            if(this._buuPham[i].id === id){
                this._buuPham.splice(i,1);
                break;
            }
        }
    }

    updateStatus(id) {
        for (let i = 0; i < this._buuPham.length; i++) {
            if(this._buuPham[i].id === id){
                this._buuPham[i].status = true;
            }
        }
    }
}
let buuPham = [];
let quanLyBuuPham = new QuanLyBuuPham(buuPham);
document.getElementById("add").addEventListener("click", function(){
    document.getElementById("them").style.display = "block";
    document.getElementById("sua").style.display = "none";
    document.getElementById("xoa").style.display = "none";
})
let loaibp;
document.getElementById("loaiBP").addEventListener("change", function(){
    loaibp = document.getElementById("loaiBP").value*1;
    if(loaibp === 0){
        document.getElementById("addThu").setAttribute("style", "display:block");
        document.getElementById("addHangHoa").setAttribute("style", "display:none");
    }
    if(loaibp === 1){
        document.getElementById("addHangHoa").setAttribute("style", "display:block");
        document.getElementById("addThu").setAttribute("style", "display:none");
    }
})
document.getElementById("themThu").addEventListener("click", function(){
    let id = 0;
    let address = document.getElementById("addAddressThu").value;
    let nguoiNhan = document.getElementById("addNguoiNhanThu").value;
    let loaiThu = document.getElementById("addLoaiThu").value*1;
    if(quanLyBuuPham.buuPham.length === 0){
        quanLyBuuPham.themThu(id,address, nguoiNhan, false, loaiThu);
        alert("Thêm Thành Công");
        document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
    }else {
        id = quanLyBuuPham.buuPham.length;
        quanLyBuuPham.themThu(id,address, nguoiNhan, false, loaiThu);
        alert("Thêm Thành Công");
        document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
    }
})
document.getElementById("themHangHoa").addEventListener("click", function(){
    let id = 0;
    let address = document.getElementById("addAddressHH").value;
    let nguoiNhan = document.getElementById("addnguoiNhanHH").value;
    let trongLuong = document.getElementById("addTrongLuong").value*1;
    if(quanLyBuuPham.buuPham.length === 0){
        quanLyBuuPham.themHangHoa(id,address, nguoiNhan, false, trongLuong);
        alert("Thêm Thành Công");
        document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
    }else {
        id = quanLyBuuPham.buuPham.length;
        quanLyBuuPham.themHangHoa(id,address, nguoiNhan, false, trongLuong);
        alert("Thêm Thành Công");
        document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
    }
})


document.getElementById("edit").addEventListener("click", function(){
    document.getElementById("them").style.display = "none";
    document.getElementById("sua").style.display = "block";
    document.getElementById("xoa").style.display = "none";
})
let editId;
document.getElementById("editId").addEventListener("change", function(){
    editId = document.getElementById("editId").value*1;
    let check = false;
    for (let i =0;i<quanLyBuuPham.buuPham.length;i++){
        if(quanLyBuuPham.buuPham[i].id === editId){
            check = true;
            document.getElementById("editResult").style.display = "none";
            if (quanLyBuuPham.buuPham[i] instanceof Thu){
                document.getElementById("suaThu").style.display = "block";
                document.getElementById("suaHangHoa").style.display = "none";
                break;
            }
            if (quanLyBuuPham.buuPham[i] instanceof HangHoa){
                document.getElementById("suaHangHoa").style.display = "block";
                document.getElementById("suaThu").style.display = "none";
                break;
            }
        }
    }
    if(!check){
        document.getElementById("editResult").innerText = "Bưu phẩm không tồn tại";
    }
})
document.getElementById("editThu").addEventListener("click", function(){
    let address = document.getElementById("editAddressThu").value;
    let nguoiNhan = document.getElementById("editNguoiNhanThu").value;
    let loaiThu = document.getElementById("editLoaiThu").value*1;
    let status = document.getElementById("editStatusThu").value;
    if(status === "null"){
        status = quanLyBuuPham.buuPham[editId].status;
        quanLyBuuPham.suaThu(editId,address, nguoiNhan, status, loaiThu);
    }else {
        quanLyBuuPham.suaThu(editId,address, nguoiNhan, status, loaiThu);
    }
    alert("Sửa Thành Công");
    document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
})
document.getElementById("editHH").addEventListener("click", function(){
    let address = document.getElementById("editAddressHH").value;
    let nguoiNhan = document.getElementById("editnguoiNhanHH").value;
    let trongLuong = document.getElementById("editTrongLuong").value*1;
    let status = document.getElementById("editStatusHH").value;
    quanLyBuuPham.suaHangHoa(editId,address, nguoiNhan, status, trongLuong);
    alert("Sửa Thành Công");
    document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
})


document.getElementById("delete").addEventListener("click", function(){
    document.getElementById("xoa").style.display = "block";
    document.getElementById("them").style.display = "none";
    document.getElementById("sua").style.display = "none";
})
let delId;
document.getElementById("delId").addEventListener("change", function(){
    delId = document.getElementById("delId").value*1;
    for (let i =0;i<quanLyBuuPham.buuPham.length;i++){
        if(quanLyBuuPham.buuPham[i].id === delId){
            document.getElementById("delResult").innerHTML = "Bưu phẩm có tồn tại";
            document.getElementById("delBP").style.display = "block";
        }else document.getElementById("delResult").innerHTML = "Bưu phẩm không tồn tại";
    }
})
document.getElementById("delBP").addEventListener("click", function(){
    quanLyBuuPham.xoaBuuPham(delId);
    alert("Xóa Thành Công");
    document.getElementById("display").innerHTML = quanLyBuuPham.disPlayBuuPham();
})