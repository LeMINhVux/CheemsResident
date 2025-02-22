function AddNewResident(body, connection) {
  const {
    hoTen,
    bietDanh,
    namSinh,
    gioiTinh,
    noiSinh,
    nguyenQuan,
    danToc,
    tonGiao,
    quocTich,
    soHoChieu,
    noiThuongTru,
    diaChiHienNay,
    trinhDoHocVan,
    TrinhDoChuyenMon,
    bietTiengDanToc,
    trinhDoNgoaiNgu,
    ngheNghiep,
    noiLamViec,
    idNguoiTao,
    ngayTao,
    chungMinhThu,
  } = body
  const query = `INSERT INTO User (hoTen, bietDanh, namSinh, gioiTinh,
    noiSinh, nguyenQuan, danToc, tonGiao, quocTich, soHoChieu, noiThuongTru,
    diaChiHienNay, trinhDoHocVan, TrinhDoChuyenMon, bietTiengDanToc,
    trinhDoNgoaiNgu, ngheNghiep, noiLamViec, idNguoiTao, ngayTao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  const values = [
    hoTen,
    bietDanh,
    namSinh,
    gioiTinh,
    noiSinh,
    nguyenQuan,
    danToc,
    tonGiao,
    quocTich,
    soHoChieu,
    noiThuongTru,
    diaChiHienNay,
    trinhDoHocVan,
    TrinhDoChuyenMon,
    bietTiengDanToc,
    trinhDoNgoaiNgu,
    ngheNghiep,
    noiLamViec,
    idNguoiTao,
    ngayTao,
  ]
  connection.query(query, values, (error, result) => {
    if (error) {
      return false
    }
    const residentID = result.insertId
    const query2 = "INSERT INTO chung_minh_thu(idNhanKhau, soCMT) values (?, ?)"
    connection.query(query2, [residentID, chungMinhThu], (error2, result2) => {
      if (error) {
        return false
      }
      const query3 = "INSERT INTO tieu_su(idNhanKhau, diaChi, ngheNghiep, noiLamViec) values (?, ?, ?, ?)"
      connection.query(query3, [residentID, diaChiHienNay, ngheNghiep, noiLamViec])
    })
  })
  return true
}
