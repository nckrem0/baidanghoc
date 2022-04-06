function SinhVien(
  _maSV,
  _tenSV,
  _email,
  _password,
  _dayOfBirth,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSV = _maSV;
  this.tenSv = _tenSV;
  this.email = _email;
  this.password = _password;
  this.dayOfBirth = _dayOfBirth;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.dtb = 0;

  this.diemTB = function () {
    this.dtb = (parseFloat(this.diemToan) + parseFloat(this.diemHoa) + parseFloat(this.diemLy)) / 3;
  };
}


