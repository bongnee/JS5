function tinhTienCap() {
    var nhaDan = document.getElementById("nhaDan");
    var doanhNghiep = document.getElementById("doanhNghiep");
    var maKhachHang = document.getElementById("maKhachHang").value;
    var soKenh = document.getElementById("soKenh").value;
    var soKetNoi = document.getElementById("soKetNoi").value;
   



   var loaiMucGia = kiemTraMucGia(nhaDan, doanhNghiep);
   var tien = 0;
   switch (loaiMucGia){
    case "Nhà dân":
        tien = 4.5 +20.5 +7.5*soKenh;
    break;
    case "Doanh nghiệp":
        tien = tinhTienDoanhNghiep(soKetNoi,soKenh)
    break;
    
   }
   document.getElementById("txtTienCap").innerHTML ="mã khách hàng:"+ maKhachHang +"<br> loại khách hàng:" + loaiMucGia + "<br> tiền cáp:"+ tien.toLocaleString() + "$";
}

document.getElementById("btnTienCap").onclick = tinhTienCap; 


function kiemTraMucGia(radio1, radio2) {
    var loaiMucGia = "";
    if (radio1.checked){
        loaiMucGia = "Nhà dân";
    
    }else if (radio2.checked) {
        loaiMucGia = "Doanh nghiệp";
    }else{
        alert("Hãy chọn loại khách hàng");
    }
    return loaiMucGia;
    
}

function tinhTienDoanhNghiep(ketNoi,kenh) {
    var tienDN = 0;
    if (ketNoi <=10) {
        tienDN = 15 + 7.5*Number(ketNoi) + 50*Number(kenh);
    }else{
        tienDN = 15 + 75 + (Number(ketNoi) - 10)*5 + 50*Number(kenh);
    }
    return tienDN;
}


