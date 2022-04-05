function DanhSachSinhVien (){
    this.arr = [] ;
    this.themSV = function (sv){
        this.arr.push(sv)
    };

    this.timViTriSV = function(maSV){
        var index = -1 ;
        for (var i = 0 ; i < this.arr.length; i++){
            var sinhVien = this.arr[i];
            if(sinhVien.maSV == maSV){
                index = i ;
                break
            }
        }
        return index;
    };
    this._xoaSV = function(maSV){
        /**
         * Tạo biến index = -1
         * Duyệt mảng arr
         * Nếu sinhVien.maSV trùn với maSV cần xoá
         * => Gán cho index vị trí tìm thấy ; break
         * Xoá phần tử trong mảng, arr.splice(index ,1);
         */
        // var index = -1 ;
        // for (var i = 0 ; i < this.arr.length; i++){
        //     var sinhVien = this.arr[i];
        //     if(sinhVien.maSV == maSV){
        //         index = i ;
        //         break
        //     }
        // }
        // if(index !== 1){
        //     this.arr.splice(index, 1);
        // }
        var index = this.timViTriSV(maSV);
        if(index !== -1){
            this.arr.splice(index, 1);
        }
    };
    this._suaSV = function(maSV){
        // Tìm vị trí dựa vào mã SV
        var index = this.timViTriSV(maSV);
        if (index !== -1 ){
            //Lấy object sinhVien trong arr dựa vào index
            var sinhVien = this.arr[index]
            return sinhVien
        }
        return null ;
    };
    this._capNhatSV = function(sinhVien){
        var index = this.timViTriSV(sinhVien.maSV);
        if (index !== -1 ){
            this.arr[index] = sinhVien;
        }
    };
    this.timKiemSV = function(keywords){
        /**
         * 0. mangTimKiem = [] ;
         * 1. Duyệt mảng this.arr
         * 2. Nếu sinhVien.tenSV trung voi keywords
         *      => push sinhVien vào mangTimKiem
         * 3. Trả về mangTimKiem
         */
        var mangTimKiem =[] ;
        for (var i = 0; i < this.arr.length; i++){
            var sinhVien = this.arr[i];
            if(sinhVien.tenSv.toLowerCase().indexOf(keywords.toLowerCase()) !== -1 ){
                mangTimKiem.push(sinhVien);
            }
        }
        return mangTimKiem;
    };

}


