// var arr = [] ;

//Tạo đối tượng danh sách sv từ lớp đối tượng DanhSachSV 
var dssv = new DanhSachSinhVien();
getLocalStorage ();
function getEle(id) {
  return document.getElementById(id);
}

function layTongTinSv (){
    var _maSV = getEle("txtMaSV").value ;
    var _tenSV = getEle("txtTenSV").value;
    var _email = getEle("txtEmail").value;
    var _password = getEle("txtPass").value ;
    var _dayOfBirth = getEle("txtNgaySinh").value ;
    var _khoaHoc = getEle("khSV").value ;
    var _diemToan = getEle("txtDiemToan").value *1;
    var _diemLy = getEle("txtDiemLy").value *1;
    var _diemHoa = getEle("txtDiemHoa").value *1;


    var sinhVien = new SinhVien(
        _maSV,
        _tenSV,
        _email,
        _password,
        _dayOfBirth,
        _khoaHoc,
        _diemToan,
        _diemLy,
        _diemHoa
    )
    sinhVien.diemTB();

    return sinhVien ;
}



/**
 * Theem SV
 */
getEle("btnThemSinhVien").addEventListener("click", function () {
    
    var sinhVien = layTongTinSv();
    dssv.themSV(sinhVien);
    // arr.push(sinhVien) ;
    taoBang(dssv.arr)
    setLocalStorage();
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


function taoBang(arr){
    var content ="" ;
    for(var i = 0; i < arr.length; i++){
        var sinhVien = arr[i];
        content +=
        `
        <tr>
            <td>${sinhVien.maSV}</td>
            <td>${sinhVien.tenSv    }</td>
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
        `
    }
    getEle("tbodySinhVien").innerHTML = content;
}
/**
 * Xoá SV
 */
function xoaSV(maSV){
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
function suaSV(maSV){
    // Bật button Update
    getEle("btnUpdate").style.display="inline-block"
    // console.log("suaSV");
    // Lấy thông tin sinh viên
    var sinhVien = dssv._suaSV(maSV);
    console.log(sinhVien);
    // show thông tin của sinhVien ra bên ngoài từng thẻ
    if (sinhVien) {
        getEle("txtMaSV").value = sinhVien.maSV ;
        // dissabled mã SV
        getEle("txtMaSV").disabled = true ;

        getEle("txtTenSV").value = sinhVien.tenSv ;
        getEle("txtEmail").value = sinhVien.email ;
        getEle("txtPass").value = sinhVien.password ;
        getEle("txtNgaySinh").value = sinhVien.dayOfBirth ;
        getEle("khSV").value = sinhVien.khoaHoc ;
        getEle("txtDiemToan").value = sinhVien.diemToan ;
        getEle("txtDiemLy").value = sinhVien.diemLy ;
        getEle("txtDiemHoa").value = sinhVien.diemHoa ;


    }

}

/**
 * update SV
 */

getEle("btnUpdate").addEventListener("click" , function(){
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
getEle("txtKeywords").addEventListener("keyup", function(){
    var keywords = getEle("txtKeywords").value ;
    // console.log("txtKeywords");
    var mangTimKiem = dssv.timKiemSV(keywords);
    taoBang(mangTimKiem);
    // setLocalStorage();
})


function setLocalStorage(){
    //chuyển data từ JSON => string
    var dataString = JSON.stringify(dssv.arr);

    // Lưu xuóng localStorage
    localStorage.setItem("DSSV", dataString)
}

function getLocalStorage () {
    var data = localStorage.getItem("DSSV");
    if(data){
        // Chuyển từ String => JSON
        var dataJson = JSON.parse(data);
        dssv.arr = dataJson;
        console.log(dssv.arr);
        taoBang(dssv.arr);
    }
}


