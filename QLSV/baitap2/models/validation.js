function Validation(){
    this.kiemTraRong = function (value, errorID, mess ){
        // var isValid = true ;
        if(value === ""){
            getEle(errorID).innerHTML = mess;
            getEle(errorID).style.display="block";
            return false ;
        }

        getEle(errorID).innerHTML = "";
        getEle(errorID).style.display="none";
        return true ;
        // return isValid
    };

    this.kiemTraDoDaiKyTu =function (value, errorID , mess, min, max) {
        if(value.trim().length >= min && value.trim().length <= max){
            // hop le
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display="none";
            return true ;
        }


        // k hop le
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display="block";
        return false ;
    };

    this.kiemTraChuoiKyTu =function (value,errorID,mess ) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$" ;
        if (value.match(letter)){
            //hop le
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display="none";
            return true ;
        }
        // khong hop le
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display="block";
        return false ;
    }

    this.kiemTraEmail = function (value, errorID , mess) {
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if (value.match(letter)){
            //hop le
            getEle(errorID).innerHTML = "";
            getEle(errorID).style.display="none";
            return true ;
        }
        // khong hop le
        getEle(errorID).innerHTML = mess;
        getEle(errorID).style.display="block";
        return false ;
    };
}
