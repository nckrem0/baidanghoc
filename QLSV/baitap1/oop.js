function getEle(id) {
    return document.getElementById(id);
}


function hienThiThongTin(){
    // Dom lấy thông tin từ các thẻ input
    
    var _maSV = getEle("txtMaSV").value ;
    var _tenSV = getEle("txtTenSV").value ;
    var _loaiSV = getEle("loaiSV"). value;
    var _diemToan = getEle("txtDiemToan").value *1;
    var _diemVan = getEle("txtDiemVan").value *1 ;

    /**
     * Đối tượng(object) : 2 thành phần 
     * 1: Thuộc Tính(property) ( Thông tin thuộc về đối tượng )
     * 2: Phương Thức (method) (Chúc năng của đối tượng)
     */


    // var sinhVien = {
    //     /**
    //      * key: value
    //      *  - key: Do mình tự đặt tên
    //      *  - value: giá trị
    //      */

    //     //Property
    //     maSV: _maSV,
    //     tenSV: _tenSV,
    //     loaiSV: _loaiSV,
    //     diemToan: _diemToan ,
    //     dienVan: _diemVan ,
    //     diemTB : 0 ,


    //     //Method
    //     //diem trung binh
    //     tinhDTB: function(){
    //         // return (this.diemToan+this.dienVan) / 2 ;
    //         this.diemTB = (this.diemToan+this.dienVan) / 2 ;
    //     },
    //     // xep loai
    //     xepLoai: function (tinhDiemTBHS) {
    //         if(8 <=tinhDiemTBHS  && tinhDiemTBHS < 10 ){
    //             return "Giỏi";
    //         }else if ( 6.5 <= tinhDiemTBHS && tinhDiemTBHS < 8 ){
    //             return "Khá" ;
        
    //         }else if ( 5 <= tinhDiemTBHS && tinhDiemTBHS < 6.5 ){
    //             return "TB" ;
                
    //         }else{
    //             return "Yếu";
    //         }
    //     },
    // };

    // Tạo đối tượng sinhVien từ lớp đối tượng SinhVien
    var sinhVien = new SinhVien (_maSV, _tenSV, _loaiSV, _diemToan,_diemVan) ;
    console.log(sinhVien);




    sinhVien.tinhDTB();
    var loai =sinhVien.xepLoai(sinhVien.diemTB);

    getEle("spanTenSV").innerHTML = sinhVien.tenSV ;
    getEle("spanMaSV").innerHTML = sinhVien.maSV ;
    getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV ;
    getEle("spanDTB").innerHTML = sinhVien.diemTB ;
    getEle("spanXepLoai").innerHTML = loai ;
}
