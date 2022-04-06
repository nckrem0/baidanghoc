// var arr = [] ;

//Tạo đối tượng danh sách sv từ lớp đối tượng DanhSachSV
var dssv = new DanhSachSinhVien();

// Tạo đối tượng validation từ lớp đối tượng
var validation = new Validation();

getLocalStorage();
function getEle(id) {
    return document.getElementById(id);
}

// Tạo đối tượng validation từ lớp đối tượng
var validation = new Validation();

function layTongTinSv() {
    //DOM lấy giá trị người dùng nhập vào
    var _maSV = getEle("txtMaSV").value;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _password = getEle("txtPass").value;
    var _dayOfBirth = getEle("txtNgaySinh").value;
    var _khoaHoc = getEle("khSV").value;
    var _diemToan = getEle("txtDiemToan").value;
    var _diemLy = getEle("txtDiemLy").value;
    var _diemHoa = getEle("txtDiemHoa").value;

    //flag ( cờ)
    var isValid = true;

    //Validation Ma SV
    isValid &=
        validation.kiemTraRong(_maSV, "divErrorMaSV", "(*) Mã SV Không Được Rỗng") &&
        validation.kiemTraDoDaiKyTu(_maSV, "divErrorMaSV", "(*) Độ dài ký từ 4 đến 10", 4, 10);

    //Validation Ten SV
    isValid &=
        validation.kiemTraRong(_tenSV, "divErrorTenSV", "(*) Tên SV Không Được Rỗng") &&
        validation.kiemTraChuoiKyTu(_tenSV, "divErrorTenSV", "Kiểm tra lại chuỗi ký tự") &&
        validation.kiemTraDoDaiKyTu(_tenSV, "divErrorTenSV", "(*) Độ dài ký từ 4 đến 10", 4, 10);

    //Validation Email
    isValid &=
        validation.kiemTraRong(_email, "divErrorEmail", "(*) Email Không Được Rỗng") &&
        validation.kiemTraEmail(_email, "divErrorEmail", "(*) Email k đúng định dạng");

    //Validation Password
    isValid &= validation.kiemTraRong(_password, "divErrorPassWord", "(*) Password Không Được Rỗng");

    //Validation Toan
    isValid &= validation.kiemTraRong(_diemToan, "divErrorToan", "(*) Điểm Toán Không Được Rỗng");

    //Validation Ly
    isValid &= validation.kiemTraRong(_diemLy, "divErrorLy", "(*) Điểm Lý Không Được Rỗng");

    //Validation Hoa
    isValid &= validation.kiemTraRong(_diemHoa, "divErrorHoa", "(*) Điểm Hoá Không Được Rỗng");

    //check form
    if (!isValid) return null;

    // Tạo đối tượng sinhVien từ lớp đối tượng SinhVien
    var sinhVien = new SinhVien(_maSV, _tenSV, _email, _password, _dayOfBirth, _khoaHoc, _diemToan, _diemLy, _diemHoa);
    sinhVien.diemTB();

    return sinhVien;
}

/**
 * Theem SV
 */
getEle("btnThemSinhVien").addEventListener("click", function () {
    var sinhVien = layTongTinSv();
    if (sinhVien) {
        dssv.themSV(sinhVien);
        // arr.push(sinhVien) ;
        taoBang(dssv.arr);
        setLocalStorage();
    }
});

// function taoBang(arr){
//     //reset tbody
//     getEle("tbodySinhVien").innerHTML="";
//     console.log(arr);
//     for (var i = 0; i<arr.length; i++){
//         var sinhVien = arr[i];
//         // tạo dòng
//         var tagTR = document.createElement("tr");
//         //Tạo cột
//         var tagTD_MaSV = document.createElement("td");
//         var tagTD_TenSV = document.createElement("td");
//         var tagTD_Email = document.createElement("td");
//         var tagTD_DayOfBirth = document.createElement("td");
//         var tagTD_KhoaHoc = document.createElement("td");
//         var tagTD_DTB = document.createElement("td");

