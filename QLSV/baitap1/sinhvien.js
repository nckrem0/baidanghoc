//lop doi tuong sinh vien
// hàm khởi tạo của lớp đối tượng sinh viên
function SinhVien (_maSV, _tenSV, _loaiSV, _diemToan,_diemVan){
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.loaiSV = _loaiSV;
    this.diemToan = _diemToan;
    this.dienVan = _diemVan;
    this.diemTB = 0;


    this.tinhDTB = function () {
        this.diemTB = (this.diemToan+this.dienVan) / 2 ;
    }

    this.xepLoai = function (tinhDiemTBHS) {
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
}