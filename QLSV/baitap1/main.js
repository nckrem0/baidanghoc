function getEle(id) {
    return document.getElementById(id);
}

function hienThiThongTin(){
    // Dom lấy thông tin từ các thẻ input
    
    var MaSV = getEle("txtMaSV").value ;
    var TenSV = getEle("txtTenSV").value ;
    var loaiSV = getEle("loaiSV"). value;
    var DiemToan = getEle("txtDiemToan").value *1;
    var DiemVan = getEle("txtDiemVan").value *1 ;
    
    // Xử lý : Tính điểm trung bình ; xếp loại
    var tinhDiemTBHS = tinhDTB(DiemToan,DiemVan) ;
    var xepLoaiSV = xepLoai(tinhDiemTBHS) ;
    //show
    getEle("spanTenSV").innerHTML = TenSV ;
    getEle("spanMaSV").innerHTML = MaSV ;
    getEle("spanLoaiSV").innerHTML = loaiSV ;
    getEle("spanDTB").innerHTML = tinhDiemTBHS ;
    getEle("spanXepLoai").innerHTML = xepLoaiSV ;
}
function tinhDTB(DiemToan,DiemVan){
    var dtb = (DiemToan+DiemVan) /2 ;
    return dtb;
}

function xepLoai(tinhDiemTBHS){
    if(8 <=tinhDiemTBHS  && tinhDiemTBHS < 10 ){
        return "Giỏi";
    }else if ( 6.5 <= tinhDiemTBHS && tinhDiemTBHS < 8 ){
        return "Khá" ;

    }else if ( 5 <= tinhDiemTBHS && tinhDiemTBHS < 6.5 ){
        return "TB" ;
        
    }else{
        return "Yếu";
    }
}