//         // Gán nội dung cho cột
//         tagTD_MaSV.innerHTML = sinhVien.maSV ;
//         tagTD_TenSV.innerHTML = sinhVien.tenSv ;
//         tagTD_Email.innerHTML = sinhVien.email ;
//         tagTD_DayOfBirth.innerHTML = sinhVien.dayOfBirth ;
//         tagTD_KhoaHoc.innerHTML = sinhVien.khoaHoc ;
//         tagTD_DTB.innerHTML = sinhVien.dtb ;

//         //append từng cột vào dòng
//         tagTR.appendChild(tagTD_MaSV);
//         tagTR.appendChild(tagTD_TenSV);
//         tagTR.appendChild(tagTD_Email);
//         tagTR.appendChild(tagTD_DayOfBirth);
//         tagTR.appendChild(tagTD_KhoaHoc);
//         tagTR.appendChild(tagTD_DTB);

//         // append dòng vào tbody

//         getEle("tbodySinhVien").appendChild(tagTR);
//     }

// }

function taoBang(arr) {
    var content = "";
    for (var i = 0; i < arr.length; i++) {
        var sinhVien = arr[i];
        content += `
        <tr>
            <td>${sinhVien.maSV}</td>
            <td>${sinhVien.tenSv}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.dayOfBirth}</td>
            <td>${sinhVien.khoaHoc}</td>
            <td>${sinhVien.dtb}</td>
            <td>
                <button class = "btn btn-danger" onclick="suaSV('${sinhVien.maSV}')" > Sửa </button>
            </td>
            <td>
                <button class = "btn btn-danger" onclick="xoaSV('${sinhVien.maSV}')" > Xoá </button>
            </td>
            
        </tr>
        `;
    }
    getEle("tbodySinhVien").innerHTML = content;
}
/**
 * Xoá SV
 */
function xoaSV(maSV) {
    // console.log(dssv.arr);
    dssv._xoaSV(maSV);
    // console.log(xoaSV);
    taoBang(dssv.arr);
    setLocalStorage();
    // getLocalStorage();
}
/**
 * Sửa sv
 *
 */
function suaSV(maSV) {
    // Bật button Update
    getEle("btnUpdate").style.display = "inline-block";
    // console.log("suaSV");
    // Lấy thông tin sinh viên
    var sinhVien = dssv._suaSV(maSV);
    console.log(sinhVien);
    // show thông tin của sinhVien ra bên ngoài từng thẻ
    if (sinhVien) {
        getEle("txtMaSV").value = sinhVien.maSV;
        // dissabled mã SV
        getEle("txtMaSV").disabled = true;

        getEle("txtTenSV").value = sinhVien.tenSv;
        getEle("txtEmail").value = sinhVien.email;
        getEle("txtPass").value = sinhVien.password;
        getEle("txtNgaySinh").value = sinhVien.dayOfBirth;
        getEle("khSV").value = sinhVien.khoaHoc;
        getEle("txtDiemToan").value = sinhVien.diemToan;
        getEle("txtDiemLy").value = sinhVien.diemLy;
        getEle("txtDiemHoa").value = sinhVien.diemHoa;
    }
}

/**
 * update SV
 */

getEle("btnUpdate").addEventListener("click", function () {
    // lấy thông tin sinh viên mới nhất từ các thẻ input
    var sinhVien = layTongTinSv();
    console.log(sinhVien);
    dssv._capNhatSV(sinhVien);
    taoBang(dssv.arr);
    setLocalStorage();
    // getLocalStorage();
});

/**
 * Tìm kiếm SV
 */
getEle("txtKeywords").addEventListener("keyup", function () {
    var keywords = getEle("txtKeywords").value;
    // console.log("txtKeywords");
    var mangTimKiem = dssv.timKiemSV(keywords);
    taoBang(mangTimKiem);
    // setLocalStorage();
});

function setLocalStorage() {
    //chuyển data từ JSON => string
    var dataString = JSON.stringify(dssv.arr);

    // Lưu xuóng localStorage
    localStorage.setItem("DSSV", dataString);
}

function getLocalStorage() {
    var data = localStorage.getItem("DSSV");
    if (data) {
        // Chuyển từ String => JSON
        var dataJson = JSON.parse(data);
        dssv.arr = dataJson;
        console.log(dssv.arr);
        taoBang(dssv.arr);
    }
}
