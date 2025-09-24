class BuuPham {
    constructor(id, address, tenNguoiNhan, status) {
        this._id = id;
        this._address = address;
        this._tenNguoiNhan = tenNguoiNhan;
        this._status = status;
    }
    get id() { return this._id; }
    get address() { return this._address; }
    set address(val) { this._address = val; }
    get tenNguoiNhan() { return this._tenNguoiNhan; }
    set tenNguoiNhan(val) { this._tenNguoiNhan = val; }
    get status() { return this._status; }
    set status(val) { this._status = val; }
}

class Thu extends BuuPham {
    constructor(id, address, tenNguoiNhan, status, loaiThu) {
        super(id, address, tenNguoiNhan, status);
        this._loaiThu = loaiThu;
    }
    get loaiThu() { return this._loaiThu; }
    set loaiThu(val) { this._loaiThu = val; }
    tinhPhiVanChuyen() { return this._loaiThu === 0 ? 500 : 3000; }
}

class HangHoa extends BuuPham {
    constructor(id, address, tenNguoiNhan, status, trongLuong) {
        super(id, address, tenNguoiNhan, status);
        this._trongLuong = trongLuong;
    }
    get trongLuong() { return this._trongLuong; }
    set trongLuong(val) { this._trongLuong = val; }
    tinhPhiVanChuyen() { return this._trongLuong * 10000; }
}

class QuanLyBuuPham {
    constructor() { this._buuPham = []; this.nextId = 1; }
    themThu(address, tenNguoiNhan, loaiThu) {
        let bp = new Thu(this.nextId++, address, tenNguoiNhan, false, loaiThu);
        this._buuPham.push(bp);
    }
    themHangHoa(address, tenNguoiNhan, trongLuong) {
        let bp = new HangHoa(this.nextId++, address, tenNguoiNhan, false, trongLuong);
        this._buuPham.push(bp);
    }
    suaThu(id, address, tenNguoiNhan, status, loaiThu) {
        let bp = this._buuPham.find(b => b.id == id);
        if (bp instanceof Thu) {
            bp.address = address;
            bp.tenNguoiNhan = tenNguoiNhan;
            bp.loaiThu = loaiThu;
            bp.status = status;
        }
    }
    suaHangHoa(id, address, tenNguoiNhan, status, trongLuong) {
        let bp = this._buuPham.find(b => b.id == id);
        if (bp instanceof HangHoa) {
            bp.address = address;
            bp.tenNguoiNhan = tenNguoiNhan;
            bp.trongLuong = trongLuong;
            bp.status = status;
        }
    }
    xoaBuuPham(id) {
        this._buuPham = this._buuPham.filter(b => b.id != id);
    }
    disPlayBuuPham() {
        let html = `<tr>
            <th>ID</th><th>Địa Chỉ Nhận Hàng</th><th>Người Nhận</th>
            <th>Phí Vận Chuyển</th><th>Thông Tin Khác</th><th>Trạng Thái</th><th>Khác</th>
          </tr>`;
        if (this._buuPham.length === 0) {
            html += `<tr><td colspan="7">Chưa có bưu phẩm nào</td></tr>`;
        } else {
            this._buuPham.forEach(bp => {
                let status = bp.status ? "✅" : "❌";
                if (bp instanceof Thu) {
                    let loai = bp.loaiThu === 0 ? "Thường" : "Nhanh";
                    html += `<tr>
                <td>${bp.id}</td><td>${bp.address}</td><td>${bp.tenNguoiNhan}</td>
                <td>${bp.tinhPhiVanChuyen()}</td><td>Loại Thư: ${loai}</td><td>${status}</td>
                <td>
                  <button onclick="displayEdit(${bp.id})">✏️</button>
                  <button onclick="displayDel(${bp.id})">🗑️</button>
                </td></tr>`;
                } else if (bp instanceof HangHoa) {
                    html += `<tr>
                <td>${bp.id}</td><td>${bp.address}</td><td>${bp.tenNguoiNhan}</td>
                <td>${bp.tinhPhiVanChuyen()}</td><td>Trọng lượng: ${bp.trongLuong}kg</td><td>${status}</td>
                <td>
                  <button onclick="displayEdit(${bp.id})">✏️</button>
                  <button onclick="displayDel(${bp.id})">🗑️</button>
                </td></tr>`;
                }
            });
        }
        document.getElementById("display").innerHTML = html;
    }
}

// ===== Biến toàn cục =====
let ql = new QuanLyBuuPham();

// ===== Modal thêm =====
const addModal = document.getElementById("addModal");
document.getElementById("btnAddTop").onclick = () => addModal.style.display = "flex";
document.getElementById("btnAddBottom").onclick = () => addModal.style.display = "flex";
document.getElementById("closeAdd").onclick = () => addModal.style.display = "none";

document.getElementById("loaiBP").onchange = (e) => {
    document.getElementById("addThu").style.display = (e.target.value === "0") ? "block" : "none";
    document.getElementById("addHangHoa").style.display = (e.target.value === "1") ? "block" : "none";
};

document.getElementById("themThu").onclick = () => {
    let name = document.getElementById("addNguoiNhanThu").value;
    let addr = document.getElementById("addAddressThu").value;
    let loai = +document.getElementById("addLoaiThu").value;
    ql.themThu(addr, name, loai);
    ql.disPlayBuuPham();
    addModal.style.display = "none";
};

document.getElementById("themHangHoa").onclick = () => {
    let name = document.getElementById("addnguoiNhanHH").value;
    let addr = document.getElementById("addAddressHH").value;
    let w = +document.getElementById("addTrongLuong").value;
    ql.themHangHoa(addr, name, w);
    ql.disPlayBuuPham();
    addModal.style.display = "none";
};

// ===== Modal sửa =====
const editModal = document.getElementById("editModal");
document.getElementById("closeEdit").onclick = () => editModal.style.display = "none";

function displayEdit(id) {
    let bp = ql._buuPham.find(b => b.id == id);
    if (!bp) return;
    document.getElementById("editId").value = bp.id;
    document.getElementById("editNguoiNhan").value = bp.tenNguoiNhan;
    document.getElementById("editAddress").value = bp.address;
    document.getElementById("editStatus").checked = bp.status;
    if (bp instanceof Thu) {
        document.getElementById("editLoaiThuBox").style.display = "block";
        document.getElementById("editTrongLuongBox").style.display = "none";
        document.getElementById("editLoaiThu").value = bp.loaiThu;
    } else {
        document.getElementById("editLoaiThuBox").style.display = "none";
        document.getElementById("editTrongLuongBox").style.display = "block";
        document.getElementById("editTrongLuong").value = bp.trongLuong;
    }
    editModal.style.display = "flex";
}

document.getElementById("btnSaveEdit").onclick = () => {
    let id = +document.getElementById("editId").value;
    let name = document.getElementById("editNguoiNhan").value;
    let addr = document.getElementById("editAddress").value;
    let status = document.getElementById("editStatus").checked;
    let bp = ql._buuPham.find(b => b.id == id);
    if (bp instanceof Thu) {
        let loai = +document.getElementById("editLoaiThu").value;
        ql.suaThu(id, addr, name, status, loai);
    } else {
        let w = +document.getElementById("editTrongLuong").value;
        ql.suaHangHoa(id, addr, name, status, w);
    }
    ql.disPlayBuuPham();
    editModal.style.display = "none";
};

// ===== Xóa =====
function displayDel(id) {
    if (confirm("Bạn có chắc muốn xóa?")) {
        ql.xoaBuuPham(id);
        ql.disPlayBuuPham();
    }
}

// ===== Khởi tạo =====
ql.disPlayBuuPham();