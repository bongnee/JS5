function thueThuNhapCaNhan() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = document.getElementById("thuNhap").value;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;
    
    var thuNhapChiuThue = Number(thuNhap) - 4000000 - Number(nguoiPhuThuoc)*1600000; 
    
   
    var thue = tinhThue(thuNhapChiuThue);
    console.log(thue);

    document.getElementById("txtThue").innerHTML = "Họ và tên: " + hoTen + "<br> Thuế thu nhập cá nhân: " + thue.toLocaleString();
}
document.getElementById("btnThue").onclick = thueThuNhapCaNhan;

function tinhThue(object) {
    var thue = 0;
    if (object <= 60000000 && object >0){
        thue = 0.05 *object;
      
    } else if(object > 60000000 && object <=120000000){
        thue = 0.1 * object;
    }else if(object > 120000000 && object <=210000000){
        thue = 0.15 * object;
    }else if(object > 210000000 && object <=384000000){
        thue = 0.2 * object;
    }else if(object > 384000000 && object <=624000000){
        thue = 0.25 * object;
    }else if(object > 624000000 && object <=960000000){
        thue = 0.3 * thuNhapChiuThue;
    }else if(object > 960000000){
        thue = 0.35 * object;
    }else{
        thue = 0; 
    }
    return thue;
}