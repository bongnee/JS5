/**
 * 
 */
// const X = 0;
// const A = 2;
// const B = 1;
// const C = 0.5;
// const DOITUONG_0 = 0;
// const DOITUONG_1 = 2.5;
// const DOITUONG_2 = 1.5;
// const DOITUONG_3 = 1;
function quanLyTuyenSinh() {
    var diemChuan = document.getElementById("diemChuan").value;
    var diem1 = document.getElementById("diem1").value;
    var diem2 = document.getElementById("diem2").value;
    var diem3 = document.getElementById("diem3").value;
    var khuVucX = document.getElementById("x");
    var khuVucA = document.getElementById("a");
    var khuVucB = document.getElementById("b");
    var khuVucC = document.getElementById("c");
    var doiTuong0 = document.getElementById("dt_0");
    var doiTuong1 = document.getElementById("dt_1");
    var doiTuong2 = document.getElementById("dt_2");
    var doiTuong3 = document.getElementById("dt_3");

    var diemKhuVuc = chonKhuVuc(khuVucX, khuVucA,khuVucB,khuVucC);
    var diemDoiTuong = chonDoiTuong(doiTuong0, doiTuong1,doiTuong2,doiTuong3);
    var diem = Number(diem1) + Number(diem2) + Number(diem3) + chonKhuVuc(khuVucX, khuVucA,khuVucB,khuVucC) + chonDoiTuong(doiTuong0, doiTuong1,doiTuong2,doiTuong3);
    
  

    var loai = xepLoai(diem1,diem2,diem3,diem,diemChuan);

    document.getElementById("txtDiem").innerHTML = diem +" "+ loai;
}
document.getElementById("btnDiem").onclick = quanLyTuyenSinh;

function chonKhuVuc(option1, option2, option3, option4) {
    var diemKhuVuc = 0
    if (option1.selected) {
        diemKhuVuc = 0 ;    
    }else if (option2.selected) {
        diemKhuVuc = 2;
    }else if (option3.selected) {
        diemKhuVuc = 1;
    }else if (option4.selected) {
        diemKhuVuc = 0.5;
    }
    return diemKhuVuc;
    
    
}
function chonDoiTuong(option5, option6, option7, option8) {
    var diemDoiTuong = 0
    if (option5.selected) {
        diemDoiTuong = 0 ;    
    }else if (option6.selected) {
        diemDoiTuong = 2.5;
    }else if (option7.selected) {
        diemDoiTuong = 1.5;
    }else if (option8.selected) {
        diemDoiTuong = 1;
    }
    return diemDoiTuong;
    
    
}
function xepLoai(diem1,diem2,diem3,diem,diemChuan) {
    var loai ="";
    if(diem >= diemChuan && diem1 > 0 && diem2 > 0 && diem3 > 0){
        loai= "đậu";
    }else{
        loai = "rớt";
    }
        
    return loai;

}

